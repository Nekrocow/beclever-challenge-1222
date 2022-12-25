import { Employee } from '../database/models/Employee.js'

export const createEmployee = async (newEmployee) => {
  return await Employee.create(newEmployee)
}
