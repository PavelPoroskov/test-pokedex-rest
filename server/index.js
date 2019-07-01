'use strict';

var serverPort = 8000

var express = require('express')
var cors = require('cors')
var app = express()

// var corsOptions = {
//     origin: 'http://localhost:' + port,
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }
//app.use(cors(corsOptions))

app.use(cors())


var d = new Date()
//app.get('/', (req, res) => res.send(`Hello from server: ${d}`))
app.get('/', function (req, res, next) {
  res.json({msg: `Hello from server: ${d}`})
})

app.listen(serverPort, function () {
  console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
})