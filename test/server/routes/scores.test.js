const request = require('supertest')

// Get in components to test
var server = require('../../../server/server')

test('Checking the connection works for the api', (done) => {
  return request(server)
    .get('/api/scores')
    .end((err, res) => {
      if(err) {
        return err.message
      }
      const actual = 200
      const expected = res.statusCode
      expect(actual).toBe(expected)
      done()
    })
})
