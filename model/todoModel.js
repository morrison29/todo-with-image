import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    details : {
        type : String
    },
    image : {
        type : String
    },
    time : {
        type : Date,
        default : Date.now
    },
    completed : {
        type : Boolean,
        default : false
    }
}, {timestamps : true});

const Todomodel = mongoose.model('Todo', todoSchema);

export default Todomodel;