const express = require('express')
// get Server config
const server = require('../server/server')

// Start Router
const router = express.Router()

//Test db exports
const getScores = require('../db/db').getScores


router.get('/', (req, res) => {
  getScores()
  .then(result => {
    res.json(result)
  })
  .catch(err => {
    console.log(`Disaster has struck`)
  })
})

module.exports = router
