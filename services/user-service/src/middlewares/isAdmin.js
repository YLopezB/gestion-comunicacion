const isAdmin = async (req, res, next) => {
  try {
    const response = await fetch("http://auth-service:3002/admin", {
      headers: {
        Cookie: req.headers.cookie,
      },
    });

    const isAdmin = await response.json();

    if (!isAdmin.isAdmin) {
      return res.json(auth);
    }

    req.isAdmin = isAdmin;

    next();
  } catch (error) {
    return res.status(503).json({
      message: "No se pudo validar la petición",
    });
  }
};

export default isAdmin;
