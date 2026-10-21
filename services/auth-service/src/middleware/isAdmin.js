import { readUser } from "../services/userService.js"

const isAdmin = async (req, res, next) => {
    try {
        const { userId } = req
        const user = await readUser(userId)
        console.log(user.username)
        if (user.username == "admin") {
            next()
        }
        res.status(401).json({
            message: "No tiene permiso para acceder al recurso",    
        })
    } catch (error) {
        res.status(500).json({
            message: `Error al validar: ${error}`,
        })
    }
}

export default isAdmin