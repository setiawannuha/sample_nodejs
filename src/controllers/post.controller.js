const models = require('../models/post.model')
const response = require('../helpers/response')
const post = {}

post.all = async(req, res) => {
  try {
    const result = await models.all()
    return response(res, 200, result)
  } catch (error) {
    return response(res, 500, error)
  }
}
post.detail = async(req, res) => {
  try {
    const { id } = req.params
    const result = await models.detail({id})
    return response(res, 200, result[0])
  } catch (error) {
    return response(res, 500, error)
  }
}
post.store = async(req, res) => {
  try {
    const { title, description } = req.body
    const result = await models.store({title, description})
    return response(res, 200, result[0])
  } catch (error) {
    return response(res, 500, error)
  }
}

module.exports = post