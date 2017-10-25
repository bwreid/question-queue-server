const path = require('path')
const JSONMecha = require('mecha-js').JSONMecha
const dbPath = path.join(__dirname, 'queue.db.json')
const mecha = new JSONMecha(dbPath)
const uuid = require('uuid/v4')

function getAll () {
  return mecha.get()
}

function getOne (id) {
  return mecha.find({ prop: [ 'id', id ]})
}

// This function will either return an error
// or the newly added queue with an id
function create ({ name }) {
  if (!name) return { status: 400, message: 'field `name` is required' }
  const id = uuid()
  return mecha.create({ id, name })
}

module.exports = { getAll, getOne, create }
