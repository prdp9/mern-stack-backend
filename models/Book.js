import { Schema, model } from "mongoose";


const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    publicationDate: {
        type: Date,
        required: true
    },
},
 {
    timestamps:true
})


export default model("Book", bookSchema)