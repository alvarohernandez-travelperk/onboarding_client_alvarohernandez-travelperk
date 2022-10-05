import React from 'react'
import { Link } from 'react-router-dom'
import RecipeItem from '../Components/Recipe'

export default function ListRecipes() {
  return (
    <div>
      <Link to="/add">
        <button>Add new recipe</button>
      </Link>
      <h2>List of Recipes</h2>
      <RecipeItem />
    </div>
  )
}
