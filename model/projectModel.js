import mongoose from "mongoose";

const crewSchema = new mongoose.Schema({
  name: String,
  roles: [String],
});

const BackupSchema = new mongoose.Schema({
  source: String,
  target: String,
});

const expenseSchema = new mongoose.Schema({
  rent: [{ name: String, price: String, qty: String, note: String }],
  operational: [
    {
      name: String,
      price: String,
      qty: String,
      category: String,
      note: String,
    },
  ],
  orderlist: [{ name: String, qty: String, note: String }],
});

const daySchema = new mongoose.Schema({
  date: String,
  crew: [crewSchema],
  expense: expenseSchema,
  note: String,
  backup: [BackupSchema],
  template: Boolean,
});

const projectSchema = new mongoose.Schema(
  {
    title: String,
    pm: String,
    start: String,
    deadline: String,
    status: [String],
    client: String,
    pic: String,
    final_file: String,
    final_report_file: String,
    note: String,
    categories: [String],
    type: [String],
    day: [daySchema],
    dp: String,
    lunas: String,
    invoice: String,
    total: String,
  },
  { timestamps: true }
);

export default mongoose.model("projects", projectSchema);
