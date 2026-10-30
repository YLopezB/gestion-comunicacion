import { pool } from "./pool.js";

export async function initialize() {
  const idCompany = "7f3a9c21-8d64-4b2e-a751-6c9e0f82d413";
  const nameCompany = process.env.NAME_COMPANY;
  const sloganCompany = process.env.SLOGAN_COMPANY;

  try {
    await pool.query(
      `CREATE TABLE IF NOT EXISTS areas (
          area_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          name VARCHAR(50) NOT NULL,
          description TEXT NOT NULL,
          responsible_user_id UUID,
          is_active BOOLEAN NOT NULL DEFAULT TRUE,
          depends_on UUID REFERENCES areas(area_id),
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )`,
    );
  } catch (error) {
    console.error("Error:" + error);
  }
  try {
    await pool.query(
      `CREATE TABLE IF NOT EXISTS cargos (
          cargo_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          area_id UUID REFERENCES areas(area_id),
          name VARCHAR(50) NOT NULL,
          description TEXT NOT NULL,
          is_active BOOLEAN NOT NULL DEFAULT TRUE,
          depends_on UUID REFERENCES cargos(CARGO_ID),
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )`,
    );
  } catch (error) {
    console.error("Error: " + error);
  }
  try {
    await pool.query(
      `CREATE TABLE IF NOT EXISTS asignaciones_cargos (
          assignment_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          user_id UUID NOT NULL,
          cargo_id UUID NOT NULL REFERENCES cargos(cargo_id),
          fecha_inicio DATE NOT NULL DEFAULT CURRENT_DATE,
          fecha_fin DATE,
          is_active BOOLEAN NOT NULL DEFAULT TRUE,
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )`,
    );
  } catch (error) {
    console.error("Error: " + error);
  }
  try {
    await pool.query(
      `CREATE TABLE IF NOT EXISTS empresa (
          company_id UUID,
          name VARCHAR(50) NOT NULL,
          slogan TEXT,
          logo TEXT NOT NULL DEFAULT '/api/repository/default/logo.png',
          photo TEXT DEFAULT '/api/repository/default/index_image.png',
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )`,
    );
  } catch (error) {
    console.error("Error: " + error);
  }
  try {
    const existingCompany = await pool.query(
      "SELECT company_id FROM empresa WHERE company_id = $1",
      [idCompany],
    );

    if (existingCompany.rowCount > 0) {
      console.log("La empresa ya " + existingCompany.name + " existe.");
      return;
    }
    await pool.query(
      `INSERT INTO empresa (company_id, name, slogan)
      VALUES($1, $2, $3)`,
      [idCompany, nameCompany, sloganCompany],
    );
  } catch (error) {
    console.error("Error: " + error);
  }
}
