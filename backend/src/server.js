const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')

mongoose.connect('mongodb+srv://admin:200679@cluster0-bbus6.mongodb.net/test?retryWrites=true&w=majority', {
   useNewUrlParser: true,
   useUnifiedTopology: true
})

const server = express()
server.use(cors())
server.use(express.json())
server.use(routes)
server.listen(3333)