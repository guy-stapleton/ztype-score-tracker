const connection = require('./connection')

function getScores(testDb) {
  const db = testDb || connection
  return db('scores').select()
}

module.exports = {getScores}
