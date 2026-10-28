import { pool } from "./pool";

export async function initialize() {
  try {
    await pool.query(
      `CREATE TABLE IF NOT EXISTS areas (
    area_id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
    username VARCHAR(50) NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    is_admin BOOLEAN NOT NULL DEFAULT FALSE,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
)`,
    );
  } catch (error) {}
}
