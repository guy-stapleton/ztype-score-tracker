import request from 'superagent'

const scoresApi = 'http://localhost:3000/api/scores'

export const storeScores = scores => {
  return {
    type: 'ADD_SCORES_TO_STORE',
    scores
  }
}

export const storeScore = score => {
  return {
    type: 'ADD_SCORE_TO_SCORE',
    score
  }
}


export function addScore(score) {
  return dispatch => {
    request
      .post(scoresApi)
      .send(score)
      .end((err, res) => {
        if (err) {
          return err.message
        }
        dispatch(storeScore(res.body))
      })
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
