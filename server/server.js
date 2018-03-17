const express = require('express')
const bodyParser = require('body-parser')

const scoresRoutes = require('./routes/scores')
const authRoutes = require('./routes/auth')

const app = express()
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/api/scores', scoresRoutes)
app.use('/api/auth', authRoutes)

module.exports = app
