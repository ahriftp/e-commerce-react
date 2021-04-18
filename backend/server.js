// Packages
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'

// Modules
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'

dotenv.config()

connectDB()

const app = express()

const ENV = process.env.NODE_ENV
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('API is running')
})

app.use('/api/products', productRoutes)

// Middleware error handler
app.use(notFound)
app.use(errorHandler)

app.listen(PORT, console.log(`Server running in ${ENV} mode on port ${PORT}`.green.bold))