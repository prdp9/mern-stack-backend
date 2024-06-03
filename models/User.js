import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required:false,
        default: "Anonymous"
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required:true
    },
    
},{
   timestamps:  true
})


export default model('User', userSchema)