import { pool } from "../db/pool.js";

export const createCargoService = async (data) => {
  const { name, description, area_id, depends_on } = data;
  const result = await pool.query(
    "INSERT INTO cargos (name, description, area_id, depends_on) VALUES ($1, $2, $3, $4) RETURNING *",
    [name, description, area_id, depends_on],
  );
  return result.rows[0];
};

export const updateCargoService = async (data) => {
  const { name, description, area_id, depends_on, cargo_id } = data;
  const result = await pool.query(
    "UPDATE cargos SET name = $1, description = $2, area_id = $3, depends_on = $4 WHERE cargo_id = $5 RETURNING *",
    [name, description, area_id, depends_on, cargo_id],
  );
  return result.rows[0];
};

export const allCargoService = async () => {
  const result = await pool.query("SELECT * FROM cargos");
  return result.rows;
};
