import express from 'express';
const userRouter = express.Router();
import { createUser, loginUser } from '../controller/userController.js';

userRouter.post('/create-user', createUser);
userRouter.post('/login-user', loginUser);

export default userRouter;