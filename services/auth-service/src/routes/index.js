import { Router } from "express";
import { randomUUID } from "node:crypto";
import requireAuth from "../middleware/require-auth.js";

const router = Router();

// Sesiones temporales almacenadas en memoria.
// Se pierden cuando se reinicia el servicio.
const sessions = new Map();

// POST /auth/login
// Inicio de sesión con credenciales temporales.
router.post("/login", (req, res) => {
  const { user, password } = req.body;

  // Credenciales únicamente para desarrollo.
  if (user !== "admin" || password !== "123456") {
    return res.status(401).json({
      message: "Usuario o contraseña incorrectos",
    });
  }

  // Genera un identificador de sesión aleatorio.
  const sessionId = randomUUID();

  // Registra la sesión en el servidor durante cinco minutos.
  sessions.set(sessionId, {
    user: "admin",
    expiresAt: Date.now() + 5 * 60 * 1000,
  });

  // Envía el identificador al navegador mediante una cookie.
  res.cookie("sessionId", sessionId, {
    httpOnly: true,
    secure: false, // Solo para desarrollo local con HTTP.
    sameSite: "lax",
    maxAge: 5 * 60 * 1000,
    path: "/",
  });

  return res.json({
    message: "Inicio de sesión correcto",
  });
});

// GET /auth/me
// Devuelve el usuario autenticado si su sesión es válida.
router.get("/me", requireAuth(sessions), (req, res) => {
  res.json({
    authenticated: true,
    user: req.user,
  });
});

// POST /auth/logout
// Invalida la sesión y elimina la cookie del navegador.
router.post("/logout", (req, res) => {
  const sessionId = req.cookies?.sessionId;

  if (sessionId) {
    sessions.delete(sessionId);
  }

  res.clearCookie("sessionId", {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    path: "/",
  });

  return res.json({
    message: "Sesión cerrada correctamente",
  });
});

export default router;
