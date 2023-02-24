import { Types } from "mongoose";
import MyUser from "../model/MyUser.js";
import User from "../model/User.js";

class UserService {
  async create(req) {
    const _id = new Types.ObjectId();
    const user = {
      _id,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      owner: req.userId,
    };
    const newUser = new User(user);
    await newUser.save();

    MyUser.findByIdAndUpdate(
      req.userId,
      {
        $push: { users: _id },
      },
      (err, doc) => {
        if (err) {
          throw new Error(err);
        }
        if (!doc) {
          throw new Error("User not found");
        }
      }
    );
    return newUser;
  }
  async getAll(req) {
    const resPerPage = req.params.limit;
    const page = req.params.page || 1;
    const users = await User.find({ owner: req.userId })
      .skip(resPerPage * page - resPerPage)
      .limit(resPerPage);
    const numOfUsers = await User.count({ owner: req.userId });

    if (!users) {
      throw new Error("Users not found");
    }
    return {
      users: users,
      numOfUsers,
    };
  }

  async getOne(req) {
    const user = await User.findById(req.params.id);
    if (!user) {
      throw new Error("Users not found");
    }
    return user;
  }
}
export default new UserService();
