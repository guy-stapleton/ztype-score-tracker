const express = require('express')

var server = require('../server/server')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('I\'m listening')
})

module.exports = router
