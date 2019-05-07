const recipes = require('./recipes')

test('can get recipes list', () => {
  const recipesList = require('./data/recipes.json')  
  expect(recipes.list().length).toBe(recipesList.length)
})

test('can get recipe by id', () => {
  const recipesList = require('./data/recipes.json')  
  expect(recipes.get(1).id).toBe(1)
})