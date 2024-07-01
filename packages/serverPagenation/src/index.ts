import cors from 'cors';
import express from 'express';
import 'dotenv/config';
import { connectToMongo } from './models/connectToMongo';
import UserRouter from './routers/UserRouter'
import CarRouter from './routers/carRouter'
import TableRouter from './routers/TableRouter'
import { insertData } from './insertData';

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/users',UserRouter)
app.use('/api/cars',CarRouter)
app.use('/api/tables',TableRouter)

connectToMongo()
// insertData();

app.listen(3355,()=>console.log("##### Server Is Running on Port 3355 #####"));