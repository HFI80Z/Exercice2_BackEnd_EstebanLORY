import express from "express";
import TodoController from "../controllers/todoController.js";

const router = express.Router();

router.get("/tasks", TodoController.list);
router.post("/tasks", TodoController.add);
router.delete("/tasks/:id", TodoController.delete);

export default router;
