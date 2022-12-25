import { Register } from '../models/Register.js'

const seedRegisters = async () => {
  try {
    const addRegisters = [
      {
        registerType: 'entry',
        businessLocation: "Paraná, Argentina",
        employeeId: "aef5b4a0-9477-4002-b26c-1c24f1f9b3d1"
      },
      {
        registerType: 'entry',
        businessLocation: "Buenos Aires, Argentina",
        employeeId: "d019698e-f2c1-42b2-82b5-0e53561446c5"
      },
      {
        registerType: 'entry',
        businessLocation: "Madrid, España",
        employeeId: "f325d9f4-efa1-451c-b855-ce06be97bcad"
      },
      {
        registerType: 'exit',
        businessLocation: "Madrid, España",
        employeeId: "f325d9f4-efa1-451c-b855-ce06be97bcad"
      },
      {
        registerType: 'exit',
        businessLocation: "Paraná, Argentina",
        employeeId: "aef5b4a0-9477-4002-b26c-1c24f1f9b3d1"
      },
    ]
console.log(addRegisters)
    await Register.bulkCreate(addRegisters)
    console.log(`🦾 Registers seeded!`)
  } catch (error) {
    console.log(error)
  }
}

seedRegisters()
