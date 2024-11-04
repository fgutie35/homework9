import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    userName : {
        type: String, 
        required: true, 
    },
    firstName : {
        type: String,
        required: true, 
    },
    lastName : {
        type: String,
        required: true,
    },
    title : {
        type: String,
        requried: true,
    },
    quote: {
        type: String,
        required: true,
    }
})


export default mongoose.model("employee", employeeSchema)