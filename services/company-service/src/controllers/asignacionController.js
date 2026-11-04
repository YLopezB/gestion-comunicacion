import { createAsignSevice } from "../services/asignacionService.js";

export const createAsignController = async (req, res) => {
  try {
    const asignacion = req.body;
    if (
      !asignacion.cargo_id ||
      !asignacion.user_id ||
      !asignacion.fecha_inicio
    ) {
      res.status(400).json({ message: "Faltan datos obligatorios" });
    }
    const newAsignacion = await createAsignSevice(asignacion);
    return res.status(201).json({
      message: "Asignación creada con exito" + newAsignacion,
    });
  } catch (error) {
    console.error("Ha ocurrido un error en createAsignController: ", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};
