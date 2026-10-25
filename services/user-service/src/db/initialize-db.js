import { pool } from "./pool.js";

export async function initializeAdmin() {
  try {
    await pool.query(
      `CREATE TABLE IF NOT EXISTS users (
    user_id UUID PRIMARY KEY,
    username TEXT NOT NULL,
    primer_nombre TEXT NOT NULL,
    segundo_nombre TEXT,
    primer_apellido TEXT NOT NULL,
    segundo_apellido TEXT,
    numero_documento TEXT NOT NULL UNIQUE,
    fecha_ingreso TIMESTAMPTZ NOT NULL,
    telefono TEXT,
    correo TEXT,
    fecha_nacimiento TIMESTAMPTZ NOT NULL,
    cargo TEXT NOT NULL,
    area TEXT NOT NULL,
    nombre_contacto TEXT,
    telefono_contacto TEXT,
    foto TEXT DEFAULT 'api/repository/foto/foto.jpg',
    firma TEXT DEFAULT NULL
)`,
    );
  } catch (error) {
    console.error("error:", error);
  }
}
