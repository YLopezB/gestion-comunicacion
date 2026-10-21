import { deleteSession } from "../services/sessionService.js";

export const logOutController = async (req, res) => {
  try {
    const sessionId = req.cookies?.session;

    if (sessionId) {
      await deleteSession(sessionId);
    }

    res.clearCookie("session", {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/",
    });

    return res.json({
      message: "Sesión cerrada correctamente",
    });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
