import dotenv from "dotenv";
import pg from "pg";

dotenv.config();

const { Pool } = pg;

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // ssl: { rejectUnauthorized: false } // enable for some prod envs
});

export async function testDB() {
  const { rows } = await pool.query("SELECT 1 AS ok");
  console.log("✅ PostgreSQL connecté (test)", rows[0]);
}
