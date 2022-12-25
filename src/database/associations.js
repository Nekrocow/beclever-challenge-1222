import { DataTypes } from 'sequelize'
import { Employee } from './models/Employee.js'
import { Register } from './models/Register.js'

export const associations = () => {
  Employee.hasMany(Register, {
    foreignKey: {
      type: DataTypes.UUID,
      allowNull: false
    }
  })

  Register.belongsTo(Employee, {
    foreignKey: {
      type: DataTypes.UUID,
      allowNull: false
    }
  })
}
