const express = require('express')
const router = express.Router({ mergeParams: true })
const ctrl = require('../controllers/question.controller')

router.get('/', ctrl.getAll)
router.post('/', ctrl.create)

module.exports = router
