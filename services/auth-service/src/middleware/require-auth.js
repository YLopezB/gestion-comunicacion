import {
  deleteSession,
  readSession,
  updateSession,
} from "../services/sessionService.js";

const requireAuth = async (req, res, next) => {
  try {
    const sessionId = req.cookies?.session;

    if (!sessionId) {
      return res.status(401).json({
        message: "No autenticado",
        authenticated: false,
      });
    }

    const session = await readSession(sessionId);

    if (!session || new Date(session.expires_at).getTime() <= Date.now()) {
      if (session) {
        await deleteSession(session.session_id);
      }

      return res.status(401).json({
        message: "Sesión no válida o expirada",
        authenticated: false,
      });
    }

    await updateSession(sessionId);
    res.cookie("session", sessionId, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 10 * 60 * 1000,
    });

    req.userId = session.user_id;

    next();
  } catch (error) {
    return res.status(500).json({
      message: "Error al validar la sesión",
    });
  }
};

export default requireAuth;
