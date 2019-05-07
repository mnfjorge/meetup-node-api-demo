const express = require('express'),
  bodyParser = require('body-parser'),
  recipe = require('./recipes'),
  cors = require('cors'),
  app = express()

const port = process.env.PORT || 3001

app.use(bodyParser.json())
app.use(cors())

app.get('/recipes', (req, res) => {
  res.json(recipe.list())
})

app.get('/recipes/:id', (req, res) => {
  res.json(recipe.get(parseInt(req.params.id)))
})

app.listen(port, () => {
  console.info(`Server listening on port ${port}`)
})