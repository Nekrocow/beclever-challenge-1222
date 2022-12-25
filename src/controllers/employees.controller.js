import { Employee } from '../database/models/Employee.js'
import { createEmployee } from '../services/employees.services.js'
import { catchAsync } from '../helpers/catchAsync.js'
import { endpointResponse } from '../helpers/success.js'

export const postEmployee = catchAsync(async (req, res) => {
  const { firstName, lastName } = req.body
  try {
    const newEmployee = await createEmployee({
      firstName,
      lastName
    })
    endpointResponse({
      res,
      code: 201,
      body: newEmployee,
    })
  } catch (error) {
    console.log(`[Error adding employee] - [Employee - POST]: ${error.message}`
    )
  }
})

export const getAllEmployees = catchAsync(async (req, res) => {
  try {
    const allEmployees = await Employee.findAll()
    endpointResponse({
      res,
      code: 200,
      body: allEmployees,
    })
  } catch (error) {
    console.log(`[Error getting employees] - [Employee - GET]: ${error.message}`
    )
  }
})
