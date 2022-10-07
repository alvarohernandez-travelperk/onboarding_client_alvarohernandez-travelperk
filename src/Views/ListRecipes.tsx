import React from 'react'
import { Link } from 'react-router-dom'
import RecipeItem from '../Components/RecipeItem'
import { Main, Button, ButtonsBox } from '../Styles/Views';
import { Recipe } from '../Types/Recipe';

interface ListRecipesProps {
  recipes: Recipe[];
  fetchData: () => void
}

export default function ListRecipes({ recipes, fetchData }: ListRecipesProps) {
  return (
    <Main>
      <div>
        <h2>List of Recipes</h2>
        {recipes.length === 0 ? <p>Add new recipes!</p> : recipes.map(recipe => <RecipeItem key={recipe.id} recipe={recipe} fetchData={fetchData} />)}
      </div>
      <ButtonsBox>
        <Link to="/add">
          <Button>Add new recipe</Button>
        </Link>
      </ButtonsBox>
    </Main>
  )
}
