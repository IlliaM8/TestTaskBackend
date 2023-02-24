import UserService from "../service/UserService.js";

class UserController {
  async create(req, res) {
    try {
      const newUser = await UserService.create(req);
      res.json(newUser);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const users = await UserService.getAll(req);
      res.json(users);
    } catch (e) {
      res.status(400).json("e.massage");
    }
  }
}
export default new UserController();
