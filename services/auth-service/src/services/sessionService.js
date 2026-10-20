import { pool } from "../db/pool.js";

export const Session = async (user_id) => {
  const expires_at = Date.now() + 5 * 60 * 1000;

  const result = await pool.query(
    `INSERT INTO sessions (user_id, expires_at)
     VALUES ($1, $2)`,
    [user_id, expires_at],
  );

  return result.rows[0];
};
