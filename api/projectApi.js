import express from "express";
import {
  create,
  deleteProject,
  fetch,
  update,
} from "../controller/projectController.js";

const router = express.Router();

// Define the routes and link them to the controller functions
router.get("/getallprojects", (req, res) => {
  console.log("GET /getallprojects route hit");
  fetch(req, res);
});

router.post("/create", (req, res) => {
  console.log("POST /create route hit");
  create(req, res);
});

router.put("/update/:id", (req, res) => {
  console.log("PUT /update/:id route hit");
  update(req, res);
});

router.delete("/delete/:id", (req, res) => {
  console.log("DELETE /delete/:id route hit");
  deleteProject(req, res);
});

export default router;
