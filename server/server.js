const express = require('express')
const bodyParser = require('body-parser')

const scoresRoutes = require('./routes/scores')

const app = express()
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/api/scores', scoresRoutes)

module.exports = app
