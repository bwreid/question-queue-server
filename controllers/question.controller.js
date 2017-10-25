const question = require('../models/question.model')

function getAll (req, res, next) {
  const data = question.getAll(req.params.queueId)
  res.json({ data })
}

function create (req, res, next) {
  const data = question.create(req.body, req.params.queueId)
  res.status(201).json({ data })
}

module.exports = { getAll, create }
