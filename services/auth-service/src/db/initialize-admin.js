import bcrypt from "bcrypt";
import { pool } from "./pool.js";

export async function initializeAdmin() {
  const username = "admin";
  const password = process.env.ADMIN_PASSWORD;

  await pool.query(
    `CREATE TABLE IF NOT EXISTS credentials (
    user_id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
    username VARCHAR(50) NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
)`,
  );

  const existingAdmin = await pool.query(
    "SELECT user_id FROM credentials WHERE username = $1",
    [username],
  );

  if (existingAdmin.rowCount > 0) {
    console.log("La cuenta administrativa ya existe.");
    return;
  }

  const passwordHash = await bcrypt.hash(password, 12);

  await pool.query(
    `INSERT INTO credentials (username, password_hash)
     VALUES ($1, $2)`,
    [username, passwordHash],
  );

  console.log("Cuenta administrativa creada correctamente.");
}
