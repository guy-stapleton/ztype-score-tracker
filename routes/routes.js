const express = require('express')
// get Server config
const server = require('../server/server')

// Start Router
const router = express.Router()

//Test db exports
const getScores = require('../db/db').getScores


router.get('/', (req, res) => {
  var db = req.app.get('db')
  db('scores')
  .select()
  .then(result => {
    res.json({msg: result})
  })
})

module.exports = router
