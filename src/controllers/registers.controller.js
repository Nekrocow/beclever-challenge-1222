import { Register } from '../database/models/Register.js'
import { createRegister } from '../services/register.services.js'
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
    const allRegisters = await Register.findAll()
    endpointResponse({
      res,
      code: 200,
      body: allRegisters,
    })
  } catch (error) {
    console.log(`[Error getting registers] - [Register - GET]: ${error.message}`
    )
  }
})

export const getMontlhyAverages = catchAsync(async (req, res) => {
  try {
    const { dateFrom, dateTo } = req.query
    const allRegisters = await Register.findAll({
      where: {
        "date": {
          [Op.and]: {
            [Op.gte]: dateFrom,
            [Op.lte]: dateTo
          }
        }
      }
    })

    console.log(allRegisters)

    endpointResponse({
      res,
      code: 200,
      body: allRegisters,
    })
  } catch (error) {
    console.log(`[Error getting registers] - [Register - GET]: ${error.message}`
    )
  }
})
