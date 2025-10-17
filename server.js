import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { testDB } from "./src/config/db.js";  // <-- export nommé

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Lance un petit test de connexion PG (non bloquant)
testDB().catch((e) => console.error("❌ Erreur PostgreSQL:", e.message));

// Routes
import todoRoutes from "./src/routes/todoRoutes.js";
app.use("/api/todos", todoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server on ${PORT}`));
