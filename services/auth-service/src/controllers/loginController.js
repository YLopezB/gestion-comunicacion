import { loginService } from "../services/loginService.js";
import { Session } from "../services/sessionService.js";

export const loginController = async (req, res) => {
  const { user, password } = req.body;

  if (!user || !password) {
    return res.status(400).json({
      message: "Usuario y contraseña son obligatorios",
    });
  }

  try {
    const result = await loginService(user, password);
    const session = await Session(result.user_id);
    res.json({
      user_id: result.user_id,
      username: result.username,
      is_active: result.is_active,
      session: session,
    });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};
