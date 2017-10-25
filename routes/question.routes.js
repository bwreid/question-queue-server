const express = require('express')
const router = express.Router({ mergeParams: true })
const ctrl = require('../controllers/question.controller')

router.post('/', ctrl.create)

module.exports = router
