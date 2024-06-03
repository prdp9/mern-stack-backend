
import express from 'express'
import { getNewAccessToken, login, register,logout } from '../controller/auth.js'
import { authGuard } from '../middleware/auth.js'


const router = express.Router()

router.post('/register', register )
router.post('/login', login )

router.get('/test', authGuard  , (req,res) => {
    console.log('controller')
    res.status(200).json({
        message: 'Private resource'
    })
})

router.get('/getNewAccessToken', getNewAccessToken)

router.post('/logout', authGuard ,logout )

const authRoutes = router

export default authRoutes