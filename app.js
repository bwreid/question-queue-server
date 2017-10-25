const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const env = process.env.NODE_ENV || 'development'

app.use(require('body-parser').json())
if (env === 'development') app.use(require('morgan')('dev'))

app.get('/', (req, res, next) => {
  res.json({ message: 'Welcome to the Question Queue!' })
})

app.use('/queues', require('./routes/queue.routes'))

app.use((req, res, next) => {
  const status = 404
  const message = `Could not ${req.method} ${req.url}.`
  res.status(404).json({ error: { status, message } })
})

app.use((err, req, res, next) => {
  console.error(err)
  const status = err.status || 500
  const message = err.message || 'Something went wrong!'
  res.status(status).json({ error: { status, message }})
})

app.listen(port, () => `Hello from port ${port}! ✨`)
