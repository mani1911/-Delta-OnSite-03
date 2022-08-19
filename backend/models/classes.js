import mongoose from "mongoose";

const classSchema = new mongoose.Schema({
    name : {
        type : 'String',
        required : true
    },
    joined : {
        type : 'Number',
    },

    students : [
        {
            studentName : 'String',
            rollNo : 'Number'
        }
    ],
    
});

const Class = new mongoose.model('Class', classSchema);

export default Class;