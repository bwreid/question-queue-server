const question = require('../models/question.model')

function create (req, res, next) {
  const data = question.create(req.body, req.params.queueId)
  res.status(201).json({ data })
}

module.exports = { create }
