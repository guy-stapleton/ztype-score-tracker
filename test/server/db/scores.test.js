/* global beforeEach, afterEach, test, expect */
const testEnv = require('./testDb')
const db = require('../../../server/db/connection')

const {getScores} = require('../../../server/db/scores')


let testDb = null

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

test('getScores gets all scores', () => {
  // One for each letter of the alphabet!
  const expected = 3
  return getScores(testDb)
    .then(scores => {
      const actual = scores.length
      expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})
