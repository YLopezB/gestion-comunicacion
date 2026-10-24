import { readUser } from "../services/userService.js";

const isAdmin = async (req, res, next) => {
  try {
    const { userId } = req;
    const user = await readUser(userId);
    if (!user.is_admin) {
      res.status(401).json({
        message: "No tiene permiso para acceder al recurso",
      });
    }
    next();
  } catch (error) {
    res.status(500).json({
      message: `Error al validar: ${error}`,
    });
  }
};

export default isAdmin;
