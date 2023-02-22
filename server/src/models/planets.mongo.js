import mongoose from "mongoose";

const planetsSchema = new mongoose.Schema({
  keplerName: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Planet", planetsSchema);
