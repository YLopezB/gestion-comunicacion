import { pool } from "../db/pool.js";
import bcrypt from "bcrypt";

export const loginService = async (user, password) => {
  const result = await pool.query(
    "SELECT * FROM credentials WHERE username = $1",
    [user],
  );

  const credential = result.rows[0];
  if (!credential) {
    throw new Error("Usuario o contraseña incorrectos");
  }

  const passwordIsValid = await bcrypt.compare(
    password,
    credential.password_hash,
  );

  if (!passwordIsValid) {
    throw new Error("Usuario o contraseña incorrecto");
  }

  if (!credential.is_active) {
    throw new Error("Usuario inactivo");
  }

  return credential;
};
