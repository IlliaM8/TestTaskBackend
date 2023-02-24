import mongoose from "mongoose";

const MyUser = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  firstName: {
    type: String,
    unique: false,
    required: [true, "First name is required"],
  },
  lastName: {
    type: String,
    unique: false,
    required: [true, "Last name is required"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email is  required"],
    validate: {
      validator: (v) => {
        return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(v);
      },
      message: () => `Is not valid email adress`,
    },
  },

  password: {
    type: String,
    unique: false,
    required: [true, "Password is required"],
  },

  users: [
    {
      ref: "User",
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
});

MyUser.post("save", function (error, doc, next) {
  if (error.code === 11000) {
    next(new Error("User with this email already exists"));
  } else {
    next();
  }
});
export default mongoose.model("MyUser", MyUser);
