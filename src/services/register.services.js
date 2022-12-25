import { Register } from '../database/models/Register.js'

export const createRegister = async (newRegister) => {
  return await Register.create(newRegister)
}
