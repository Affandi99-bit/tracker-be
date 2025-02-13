import mongoose from "mongoose";

const crewSchema = new mongoose.Schema({
  name: { type: String },
  roles: [{ type: String }],
});

const expenseSchema = new mongoose.Schema({
  sewa: [
    { name: { type: String }, price: { type: String }, qty: { type: String } },
  ],
  operational: [
    { name: { type: String }, price: { type: String }, qty: { type: String } },
  ],
  orderlist: [{ name: { type: String }, qty: { type: String } }],
});

const daySchema = new mongoose.Schema({
  crew: [crewSchema],
  expense: { expenseSchema },
  note: { type: String },
});

const projectSchema = new mongoose.Schema(
  {
    title: { type: String },
    pm: { type: String },
    deadline: Date,
    status: [{ type: String }],
    client: { type: String },
    pic: { type: String },
    final_file: { type: String },
    final_report_file: { type: String },
    note: { type: String },
    categories: [{ type: String }],
    type: [{ type: String }],
    day: [daySchema],
    dp: { type: String },
    lunas: { type: String },
    invoice: { type: String },
    total: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("projects", projectSchema);
