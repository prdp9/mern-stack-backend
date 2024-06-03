import express from 'express';
import { createBook, deleteBook, getBook, getBooks, updateBook } from '../controller/book.js';
import { authGuard } from '../middleware/auth.js';
import multer from 'multer'


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads")
    },
    filename: function (req, file, cb) {
        console.log("",file.originalname)
        cb(null,`${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage: storage })

const router = express.Router()


router.get("/", authGuard, getBooks)

router.post("/", authGuard, upload.single('images'), createBook)

router.get('/:id', authGuard, getBook)

router.put('/:id', authGuard, upload.single('images'), updateBook)

router.delete('/:id', authGuard,  deleteBook)


const bookRoutes = router


export default bookRoutes