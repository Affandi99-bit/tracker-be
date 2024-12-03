import express from "express";
import projectApi from "../api/projectApi.js"; // Import the new API file

const route = express.Router();

// Use the projectApi routes
route.use("/project", projectApi);

export default route;
