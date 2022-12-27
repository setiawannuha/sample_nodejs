const express = require('express')
const routers = express.Router()
const post = require('./post.router')

routers.use('/post', post)

module.exports = routers;