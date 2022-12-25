import express from 'express'
import mainRouter from './routes/index.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// CORS

// Routing
app.use('/api/', mainRouter)

export default app
