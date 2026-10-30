import { pool } from "../db/pool.js";

export const profileService = async () => {
  const result = await pool.query(
    "SELECT name, slogan, logo, photo FROM empresa",
  );

  if (result.rowCount === 0) {
    return null;
  }

  return result.rows[0];
};
