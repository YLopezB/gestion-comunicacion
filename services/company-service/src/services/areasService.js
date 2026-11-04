import { pool } from "../db/pool.js";

export const createAreaService = async (areaData) => {
  const { name, description, responsible_user_id, depends_on } = areaData;
  const result = await pool.query(
    "INSERT INTO areas (name, description, responsible_user_id, depends_on) VALUES ($1, $2, $3, $4) RETURNING *",
    [name, description, responsible_user_id, depends_on],
  );
  return result.rows[0];
};

export const updateAreaService = async (areaData) => {
  const { area_id, name, description, responsible_user_id, depends_on } = areaData;
  const result = await pool.query(
    "UPDATE areas SET name = $1, description = $2, responsible_user_id = $3, depends_on = $4 WHERE area_id = $5 RETURNING *",
    [name, description, responsible_user_id, depends_on, area_id]
  );
  return result.rows[0];
};

export const allAreasService = async () => {
  const result = await pool.query("SELECT * FROM areas");
  return result.rows;
};
