import  express  from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
import listingRouter from './routes/listing.route.js'
import cookieParser from "cookie-parser";


const __filename = new URL(import.meta.url).pathname;
// const __dirname = path.dirname(__filename);
const __dirname = path.resolve();
let envPath=path.join(__dirname,'../','.env');
dotenv.config({ path: envPath });
console.log("checming dirname ", __dirname);
// db connection
 mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("mongo db connected")
 }).catch((err)=>{
    console.log(err)
 })


const app= express();

app.use(express.json());
app.use(cookieParser());
app.listen(3000, ()=>{
    console.log("server is running on port 3000")
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter)

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
})

app.use((err, req, res, next)=>{
    const statusCode=err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})