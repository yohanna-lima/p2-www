const express = require('express')
const router = express.Router()

const bookController = require('../controller/taskController')

bookController(router)


module.exports = router