import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes/projectRoute.js";

const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: "https://blackmanager.netlify.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

dotenv.config();

const PORT = process.env.PORT || 5001;
const MONGOURL = process.env.MONGO_URL;

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("Database connected Successfully.");
  })
  .catch((error) => console.log(error));

app.use("/api/report", route);

export default app;
