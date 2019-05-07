class Recipe {
  constructor() {
    this.data = require('./data/recipes.json')
  }

  list() {
    return this.data
  }

  get(id) {
    return this.data.find(item => item.id === id)
  }
}

module.exports = new Recipe()