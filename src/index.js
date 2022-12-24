import app from './app.js'

app.listen(3001)
console.log('Server listening on port', 3001)










/*
// require("dotenv").config()
// const { connectDB } = require("./config/database")

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

/* el reemplazo debería ser algo así ---
const startServer = async () => {

connectDB()

app.listen
}

startServer()
*/