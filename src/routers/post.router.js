const express = require('express')
const routers = express.Router()
const controller = require('../controllers/post.controller')

routers.get('/', controller.all)
routers.get('/:id', controller.detail)
routers.post('/', controller.store)

module.exports = routers