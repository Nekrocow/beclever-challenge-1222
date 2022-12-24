import { Router } from 'express'
const router = Router()
// import { getEntriesAndExits } from '../controllers/index.controller'

const getEntriesAndExits = () => 'todo'

router
  .get('/entrance', getEntriesAndExits)
  .get('/:id')
  .post('/')
  .patch('/')
  .delete('/:id')

export default router
