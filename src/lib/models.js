import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 3,
      max: 20,
    },
    given_name: {
      type: String,
    },
    family_name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    password: {
      type: String,
    },
    img: {
      type: String,
    },
    isPremiumUser: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.models?.User || mongoose.model("User", userSchema);

export { User };
