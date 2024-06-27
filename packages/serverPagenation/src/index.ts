import cors from 'cors';
import express from 'express';
import 'dotenv/config';
import { connectToMongo } from './models/connectToMongo';
import UserRouter from './routers/UserRouter'
import { insertData } from './intData';

const app = express()

app.use(cors())
app.use(express.json())
app.use('/users',UserRouter)

connectToMongo()
// insertData();

app.listen(3355,()=>console.log("### Server Is Running on Port 3355 #####"));