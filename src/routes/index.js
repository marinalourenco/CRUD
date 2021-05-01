const express = require("express")

const routes = express()

routes.get('/', (req, res) => {
    res.json({ "message": "hello word"})
})

module.exports = routes