import {
  allUsers,
  createUser,
  updateUser,
  activeUsers,
} from "../services/userService.js";

export const createUserController = async (req, res) => {
  try {
    const { user, password } = req.body;

    if (!user || !password) {
      return res.status(400).json({
        message: "Usuario y contraseña son obligatorios",
      });
    }

    const newUser = await createUser(user, password);

    if (!newUser) {
      return res.status(500).json({
        message: "Usuario no pudo ser creado",
      });
    }

    return res.status(201).json({
      message: `Usuario ${newUser.username} creado correctamente`,
      user_id: newUser.user_id,
      username: newUser.username,
    });
  } catch (error) {
    console.error("Error al crear usuario:", error);

    return res.status(500).json({
      message: "Error al crear usuario",
    });
  }
};

export const updateUserController = async (req, res) => {
  try {
    const { password } = req.body;
    const { userId } = req;
    if (!password || !userId) {
      res.status(400).json({
        message: "Debe ingresar una contraseña válida",
      });
    }
    const user = await updateUser(userId, password);

    res.status(201).json({
      message: user.username + ", contraseña cambiada correctamente",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error: " + error,
    });
  }
};

export const allUsersController = async (req, res) => {
  try {
    const users = await allUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: "Error: " + error,
    });
  }
};

export const activeUserController = async (req, res) => {
  try {
    const { userId, isActive } = req.body;
    if (!userId || !isActive) {
      res.status(400).json({
        message: "No se envío información",
      });
    }
    const user = await activeUsers(userId, isActive);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: "Error: " + error,
    });
  }
};
