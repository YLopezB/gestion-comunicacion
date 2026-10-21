import { loginService } from "../services/loginService.js";
import { createSession } from "../services/sessionService.js";

export const loginController = async (req, res) => {
  const { user, password } = req.body;

  if (!user || !password) {
    return res.status(400).json({
      message: "Usuario y contraseña son obligatorios",
    });
  }

  try {
    const result = await loginService(user, password);
    const session = await createSession(result.user_id);

    res.cookie("session", session, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 10 * 60 * 1000,
    });

    res.status(200).json({
      user: { user_id: result.user_id, is_active: result.is_active },
      message: `Bienvenido de nuevo ${result.username}`,
    });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};
