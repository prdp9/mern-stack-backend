import express from 'express';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv'
import authRoutes from './routes/auth.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import userRoutes from './routes/user.js';
import bookRoutes from './routes/book.js';
import path from 'path'
import { fileURLToPath } from 'url'

dotenv.config()

const app = express()

app.use(cors({
	origin: "http://localhost:5173",
	credentials: true
}))

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use('/uploads',express.static(path.join(__dirname, 'uploads')))

app.use(express.json())
app.use(cookieParser())

const PORT = 8080

app.get('/', (req,res) => {
res.send('server is running :)')
})

app.use('/auth', authRoutes)
app.use('/user', userRoutes)
app.use('/books', bookRoutes)

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
	connectDB()
})