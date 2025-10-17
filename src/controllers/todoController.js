import { getAllTodos, addTodo, deleteTodo } from "../models/todoModel.js";

export default class TodoController {
  static async list(req, res) {
    try {
      const todos = await getAllTodos();
      res.json(todos);
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "Erreur serveur" });
    }
  }

  static async add(req, res) {
    try {
      const { title } = req.body;
      if (!title) return res.status(400).json({ error: "Le titre est requis" });
      const newTask = await addTodo(title);
      res.status(201).json(newTask);
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "Erreur serveur" });
    }
  }

  static async delete(req, res) {
    try {
      const id = parseInt(req.params.id, 10);
      if (Number.isNaN(id)) return res.status(400).json({ error: "ID invalide" });
      const ok = await deleteTodo(id);
      if (!ok) return res.status(404).json({ error: "Tâche introuvable" });
      res.json({ message: "Tâche supprimée avec succès" });
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "Erreur serveur" });
    }
  }
}
