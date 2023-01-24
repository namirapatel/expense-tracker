import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(cors);

mongoose.connect("mongodb+srv://namirapatel912:Namira%40912@cluster0.xxk1ood.mongodb.net/?retryWrites=true&w=majority")
    .then(()=>{ console.log('connected')}).catch((err)=>{console.log(err)});

app.get('/',(req,res)=>{
    res.send("hello hi ");
})

app.listen(4000,()=>{
    console.log('server is running at');
})