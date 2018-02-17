const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

function getScores() {
  const db = connection
  return db('scores').select()
}

function logHi() {
  console.log('Hi I am the logHi function in db.js')
}

module.exports = {getScores, logHi}
