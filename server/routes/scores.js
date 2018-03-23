const express = require('express')
const router = express.Router()

const {getScores, addScore, findScore} = require('../db/scores')

router.get('/', (req, res) => {
  getScores()
  .then(scores => {
    res.json(scores)
  })
  .catch(err => {
    res.json(err.message)
  })
})

router.post('/', (req, res) => {
  addScore(req.body)
  .then(scoreId => {
    findScore(scoreId)
    .then(result => {
      res.json(result)
    })
  })
  .catch(err => {
    return err.message
  })
})

module.exports = router
