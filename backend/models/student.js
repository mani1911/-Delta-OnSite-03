import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    roll : {
        type : 'Number',
        required : true
    },
    name : {
        type : 'string',
        required : true
    },
    password : {
        type : 'String',
        required : true
    },
});

const Student = new mongoose.model('Student', studentSchema);

export default Student;