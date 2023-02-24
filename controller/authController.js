import AuthService from "../service/AuthService.js";

class AuthController {
  async registration(req, res) {
    try {
      const user = await AuthService.registration(req);
      res.json(user);
    } catch (e) {
      console.log(e);
      res.status(400).json(e);
    }
  }
  async login(req, res) {
    try {
      const token = await AuthService.login(req.body);
      res.json(token);
    } catch (e) {
      res.status(400).json(e.message);
    }
  }
  async checkAuth(req, res) {
    try {
      const user = await AuthService.checkAuth(req);
      res.json(user);
    } catch (e) {
      res.status(400).json(e.message);
    }
  }
}

export default new AuthController();
