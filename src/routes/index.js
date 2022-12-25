import { Router } from 'express'
const router = Router()
import { getAllRegisters, postRegister } from '../controllers/registers.controller.js'
import { getAllEmployees, postEmployee } from '../controllers/employees.controller.js'

router.get('/registers', getAllRegisters)

router.post('/registers', postRegister)

router.get('/employees', getAllEmployees)

router.post('/employees', postEmployee)



export default router
