const express = require('express')
const server = express()
const cors = require('cors')

require('dotenv').config()
server.use(cors())
server.use(express.json())

const PORT = process.env.PORT || 8080
server.listen(PORT, () => console.log(`Executando na porta ${PORT}`))


module.exports = server