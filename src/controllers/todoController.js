import Todo from "../models/todoModel.js";

const todoModel = new Todo();

export default class TodoController {
  static list(req, res) {
    res.json(todoModel.getAll());
  }
  static add(req, res) {
    const { title } = req.body;
    if (!title) return res.status(400).json({ error: "title requis" });
    const newTask = todoModel.addTask(title);
    res.status(201).json(newTask);
  }
  static delete(req, res) {
    const id = parseInt(req.params.id);
    const deleted = todoModel.deleteTask(id);
    if (!deleted) return res.status(404).json({ error: "introuvable" });
    res.json({ message: "supprimé" });
  }
}