const express = require('express')
const app = express()
const mainRouter = require('./routes/index') // CHECAR si se puede requerir así
require("dotenv").config()

app.use(express.json())

// CORS

//Routing
app.use('/api/', mainRouter)

module.exports = { app }
