import {
  allUsers,
  createUser,
  restarUser,
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
    return res.json({
      message: "Error: " + error,
    });
  }
};

export const updateserController = async (req, res) => {
  try {
    req.body.user_id = req.auth.user_id;
    const user = await updateUser(req.body);
    return res.status(201).json(user);
  } catch (error) {
    res.status(500).json({
      message: "Error: " + error,
    });
  }
};

export const alluserController = async (req, res) => {
  try {
    const users = await allUsers();
    return res.status(200).json(users);
  } catch (error) {
    return res.json({
      message: "Error: " + error,
    });
  }
};

export const userController = async (req, res) => {
  try {
    const user_id = req.auth.user_id;
    if (!user_id) {
      return res.status(401).json({ message: "Usuario no está autenticado" });
    }
    const user = await userService(user_id);
    return res.status(200).json(user);
  } catch (error) {
    return res.json({
      message: "Error: " + error,
    });
  }
};

export const restartUserCotroller = async (req, res) => {
  try {
    const user_id = req.body.user_id;
    if (!user_id) {
      return res
        .status(401)
        .json({ message: "No se envió la información necesaria" });
    }
    const user = await restarUser(user_id, req.headers.cookie);
    return res.status(201).json(user)
  } catch (error) {
    return res.json({
      message: "Error: " + error,
    });
  }
};
