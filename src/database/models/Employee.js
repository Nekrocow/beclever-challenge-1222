import { DataTypes } from 'sequelize'
import { db } from '../database.js'

export const Employee = db.define('employees', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    unique: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  gender: {    
    type: DataTypes.ENUM(['male', 'female']),
    allowNull: false
  }  
})
