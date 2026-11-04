import { pool } from "../db/pool.js";

export const createAsignSevice = async (data) => {
  const { cargo_id, user_id, fecha_inicio } = data;
  const result = await pool.query(
    "INSERT INTO asignaciones_cargos (cargo_id, user_id, fecha_inicio) VALUES ($1, $2, $3)",
    [cargo_id, user_id, fecha_inicio],
  );
  return result.rows[0];
};

export const updateAsignSevice = async (data) => {
  const { assignment_id, fecha_fin, is_active } = data;
  const result = await pool.query(
    "UPDATE asignaciones_cargos SET fecha_fin = $1, is_active = $2 WHERE assignment_id = $3 RETURNING *",
    [fecha_fin, is_active, assignment_id],
  );
  return result.rows[0];
};
