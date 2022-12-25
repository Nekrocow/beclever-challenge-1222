import app from './app.js'
import { db } from './database/database.js'
import dotenv from 'dotenv'
dotenv.config()
import { associations } from './database/associations.js'

const PORT = process.env.PORT || 3001

const startServer = async () => {
  try {
    associations()
    await db.sync({ force: false })
    console.log('🚀 Connection has been established successfully!')
    app.listen(PORT, () => {
      console.log('👂🏼 Server is listening on port', PORT)
    })
  } catch (error) {
    console.error('😔 Unable to connect to the database:', error)
  }
}

startServer()
