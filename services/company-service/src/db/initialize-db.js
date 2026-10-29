import { pool } from "./pool";

export async function initialize() {
  try {
    await pool.query(
      `CREATE TABLE IF NOT EXISTS areas (
    area_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    depends_on UUID DEFAULT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
)`,
    );
  } catch (error) {}
}
