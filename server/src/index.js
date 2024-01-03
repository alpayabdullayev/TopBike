import express from 'express'
import cors from 'cors'
import dotenv from "dotenv"
import mongoose from 'mongoose'
import { ServicesRoutes } from './routes/servicesRoutes.js'


const app = express()
dotenv.config()
app.use(cors())
app.use(express.json())
app.use(express.static('src/uploads'));


const PORT  = process.env.PORT
const URL = process.env.CONNECTION_URL.replace(
  "<password>",
  process.env.PASSWORD
);

mongoose
  .connect(URL)
  .then(() => console.log("Connected to the database"))
  .catch((err) => console.error("DB connection error:" + err));


app.use("/api",ServicesRoutes)

app.listen(PORT, ()=>{
  console.log(`Server Connection ${PORT}`);
})