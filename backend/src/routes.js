const express = require('express')

const DevController = require('./controllers/DevController')
const LikeController = require('./controllers/LikeController')
const DislikeController = require('./controllers/DislikeController')

const routes = express.Router()
routes.get('/', (req, res) => {
    return res.send('Hellow World')
})
routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)
routes.post('/devs/:id/likes', LikeController.store)
routes.post('/devs/:id/dislikes', DislikeController.store)

module.exports = routes