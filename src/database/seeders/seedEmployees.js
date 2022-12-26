import { Employee } from '../models/Employee.js'

const seedEmployees = async () => {
  try {
    const addEmployees = [
      {
        id: "aef5b4a0-9477-4002-b26c-1c24f1f9b3d1",
        name: "Carlos Estévez",
        gender: 'male'
      },
      {
        id: "d019698e-f2c1-42b2-82b5-0e53561446c5",
        name: "Sonia Castillo",
        gender: 'female'
      },
      {
        id: "d019698e-9477-4002-b26c-ce06be97bcad",
        name: "Arturo Estévez",
        gender: 'male'
      },
      {
        id: "aef5b4a0-f2c1-42b2-82b5-0e53561446c5",
        name: "Laura Palmer",
        gender: 'female'
      },
      {
        id: "f325d9f4-efa1-451c-b855-ce06be97bcad",
        name: "Dino Legna",
        gender: 'male'
      }
    ]

    await Employee.bulkCreate(addEmployees)
    console.log(`🦾 Employees seeded!`)
  } catch (error) {
    console.log(error)
  }
}

seedEmployees()
