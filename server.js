import express from 'express'
import mongoose from 'mongoose'
import authRoutes from './Auth/auth.routes.js'
import carRoutes from './Car/car.routes.js'
import dotenv from 'dotenv'
import 'colors'

dotenv.config()
const db = process.env.MONGO_DB
const app = express()
const port = process.env.PORT || 7000

app.use(express.json())



app.use('/api/auth', authRoutes)
app.use('/api/', carRoutes)

const startApi = async() => {
    await mongoose.connect(db)
    app.listen(port,() => (
        console.log(`Server running on port ${port}`)
    ))
}

startApi()
