import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import route from "./routes/projectRoute.js";
import http from "node:http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 5001;
const MONGOURL = process.env.MONGO_URL;
const allowedOrigins = "https://blackmanager.netlify.app";

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
});
console.log("allowed origin:", allowedOrigins);

// Middleware
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

// Routes
app.use("/api/report", route);

// Real-time Updates
io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  socket.on("createData", (newData) => {
    io.emit("dataCreated", newData);
    console.log("this post updated with socket.io");
  });

  socket.on("updateData", (updatedData) => {
    io.emit("dataUpdated", updatedData);
  });

  socket.on("deleteData", (deletedId) => {
    io.emit("dataDeleted", deletedId);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

// Database Connection
mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("Database connected successfully.");
    server.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running`);
    });
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });
