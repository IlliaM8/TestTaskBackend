import bcrypt from "bcrypt";
import MyUser from "../model/MyUser.js";
import { generateAccessToken } from "../utils/genToken.js";
import { Types } from "mongoose";

class AuthService {
  async registration(req) {
    let { firstName, lastName, email, password } = req.body;
    console.log(req.body);
    if (password) password = bcrypt.hashSync(password, 7);
    const _id = new Types.ObjectId();
    const createdUser = new MyUser({
      _id,
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      password: password.trim(),
    });

    await createdUser.save();
    const token = generateAccessToken(_id);

    return token;
  }

  async login(inf) {
    const { email, password } = inf;

    const user = await MyUser.findOne({ email });
    if (!user) {
      throw new Error(`${email} user not found`);
    }

    const validPass = bcrypt.compareSync(password, user.password);
    if (!validPass) {
      throw new Error("Invalid password");
    }

    const token = generateAccessToken(user._id);
    return token;
  }
}

export default new AuthService();
