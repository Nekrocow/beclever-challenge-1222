const express = require('express')
const router = express.Router()
// const controllers = require('...')

router
  .get('/')
  .get('/:id')
  .post('/')
  .patch('/')
  .delete('/:id')

  module.exports = router
