import {
  allUsers,
  createUser,
  restarUser,
  updateUser,
  userService,
  isActiveUser,
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
    return res.json({
      user: userName,
      message: "Usuario " + userName.username + " creado con éxito",
    });
  } catch (error) {
    console.log("Ha ocurrido un error en createUser: " + error);
    return res.json({
      message: "Error interno del servidor",
    });
  }
};

export const updateserController = async (req, res) => {
  try {
    const user = await updateUser(req.body);
    return res.status(201).json({
      user: user,
      message: "Usuario " + user.username + " actualizado con éxito",
    });
  } catch (error) {
    console.log("Ha ocurrido un error en updateserController: " + error);
    res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};

export const alluserController = async (req, res) => {
  try {
    const users = await allUsers();
    return res.status(200).json(users);
  } catch (error) {
    console.log("Ha ocurrido un error en alluserController: " + error);
    return res.json({
      message: "Error interno del servidor",
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
    console.log("Ha ocurrido un error en userController: " + error);
    return res.json({
      message: "Error interno del servidor",
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
    return res.status(201).json(user);
  } catch (error) {
    console.log("Ha ocurrido un error en restartUserCotroller: " + error);
    return res.json({
      message: "Error interno del servidor",
    });
  }
};

export const isActiveUserController = async (req, res) => {
  try {
    const user = await isActiveUser(req.body, req.headers.cookie);
    return res
      .status(201)
      .json({ user: user, message: "Usuario Actualizado con éxito" });
  } catch (error) {
    console.log("Ha ocurrido un error en isActiveUserController: " + error);
    return res.json({
      message: "Error interno del servidor",
    });
  }
};
