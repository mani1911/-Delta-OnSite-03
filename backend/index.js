import Express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();



const app = Express();
const Port = process.env.PORT || 3005;

const mongo_pass = process.env.MONGO_PASS;
const URL = `mongodb+srv://mani1911:${mongo_pass}@cluster0.kvvcy.mongodb.net/?retryWrites=true&w=majority`;

app.use(Express.json());
app.use(cors());


mongoose.connect(URL, {useNewUrlParser : true, useUnifiedTopology : true})
.then(()=>{
    app.listen(Port, ()=>{
        console.log(`Connection Established : ${Port}`);
    })
})
.catch(e=>{
    console.log(e.message);
});


app.get('/health', (req,res)=>{
    res.send('Healthy');
})