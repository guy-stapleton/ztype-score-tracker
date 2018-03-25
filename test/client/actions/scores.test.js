import * as actions from '../../../client/actions/scores'

test('Add score to store', () => {
  const score = {score: 277}
  const actual = {
    type: 'ADD_SCORE_TO_STORE',
    score
  }
  expect(actions.storeScore(score)).toEqual(actual)
})


test('Add scores to store', () => {
  const scores = [{score: 345}, {score: 389}]
  const actual = {
    type: 'ADD_SCORES_TO_STORE',
    scores
  }
  expect(actions.storeScores(scores)).toEqual(actual)
})
