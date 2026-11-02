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

export const updateProfileService = async (data) => {
  const { name, slogan, logo, photo } = data;
  const result = await pool.query(
    "UPDATE empresa SET name = $1, slogan = $2, logo = $3, photo = $4 RETURNING *",
    [name, slogan, logo, photo],
  );

  if (result.rowCount === 0) {
    return null;
  }

  return result.rows[0];
};
