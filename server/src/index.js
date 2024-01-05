import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { ServicesRoutes } from './routes/servicesRoutes.js'
import cloudinary from 'cloudinary'
import { HeroSliderRouter } from './routes/heroSliderRoutes.js'
dotenv.config()

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

const app = express()
app.use(cors())
app.use(express.json())

console.log('Cloudinary Config:', cloudinary.config())
console.log('Cloudinary API Key:', process.env.CLOUDINARY_API_KEY)

app.use(
  '/src/uploads',
  express.static(
    `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/`
  )
)

const PORT = process.env.PORT
const connectionURL = process.env.CONNECTION_URL.replace(
  '<password>',
  process.env.PASSWORD
)

mongoose
  .connect(connectionURL)
  .then(() => console.log('Connected to the database'))
  .catch(err => console.error('DB connection error:' + err))

app.use('/api', ServicesRoutes)
app.use('/api', HeroSliderRouter)

app.listen(PORT, () => {
  console.log(`Server Connection ${PORT}`)
})