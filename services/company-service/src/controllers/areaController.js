import {
  createAreaService,
  allAreasService,
  updateAreaService,
} from "../services/areasService.js";

export const createAreaController = async (req, res) => {
  try {
    const areaData = req.body;
    if (!areaData.name || !areaData.description) {
      return res.status(400).json({ message: "Faltan datos obligatorios" });
    }
    const newArea = await createAreaService(areaData);
    res
      .status(201)
      .json({ message: "Área creada exitosamente", area: newArea });
  } catch (error) {
    console.error("Ha ocurrido un error en createAreaController:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const allAreasController = async (req, res) => {
  try {
    const areas = await allAreasService();
    res.status(200).json(areas);
  } catch (error) {
    console.error("Ha ocurrido un error en allAreasController:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const updateAreaController = async (req, res) => {
  try {
    const areaData = req.body;
    if (!areaData.area_id) {
      return res
        .status(400)
        .json({ message: "Falta el ID del área a actualizar" });
    }
    if (!areaData.name || !areaData.description) {
      return res.status(400).json({ message: "Faltan datos obligatorios" });
    }
    const newArea = await updateAreaService(areaData);
    res
      .status(201)
      .json({ message: "Área actualizada exitosamente" + newArea });
  } catch (error) {
    console.error("Ha ocurrido un error en updateAreaController:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};
