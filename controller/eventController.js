import EventService from "../service/EventService.js";

class EventController {
  async create(req, res) {
    try {
      const event = await EventService.create(req);
      res.json(event);
    } catch (e) {
      res.status(404).json(e);
    }
  }
  async getAll(req, res) {
    try {
      const events = await EventService.getAll(req);
      res.json(events);
    } catch (e) {
      res.status(400).json(e.message);
    }
  }
}
export default new EventController();
