import { Register } from '../database/models/Register.js'
import { createRegister, average, search  } from '../services/register.services.js'
import { catchAsync } from '../helpers/catchAsync.js'
import { endpointResponse } from '../helpers/success.js'

export const postRegister = catchAsync(async (req, res) => {
  const { employeeId, date, registerType,
    businessLocation } = req.body
  try {
    const newRegister = await createRegister({
      employeeId,
      date,
      registerType,
      businessLocation
    })
    endpointResponse({
      res,
      code: 201,
      body: newRegister,
    })
  } catch (error) {
    console.log(error, `[Error adding register] - [Register - POST]: ${error.message}`
    )
  }
})

export const getAllRegisters = catchAsync(async (req, res) => {
  try {
    let response
    if (req.query.dateFrom) {
      const { dateFrom, dateTo, descriptionFilter, businessLocation } = req.query
      response = await search (dateFrom, dateTo, descriptionFilter, businessLocation)
    } else {
      response = await Register.findAll()
    }
    endpointResponse({
      res,
      code: 200,
      body: response,
    })
  } catch (error) {
    console.log(`[Error getting registers] - [Register - GET]: ${error.message}`
    )
  }
})