import request from 'superagent'

const apiUrl = 'http://localhost:3000/api'

export function getScores(callback) {
  request
    .get(apiUrl)
    .end((err, res) => {
      callback(err, res.body)
    })
}
