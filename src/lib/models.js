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

// const responseDataSchema = new mongoose.Schema({
//   overview: {
//     type: String,
//     required: true,
//   },
//   keyFeatures: {
//     type: [String],
//     required: true,
//   },
//   roadmap: {
//     type: [String],
//     required: true,
//   },
//   techStackSuggestions: {
//     frontend: {
//       type: String,
//       required: true,
//     },
//     backend: {
//       type: String,
//       required: true,
//     },
//     database: {
//       type: String,
//       required: true,
//     },
//     cloudStorage: {
//       type: String,
//       required: true,
//     },
//   },
//   monetizationStrategy: {
//     type: String,
//     required: true,
//   },
//   marketingStrategy: {
//     type: String,
//     required: true,
//   },
// });

// Answer model
const answerSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  message: {
    inputMessage: {
      type: String,
      required: true,
      min: 10, // Change this
    },
    responseMessage: {
      type: String,
      // type: responseDataSchema, // Embed responseDataSchema into responseMessage
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
});

// Define Messages model based on the schema
const Answer =
  mongoose.models?.Answer || mongoose.model("Answer", answerSchema);

export { User, Answer };
