import { Link } from "react-router-dom";
import { Recipe } from "../Types/Recipe";

interface RecipesItemProps {
  recipe: Recipe;
  fetchData: ()=> void
}

export default function RecipeItem({ recipe, fetchData }: RecipesItemProps) {

  const { title, description, id, ingredients } = recipe;


  const deleteRecipe = async(id: number) => {
    console.log("Send delete request with id")
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
    <div>
      <span>{title}</span>
      <span>{description}</span>
      <ul>
        {ingredients.map(ing => <li key={ing.name}>{ing.name}</li>)}
      </ul>
      <Link to={`edit/${id}`}>
      <button>Edit</button>
      </Link>
 
      <button onClick={() => deleteRecipe(id)}>Delete</button>
    </div>
  );
}