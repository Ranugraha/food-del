import express from 'express'
import { loginUser,registerUser } from '../controllers/userControler.js'

const userRouter = express.Router()


userRouter.post("/regiser",registerUser)
userRouter.post("/login",loginUser)


export default userRouter
