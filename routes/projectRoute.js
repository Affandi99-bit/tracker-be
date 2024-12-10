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

route.get("/search", async (req, res, next) => {
  const { pic, client, pm } = req.query;
  const query = {};
  if (pic) query.pic = { $regex: pic, $options: "i" };
  if (client) query.client = { $regex: client, $options: "i" };
  if (pm) query.pm = { $regex: pm, $options: "i" };

  try {
    const results = await Project.find(query);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
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
