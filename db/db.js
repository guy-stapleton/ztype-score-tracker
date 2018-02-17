const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

function getScores() {
  const db = testDb || connection
  return db('scores').select()
}

mpdule.exports = getScores
