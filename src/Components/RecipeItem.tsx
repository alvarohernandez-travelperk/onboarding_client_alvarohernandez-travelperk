import { Link } from "react-router-dom";
import { Recipe } from "../Types/Recipe";
import { Card, Button, TextBox, TextBold, Text, IngredientsBox } from '../Styles/RecipeItem'
import { FaTrash, FaEdit } from 'react-icons/fa';

interface RecipesItemProps {
  recipe: Recipe;
  fetchData: ()=> void
}

export default function RecipeItem({ recipe, fetchData }: RecipesItemProps) {

  const { title, description, id, ingredients } = recipe;


  const deleteRecipe = async(id: number) => {
    const data = await fetch(`http://127.0.0.1:8000/api/recipe/recipes/${id}/`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    fetchData()
  };

  return (
    <Card>
      <TextBox>
        <TextBold>Title :</TextBold>
        <Text data-testid="recipe-item-title">{title}</Text></TextBox>
        <TextBox>
        <TextBold>Description :</TextBold>
        <Text data-testid="recipe-item-description">{description}</Text>
      </TextBox>
      <IngredientsBox>
      <TextBold>Ingredients :</TextBold>
      <ul>
        {ingredients.map(ing => <li key={ing.name}>{ing.name}</li>)}
      </ul>
        </IngredientsBox>

      <div>
      <Link to={`edit/${id}`}>
      <Button><FaEdit /></Button>
      </Link>
 
      <Button onClick={() => deleteRecipe(id)}> <FaTrash /></Button>
      </div>

    </Card>
  );
}