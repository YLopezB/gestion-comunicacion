const requireAuth = (sessions) => {
  return (req, res, next) => {
    const sessionId = req.cookies?.sessionId;
    const session = sessions.get(sessionId);

    if (!session || session.expiresAt <= Date.now()) {
      if (session) {
        sessions.delete(sessionId);
      }

      return res.status(401).json({
        message: "Sesión no válida o expirada",
      });
    }

    req.user = {
      username: session.user,
    };

    next();
  };
};

export default requireAuth;
