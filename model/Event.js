import mongoose from "mongoose";

const Event = new mongoose.Schema({
  title: {
    type: String,
    unique: false,
    required: [true, "Title is required"],
  },
  description: {
    type: String,
    unique: false,
    required: [true, "Description is required"],
  },
  startDate: {
    type: Number,
    unique: true,
    required: [true, "StartDate is required"],
  },
  endDate: {
    type: Number,
    unique: true,
    required: [true, "EndDate is required"],
  },
  owner: {
    ref: "User",
    type: mongoose.Schema.Types.ObjectId,
  },
});

export default mongoose.model("Event", Event);
