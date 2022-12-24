const { app } = require("./app")
require("dotenv").config()
// const { connectDB } = require("./config/database")

const PORT = process.env.PORT || 3001

// --- a volar
app.get('/', (req, res) => {
  res.send('<h1>Hello Worldcito</h1>')
})

app.listen(PORT)
console.log(`Server running on port ${PORT}`)

  /* el reemplazo debería ser algo así ---
const startServer = async () => {

  connectDB()

  app.listen(PORT, () => {

    console.log("server running on PORT:" + PORT)
  })
}

startServer()
  */