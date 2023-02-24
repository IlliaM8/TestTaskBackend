import mongoose from "mongoose";

const User = new mongoose.Schema({
  _id: { type: mongoose.Types.ObjectId },
  firstName: { type: String, required: [true, "First name is required"] },
  lastName: { type: String, required: [true, "Last name is required"] },
  phoneNumber: {
    type: Number,
    required: [true, "Phonenumber is required"],
  },
  email: { type: String, required: [true, "Email is  required"] },
  owner: { ref: "MyUser", type: mongoose.Schema.Types.ObjectId },
  event: [{ ref: "Event", type: mongoose.Schema.Types.ObjectId }],
  nextEventDate: { type: Number },
});
User.post("save", function (error, doc, next) {
  if (error.code === 11000) {
    next(new Error("Event on this date already exists"));
  } else {
    next();
  }
});
export default mongoose.model("User", User);
