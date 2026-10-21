import { pool } from "../db/pool.js";
import bcrypt from "bcrypt";

export const readUser = async (userId) => {
    console.log(userId)
    if (!userId){
        throw new Error("No se envió el Id")
    }

    const user = await pool.query(
        `SELECT * FROM credentials WHERE user_id = $1`,
        [userId]
    )

    return user.rows[0]
} 

export const createUser = async (user, password) => {
    const passwordHash = await bcrypt.hash(password, 12)
    const newUser = await pool.query(
    `INSERT INTO credentials (username, password_hash)
     VALUES ($1, $2)`,
    [user, passwordHash]
    )

    return newUser.rows[0]
}

export const deleteUser = async (userId) => {

}