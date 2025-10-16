import Task from "../models/todoModel.js";

const tasks = [];

export default class TodoController {
  static list(req, res) {
    res.json({
      success: true,
      count: tasks.length,
      tasks: tasks.map(t => t.toJSON())
    });
  }

  static add(req, res) {
    const { title, description = "" } = req.body;
    if (!title) return res.status(400).json({ success: false, error: "title requis" });
    const task = new Task(title, description);
    tasks.push(task);
    res.status(201).json({
      success: true,
      message: "Task created",
      task: task.toJSON()
    });
  }

  static delete(req, res) {
    const id = parseInt(req.params.id);
    const index = tasks.findIndex(t => t.id === id);
    if (index === -1) return res.status(404).json({ success: false, error: "Task not found" });
    tasks.splice(index, 1);
    res.json({ success: true, message: "Task deleted" });
  }
}
