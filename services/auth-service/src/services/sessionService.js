import { pool } from "../db/pool.js";

export const createSession = async (user_id) => {
  const result = await pool.query(
    `INSERT INTO sessions (user_id, expires_at)
    VALUES ($1, NOW() + INTERVAL '10 minutes')
   RETURNING *`,
    [user_id],
  );

  const session_id = result.rows[0].session_id;

  return session_id;
};

export const readSession = async (session_id) => {
  const result = await pool.query(
    `SELECT * FROM sessions WHERE session_id = $1`,
    [session_id],
  );

  return result.rows[0];
};

export const updateSession = async (session_id) => {
  const result = await pool.query(
    `UPDATE sessions
     SET expires_at = NOW() + INTERVAL '10 minutes'
     WHERE session_id = $1
     RETURNING *`,
    [session_id],
  );

  return result.rows[0];
};

export const deleteSession = async (session_id) => {
  const result = await pool.query(
    `DELETE FROM sessions
     WHERE session_id = $1
     RETURNING *`,
    [session_id],
  );

  return result.rows[0];
};
