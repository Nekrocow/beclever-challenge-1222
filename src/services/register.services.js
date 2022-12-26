import { Op } from 'sequelize'
import { Register } from '../database/models/Register.js'
import { Employee } from '../database/models/Employee.js'

export const createRegister = async (newRegister) => {
  return await Register.create(newRegister)
}

// Generar un servicio el cual liste la cantidad de ingresos y egresos dada una fecha
// desde – hasta, que se pueda filtrar por nombre o apellido y sucursal.
export const search = async (dateFrom, dateTo, descriptionFilter, businessLocation) => {
  const entries = await Register.findAll({
    where: {
      registerType: 'entry',
      businessLocation: businessLocation,
      date: {
        [Op.and]: {
          [Op.gte]: dateFrom,
          [Op.lte]: dateTo
        }
      }
    },
    include: [{
      model: Employee,
      attributes: ['gender', 'name']
    }]
  })
  console.log(entries)

  // const exits = await Register.findAll({
  //   where: {
  //     registerType: 'exits',
  //     businessLocation: businessLocation,
  //     date: {
  //       [Op.and]: {
  //         [Op.gte]: dateFrom,
  //         [Op.lte]: dateTo
  //       }
  //     }
  //   },
  //   include: [{
  //     model: Employee,
  //     attributes: ['gender', 'name']
  //   }]
  // })

  return {
    entries: entries
    // exits: exits
  }
}

// Generar un servicio el cual devuelva el promedio de hombres y mujeres que
// ingresan y egresan por mes, por cada sucursal.
export const average = async (registers, dateFrom, dateTo) => {
  const mappedRegisters = registers?.map(e => {
    return {
      employeeId: e.employeeId,
      gender: e.employee.gender,
      businessLocation: e.businessLocation
    }
  })

  let locations = []
  const maleRegisters = []
  const femaleRegisters = []

  mappedRegisters.forEach(e => {
    e.gender === 'male'
      ? maleRegisters.push(e)
      : femaleRegisters.push(e)
    if (!locations.includes(e.businessLocation)) locations.push(e.businessLocation)
  })

  // var difference = Math.abs(dateFrom - dateTo) / 30

  return registers
}
