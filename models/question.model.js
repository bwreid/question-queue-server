const path = require('path')
const JSONMecha = require('mecha-js').JSONMecha
const dbPath = path.join(__dirname, 'question.db.json')
const mecha = new JSONMecha(dbPath)
const uuid = require('uuid/v4')

function validity (name, content, queueId) {
  const errors = []

  if (!name) errors.push('field `name` is required')
  if (!content) errors.push('field `content` is required')

  const error = { status: 400, message: `Invalid data: ${errors.join(', ')}` }
  return errors.length ? error : false
}

function getAll (queueId) {
  return mecha.get()
    .filter(question => !question.answered)
    .filter(question => question.queueId === queueId)
}

function create ({ name, content }, queueId) {
  const datetime = new Date()
  const answered = false

  const error = validity(name, content, queueId)
  if (error) return error

  const id = uuid()
  return mecha.create({ id, queueId, name, content, datetime, answered })
}

module.exports = { getAll, create }
