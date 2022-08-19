import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
    username : {
        type : 'string',
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

const Teacher = new mongoose.model('Teacher', teacherSchema);

export default Teacher;