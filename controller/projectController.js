import Project from "../model/projectModel.js";

export const create = async (req, res) => {
  try {
    const projectData = new Project(req.body);
    const savedProject = await projectData.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const fetch = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const updateProject = await Project.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updateProject) {
      return res.status(404).json({ message: "Project not found." });
    }
    res.status(200).json(updateProject);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedProject = await Project.findByIdAndDelete(id);
    if (!deletedProject) {
      return res.status(404).json({ message: "Project not found." });
    }
    res.status(200).json({ message: "Project deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
