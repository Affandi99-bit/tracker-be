import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  createdAt: { type: Date, default: Date.now },
  title: { type: String, required: true },
  pm: { type: String, required: true },
  deadline: { type: String, required: true },
  status: [{ type: String, required: true }],
  crew: [
    {
      name: { type: String, required: true },
      payment: { type: String },
    },
  ],
  client: { type: String, required: true },
  pic: { type: String, required: true },
  final_file: { type: String },
  final_report_file: { type: String },
  note: { type: String },
  payment: [{ type: String }],
});

export default mongoose.model("projects", projectSchema);
