import userService from "../service/userService.js";

class UserController {
  async create(req, res) {
    try {
      const newUser = await userService.create(req);
      res.json(newUser);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const users = await userService.getAll(req);
      res.json(users);
    } catch (e) {
      res.status(400).json("e.massage");
    }
  }
}
export default new UserController();
