// Packages
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'

// Modules
import connectDB from './config/db.js'
import products from './data/products.js'


dotenv.config()

connectDB()

const app = express()

const ENV = process.env.NODE_ENV
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('API is running')
})

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id)
    res.json(product)
})

app.listen(PORT, console.log(`Server running in ${ENV} mode on port ${PORT}`.green.bold))