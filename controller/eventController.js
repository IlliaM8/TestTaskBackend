import eventService from "../service/eventService.js";

class EventController {
  async create(req, res) {
    try {
      const event = await eventService.create(req);
      res.json(event);
    } catch (e) {
      res.status(404).json(e);
    }
  }
  async getAll(req, res) {
    try {
      const events = await eventService.getAll(req);
      res.json(events);
    } catch (e) {
      res.status(400).json(e.message);
    }
  }
}
export default new EventController();
