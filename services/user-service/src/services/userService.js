import { pool } from "../db/pool.js";

export const createUser = async (data, cookie) => {
  const username =
    data.primer_nombre.trim().charAt(0).toUpperCase() +
    data.primer_nombre.trim().charAt(1).toLowerCase() +
    data.segundo_nombre.trim().charAt(0).toLowerCase() +
    data.primer_apellido.trim().toLowerCase() +
    data.segundo_apellido.trim().charAt(0).toLowerCase();

  const {
    primer_nombre,
    segundo_nombre,
    primer_apellido,
    segundo_apellido,
    numero_documento,
    fecha_ingreso,
    correo,
    telefono,
    fecha_nacimiento,
    cargo,
    area,
    nombre_contacto,
    telefono_contacto,
  } = data;

  const response = await fetch("http://auth-service:3002/user/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookie,
    },
    body: JSON.stringify({
      user: username,
      password: data.numero_documento,
    }),
  });

  const userId = await response.json();

  if (!userId) {
    throw new Error("no fue posible ");
  }

  const user_id = userId.user_id;
  const usernameId = userId.username;

  const newUser = await pool.query(
    `INSERT INTO users (user_id, username, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, numero_documento, fecha_ingreso, telefono, correo, fecha_nacimiento, cargo, area, nombre_contacto, telefono_contacto)
   VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
   RETURNING *`,
    [
      user_id, // $1
      usernameId, // $2
      primer_nombre, // $3
      segundo_nombre ?? null, // $4
      primer_apellido, // $5
      segundo_apellido ?? null, // $6
      numero_documento, // $7
      fecha_ingreso, // $8
      telefono ?? null, // $9
      correo ?? null, // $10
      fecha_nacimiento, // $11
      cargo, // $12
      area, // $13
      nombre_contacto ?? null, // $14
      telefono_contacto ?? null, // $15
    ],
  );

  return newUser.rows[0];
};

export const allUsers = async () => {
  const result = await pool.query(`SELECT * FROM users`);
  return result.rows;
};

export const userService = async (user_id) => {
  const user = await pool.query(`SELECT * FROM users WHERE user_id = $1`, [
    user_id,
  ]);
  return user.rows[0];
};

export const updateUser = async (data) => {
  const {
    user_id,
    primer_nombre,
    segundo_nombre,
    primer_apellido,
    segundo_apellido,
    numero_documento,
    fecha_ingreso,
    telefono,
    correo,
    fecha_nacimiento,
    cargo,
    area,
    nombre_contacto,
    telefono_contacto,
  } = data;

  const result = await pool.query(
    `UPDATE users
   SET primer_nombre = $2,
       segundo_nombre = $3,
       primer_apellido = $4,
       segundo_apellido = $5,
       numero_documento = $6,
       fecha_ingreso = $7,
       telefono = $8,
       correo = $9,
       fecha_nacimiento = $10,
       cargo = $11,
       area = $12,
       nombre_contacto = $13,
       telefono_contacto = $14
   WHERE user_id = $1
   RETURNING user_id, username, primer_nombre, primer_apellido`,
    [
      user_id,
      primer_nombre,
      segundo_nombre ?? null,
      primer_apellido,
      segundo_apellido ?? null,
      numero_documento,
      fecha_ingreso,
      telefono ?? null,
      correo ?? null,
      fecha_nacimiento,
      cargo,
      area,
      nombre_contacto ?? null,
      telefono_contacto ?? null,
    ],
  );
  return result.rows[0];
};

export const restarUser = async (user_id, cookie) => {
  const user = await pool.query("SELECT * FROM users WHERE user_id = $1", [
    user_id,
  ]);
  if (user.rowCount === 0) {
    throw new Error("Usuario no existe");
  }
  const result = user.rows[0];
  const response = await fetch("http://auth-service:3002/user/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookie,
    },
    body: JSON.stringify({
      user_id: result.user_id,
      user: result.username,
      password: result.numero_documento,
    }),
  });

  const userId = await response.json();
  return userId;
};

export const isActiveUser = async (body, cookie) => {
  const user = await pool.query(`SELECT * FROM users WHERE user_id = $1`, [
    body.userId,
  ]);
  await pool.query("UPDATE users SET is_active = $1 WHERE user_id = $2", [
    body.isActive,
    body.userId,
  ]);
  const response = await fetch("http://auth-service:3002/user/active", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookie,
    },
    body: JSON.stringify({
      userId: body.userId,
      isActive: body.isActive,
    }),
  });
  if (user.rowCount === 0) {
    throw new Error("Usuario no existe");
  }
  const userReponse = await response.json();
  return userReponse;
};
