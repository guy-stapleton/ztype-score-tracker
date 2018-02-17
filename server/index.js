const server = require('./server')

const PORT = process.env.PORT || 3000



var knex = require('knex')
var config = require('../knexfile').development
var db = knex(config)

var app = server(db)


app.listen(PORT, console.log(`Server serving it up on ${PORT}`))

module.exports = db
