import {
  createCargoService,
  allCargoService,
  updateCargoService,
} from "../services/cargoService.js";

export const createCargoController = async (req, res) => {
  try {
    const cargoData = req.body;
    if (!cargoData.name || !cargoData.description) {
      res.status(400).json({ message: "Faltan datos obligatorios" });
    }
    const newCargo = await createCargoService(cargoData);
    return res
      .status(201)
      .json({ message: "Cargo creado correctamente" + newCargo });
  } catch (error) {
    console.error("Ha ocurrido un error en cargoController: ", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const updateCargoController = async (req, res) => {
  try {
    const cargoData = req.body;
    if (!cargoData.cargo_id) {
      res.status(400).json({ message: "Falta el ID cargo para actualizar" });
    }
    if (!cargoData.name || !cargoData.description) {
      res.status(400).json({ message: "Faltan datos obligatorios" });
    }
    const cargo = await updateCargoService(cargoData);
    return res
      .status(201)
      .json({ message: "Cargo actualizado correctamente" + cargo });
  } catch (error) {
    console.error("Ha ocurrido un error en updateCargoController: ", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const allCargoController = async (req, res) => {
  try {
    const cargos = await allCargoService();
    res.status(200).json(cargos);
  } catch (error) {
    console.error("Ha ocurrido un error en allCargoController: ", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};
