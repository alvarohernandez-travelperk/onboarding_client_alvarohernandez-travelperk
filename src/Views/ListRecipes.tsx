import React from 'react'
import { Link } from 'react-router-dom'
import RecipeItem from '../Components/RecipeItem'
import { Recipe } from '../Types/Recipe';

interface ListRecipesProps {
  recipes: Recipe[];
}

export default function ListRecipes({ recipes }: ListRecipesProps) {
  return (
    <div>
      <Link to="/add">
        <button>Add new recipe</button>
      </Link>
      <h2>List of Recipes</h2>

      {recipes.length === 0 ? <p>Add new recipes!</p> : recipes.map(recipe => <RecipeItem key={recipe.id} recipe={recipe} />)}
    </div>
  )
}
