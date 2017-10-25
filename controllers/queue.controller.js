const queue = require('../models/queue.model')

function getAll (req, res, next) {
  const data = queue.getAll()
  res.json({ data })
}

function getOne (req, res, next) {
  const data = queue.getOne(req.params.id)
  if (!data.id) return next(data)
  res.json({ data })
}

function create (req, res, next) {
  const data = queue.create(req.body)
  if (!data.id) return next(data)
  res.status(201).json({ data })
}

module.exports = { getAll, getOne, create }
