import reducer from '../../../client/reducers/scores'

test('Inital state', () => {
  expect(reducer(undefined, {})).toEqual([])
})

test('ADD_SCORES_TO_SCORE', ()=> {
  const scores = [{score: 234}, {score: 370}]
  const actual = reducer(
    {},
    {
      type: 'ADD_SCORES_TO_STORE',
      scores
    }
  )
  expect(actual).toEqual(scores)
})

test('ADD_SCORE_TO_STORE', () => {
  const score = {score: 350}
  const actual = reducer(
    {},
    {
      type: 'ADD_SCORE_TO_STORE',
      score
    }
  )
  expect(actual).toEqual([score])
})
