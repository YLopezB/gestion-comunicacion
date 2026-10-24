import bcrypt from "bcrypt";
import { pool } from "./pool.js";

export async function initializeAdmin() {
  const username = "admin";
  const password = process.env.ADMIN_PASSWORD;

  //tabla de auth
  try {
    await pool.query(
      `CREATE TABLE IF NOT EXISTS credentials (
    user_id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
    username VARCHAR(50) NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    is_admin BOOLEAN NOT NULL DEFAULT FALSE,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
)`,
    );
  } catch (error) {
    console.error("error:", error);
  }

  //Tabla sessions
  try {
    await pool.query(
      `CREATE TABLE IF NOT EXISTS sessions (
    session_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    expires_at TIMESTAMPTZ NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
)`,
    );
  } catch (error) {
    console.error("error:", error);
  }

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
    `INSERT INTO credentials (username, password_hash, is_admin)
     VALUES ($1, $2, $3)`,
    [username, passwordHash, true],
  );

  console.log("Cuenta administrativa creada correctamente.");
}
