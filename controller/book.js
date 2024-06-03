import Book from "../models/Book.js"

export const getBooks = async (req, res) => {
    const books = await Book.find()
    res.status(200).json(books)
}

export const getBook = async (req, res) => {
    try {
        const { id } = req.params

        if (!id) {
            return res.status(400).json({
                message: "Book id is required"
            })
        }
        const book = await Book.findById(id)
        if (!book) {
            return res.status(404).json({
                message: "Book not found"
            })
        }

        res.status(200).json(book)

    } catch (error) {
        console.log('error', error)
        res.status(500).json({
            message: "Error fetching book"
        })
    }
}


export const createBook = async (req, res) => {
    console.log("my saved file", req.file)
    const { title, price, description, author, publisher, publicationDate } = req.body

    if (!title || !price || !description || !author || !publisher || !publicationDate) {
        return res.status(400).json({
            message: "All fields are required"
        })
    }

    try {
        const book = await Book.create({
            title,
            price,
            description,
            author,
            publisher,
            publicationDate,
            image: req.file.destination + "/" + req.file.filename
        })

        console.log(book)

        res.status(201).json({
            message: "Book added"
        })
    } catch (error) {
        console.log("error", error)
        res.status(500).json({
            message: "Error adding book"
        })
    }


}

export const updateBook = async (req, res) => {
    const { title, price, description, author, publisher, publicationDate } = req.body
    const { id } = req.params

    if (!id) {
        return res.status(400).json({
            message: "Book id is required"
        })
    }

    if (!title || !price || !description || !author || !publisher || !publicationDate) {
        return res.status(400).json({
            message: "All fields are required"
        })
    }

    try {


        const book = await Book.findById(id)

        if (!book) {
            res.status(404).json({
                message: "book not found"
            })
        }

        // image prev image
        const newBook = await Book.findByIdAndUpdate(
            id,
            {
                title,
                price,
                description,
                author,
                publisher,
                publicationDate,
                image: req.file ? req.file.destination + "/" + req.file.filename : book.image
            }, {
                new: true
            })

        res.status(200).json({
            message: "Book updated"
        })
    } catch (error) {
        console.log("error", error)
        res.status(500).json({
            message: "Error updating book"
        })
    }


}

export const deleteBook = async (req, res) => {
    try {
        const { id } = req.params

        if (!id) {
            return res.status(400).json({
                message: "Book id is required"
            })
        }

        const book = await Book.findByIdAndDelete(id)

        if (!book) {
            return res.status(404).json({
                message: "Book not found"
            })
        }

        res.status(200).json({
            message:"Book Deleted"
        })

    } catch (error) {
        console.log('error', error)
        res.status(500).json({
            message: "Error deleting book"
        })
    }
}
