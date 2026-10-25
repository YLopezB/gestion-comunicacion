import {
  allUsers,
  createUser,
  updateUser,
  userService,
} from "../services/userService.js";

export const createUserController = async (req, res) => {
  const {
    primer_nombre,
    primer_apellido,
    numero_documento,
    fecha_ingreso,
    fecha_nacimiento,
    cargo,
    area,
  } = req.body;
  if (
    !primer_nombre ||
    !primer_apellido ||
    !numero_documento ||
    !fecha_ingreso ||
    !fecha_nacimiento ||
    !cargo ||
    !area
  ) {
    return res.status(400).json({
      message: "Debe ingresar todos los datos.",
    });
  }
  try {
    const userName = await createUser(req.body, req.headers.cookie);
    return res.json(userName);
  } catch (error) {
    res.status(500).json({
      message: "Error: " + error,
    });
  }
};

export const updateserController = async (req, res) => {
  req.body.user_id = req.auth.user_id;
  const user = await updateUser(req.body);
  return res.status(200).json(user);
};

export const alluserController = async (req, res) => {
  const users = await allUsers();
  return res.status(200).json(users);
};

export const userController = async (req, res) => {
  const user_id = req.auth.user_id;
  if (!user_id) {
    return res.status(401).json({ message: "Usuario no está autenticado" });
  }
  const user = await userService(user_id);
  return res.status(200).json(user);
};
