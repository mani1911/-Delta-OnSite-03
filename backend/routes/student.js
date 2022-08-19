import Express from "express";
import bcrypt from 'bcrypt';
const studentRoute = Express.Router();
import Student from '../models/student.js'

userRoute.post('/reg', async (req,res)=>{
    try{
        const { roll, name, password } = req.body;
        const existing = await Student.find({roll});
        let message = '';
        let status = 0;
        if(existing.length > 0){
            message = 'User Already Exists';
        }
        else if(!roll || !password){
            message = 'Input Field cannot be Empty';
        }
        else{
            const hash = await bcrypt.hash(password,12);
            const newUser = new User({roll,password : hash,name});
            await newUser.save();
            message = 'User Registered';
            status = 1;
        }
        res.json({status, message});
    }
    catch(error){
        console.log(error.message);
    }
});

userRoute.post('/login', async (req,res)=>{
    const { roll , password } = req.body;
    try{
        if(!roll || !password){
            res.json({status : 0, message : 'No Input Field can be Empty'});
            return;
        }
        let message = 'Incorrect Username or Password';
        let status = 0;
        if(!roll || !password){
            message = 'No Input Field can be Empty';
        }
        const user = await Student.findOne({roll});
        if(user){
            const isValidUser = await bcrypt.compare(password, user.password);
            if(isValidUser){
                message = 'Logged in Successfully';
                status = 1;
            }
        }
        res.json({status,message,user})
    }
    catch(e){
        console.log(e.message)
    }

});

export default studentRoute;