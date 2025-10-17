import { pool } from "../config/db.js";

const q = (text, params) => pool.query(text, params);

export async function getAllTodos() {
  const { rows } = await q("SELECT id, title, done, created_at FROM todos ORDER BY id DESC");
  return rows;
}

export async function addTodo(title) {
  const { rows } = await q(
    "INSERT INTO todos (title) VALUES ($1) RETURNING id, title, done, created_at",
    [title]
  );
  return rows[0];
}

export async function deleteTodo(id) {
  const { rowCount } = await q("DELETE FROM todos WHERE id = $1", [id]);
  return rowCount > 0;
}
