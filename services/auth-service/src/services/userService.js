import { pool } from "../db/pool.js";
import bcrypt from "bcrypt";

export const readUser = async (userId) => {
  if (!userId) {
    throw new Error("No se envió el Id");
  }

  const user = await pool.query(
    `SELECT * FROM credentials WHERE user_id = $1`,
    [userId],
  );

  return user.rows[0];
};

export const createUser = async (user, password) => {
  const passwordHash = await bcrypt.hash(password, 12);
  const newUser = await pool.query(
    `INSERT INTO credentials (username, password_hash)
     VALUES ($1, $2)
     RETURNING user_id, username`,
    [user, passwordHash],
  );

  return newUser.rows[0];
};

export const updateUser = async (userId, password) => {
  const passwordHash = await bcrypt.hash(password, 12);

  const result = await pool.query(
    `UPDATE credentials
     SET password_hash = $1
     WHERE user_id = $2
     RETURNING user_id, username`,
    [passwordHash, userId],
  );

  return result.rows[0];
};

export const allUsers = async () => {
  const users = await pool.query(
    `SELECT user_id, username, is_active FROM credentials WHERE NOT is_admin`,
  );

  return users.rows;
};

export const activeUsers = async (userId, isActive) => {
  const user = await pool.query(
    `UPDATE credentials SET is_active = $1 WHERE user_id = $2 RETURNING user_id, username, is_active`,
    [isActive, userId],
  );
  if (user.rowCount > 0) {
    return user.rows[0];
  }
};
