import Sequelize from 'sequelize'

export const sequelize = new Sequelize(
  'beclever-db',
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'postgres'
  }
)