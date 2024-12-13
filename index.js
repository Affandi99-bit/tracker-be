import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import route from "./routes/projectRoute.js";

const app = express();

const PORT = process.env.PORT || 5001;
const MONGOURL = process.env.MONGO_URL;

// Middleware
app.use(cors({ origin: "https://blackmanager.netlify.app" }));
app.use(bodyParser.json());

// Routes
app.use("/api/report", route);

// Database Connection
mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("Database connected successfully.");
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running`);
    });
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });
