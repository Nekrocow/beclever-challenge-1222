import { DataTypes } from 'sequelize'
import { db } from '../database.js'

export const Register = db.define('registers', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    unique: true,
    allowNull: false,
    primaryKey: true
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: new Date()
  },
  registerType: {
    type: DataTypes.ENUM(['entry', 'exit']),
    allowNull: false
  },
  businessLocation: {
    type: DataTypes.STRING,
    allowNull: false
  }
})
