require('dotenv').config()
const app = require('./server.js')
const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Server running on port ${PORT}`))

module.exports = app
