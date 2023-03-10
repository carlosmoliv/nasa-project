import mongoose from "mongoose";

const launchesSchema = new mongoose.Schema({
  flightNumber: {
    type: Number,
    require: true,
  },
  launcheDate: {
    type: Date,
    required: true,
  },
  mission: {
    type: String,
    required: true,
  },
  rocket: {
    type: String,
    required: true,
  },
  target: {
    type: String,
    required: true,
  },
  customers: [String],
  upcoming: {
    type: Boolean,
    required: true,
  },
  success: {
    type: Boolean,
    require: true,
    default: true,
  },
});

export default mongoose.model("Launch", launchesSchema);
