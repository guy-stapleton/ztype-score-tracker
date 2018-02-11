const request = require('supertest')
const jest = require('jest')

// Get in components to test
var server = require('../server/server')
var app = server('db')


test('Checking the connection works for the api', (done) => {
  var apiUrl = 'http://localhost:3000/api'
  request(app)
    .get('/')
    .end((err, res) => {
      if(err) {
        console.log(err.message)
      }
      const actual = 200
      const expected = res.statusCode
      expect(actual).toBe(expected)
      done()
    })
})
