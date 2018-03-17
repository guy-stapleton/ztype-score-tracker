const express = require('express')
const router = express.Router()

const {getScores} = require('../db/scores')

router.get('/', (req, res) => {
  getScores()
  .then(scores => {
    res.json(scores)
  })
  .catch(err => {
    res.json(err.message)
  })
})


module.exports = router
