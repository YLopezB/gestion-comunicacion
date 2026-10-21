import { createUser } from "../services/userService.js"

export const createUserController = async (req, res) => {
    try {
        const {user, password} = req.body
        const newUser = await createUser(user, password)
        if(!newUser) {
            res.json({
                message: "Usuario no pudo ser creado"
            })
        }
        res.status(200).json({
            message: `Usuario ${newUser.username} creado correctamente`
        })
        
    } catch (error) {
        res.status(500).json({
            message: "Error: "+ error
        })
    }
}

export const deleteUser = async (req, res) => {
    
}