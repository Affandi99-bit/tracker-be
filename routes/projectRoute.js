import express from "express";
import {
  create,
  deleteProject,
  fetch,
  update,
} from "../controller/projectController.js";

const route = express.Router();
route.get("/getallprojects", (req, res, next) => {
  console.log("GET /getallprojects route hit");
  fetch(req, res);
});

route.post("/create", (req, res, next) => {
  console.log("POST /create route hit");
  create(req, res);
});

route.put("/update/:id", (req, res, next) => {
  console.log("PUT /update/:id route hit");
  update(req, res);
});

route.delete("/delete/:id", (req, res, next) => {
  console.log("DELETE /delete/:id route hit");
  deleteProject(req, res);
});

export default route;
