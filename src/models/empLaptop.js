import { required } from "joi";
import mongoose, { Schema } from "mongoose";

const empLaptopSchema = new Schema({
    laptopid: {
        type: String,
        required: true,
    },
    
    firstname: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 50
    },
    lastname: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 50
    },
    nationalid: {
        type: int,
        required: true,
        minlength: 16,
        maxlength:16

    },
    mobile: {
        type: String,
        required: false,
        minlength: 10,
        maxlength: 15
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 4,
        maxlength: 40
    },
    
    
    department: {
        type: String,
        required: true,
    },
    position:{
        type: String,
        required: true,
    },
    laptopmanu: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true
    },
    serialnumber: {
        type: String,
        required
    },
    
    createdAt: {
        type: String,
        default: Date.now()
    },
    updatedAt: {
        type: String,
        default: Date.now()
    }
})


const EmpLaptop = mongoose.model('empLaptop', empLaptopSchema)
export default EmpLaptop