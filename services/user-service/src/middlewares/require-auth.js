const requireAuth = async (req, res, next) => {
  try {
    const response = await fetch("http://auth-service:3002/me", {
      headers: {
        Cookie: req.headers.cookie,
      },
    });

    const auth = await response.json();

    if (!auth.authenticated) {
      return res.json(auth);
    }
    req.auth = auth;
    next();
  } catch (error) {
    return res.status(503).json({
      message: "No se pudo validar la sesión",
    });
  }
};

export default requireAuth;
