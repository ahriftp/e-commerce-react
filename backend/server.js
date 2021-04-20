// Packages
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'

// Routes
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'

// Modules
import connectDB from './config/db.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'

dotenv.config()

connectDB()

const app = express()

const ENV = process.env.NODE_ENV
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('API is running')
})

// Middleware body parser
app.use(express.json())

// Routes
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

// Middleware error handler
app.use(notFound)
app.use(errorHandler)


app.listen(PORT, console.log(`Server running in ${ENV} mode on port ${PORT}`.green.bold))