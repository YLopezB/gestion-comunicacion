import { profileService } from "../services/profileService.js";

export const profileController = async (req, res) => {
  try {
    const result = await profileService();
    if (!result) {
      return res.status(200).json({
        message: "La empresa todavía no tiene un perfil configurado",
      });
    }
    return res.status(200).json(result);
  } catch (error) {
    console.error("Ha ocurrido un error en profileController: " + error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};
