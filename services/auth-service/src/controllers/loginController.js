import { loginService } from "../services/loginService.js";

export const loginController = async (req, res) => {
  const { user, password } = req.body;

  if (!user || !password) {
    return res.status(400).json({
      message: "Usuario y contraseña son obligatorios",
    });
  }

  try {
    const result = await loginService(user, password);
    res.json(result);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};
