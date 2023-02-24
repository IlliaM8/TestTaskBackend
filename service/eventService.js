import Event from "../model/Event.js";
import User from "../model/User.js";

class EventService {
  async create(req) {
    const event = new Event({
      title: req.body.title,
      description: req.body.description,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      owner: req.params.id,
    });
    const sEvent = await event.save();

    const nextEventDate = await Event.findOne({
      owner: req.params.id,
    }).gte("startDate", new Date().getTime());
    User.findByIdAndUpdate(
      req.params.id,
      {
        $push: { event: sEvent._id },
        nextEventDate: nextEventDate.startDate,
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
    return event;
  }
  async getAll(req) {
    const user = await Event.find({ owner: req.params.id });
    if (!user) {
      throw new Error("Users not found");
    }
    return user;
  }
}

export default new EventService();
