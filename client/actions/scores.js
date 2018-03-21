import request from 'superagent'

const scoresApi = 'http://localhost:3000/api/scores'

export const storeScores = scores => {
  return {
    type: 'ADD_SCORES_TO_STORE',
    scores
  }
}

export function getScores () {
  return dispatch => {
    request
      .get(scoresApi)
      .end((err, res) => {
        if (err) {
          return err.message
        }
        dispatch(storeScores(res.body))
      })
  }
}
