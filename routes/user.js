import express from 'express';
import { getUser } from '../controller/user.js';
import { authGuard } from '../middleware/auth.js';

const router = express.Router()

router.get("/", authGuard, getUser)

const userRoutes = router


export default userRoutes