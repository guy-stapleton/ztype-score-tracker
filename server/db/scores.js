const connection = require('./connection')

function getScores(testDb) {
  const db = testDb || connection
  return db('scores').select()
}

function addScore(score, testDb) {
  console.log(`addScore ran`)
  const db = testDb || connection
  return db('scores')
    .insert({date: score.date,
            score: score.score,
            typing_accuracy: score.typing_accuracy,
            wave: score.wave,
            longest_streak: score.longest_streak})
}

function findScore(scoreId, testDb) {
  const db = testDb || connection
  return db('scores')
    .where('id', scoreId)
    .select()
}

module.exports = {getScores,
                  findScore,
                  addScore}
