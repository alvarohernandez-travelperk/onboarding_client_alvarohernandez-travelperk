import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import InputField from "../Components/InputField";
import ListIngredients from "../Components/ListIngredients";
import { Recipe } from "../Types/Recipe";

interface EditRecipesProps {
  recipes: Recipe[];
}

export default function EditRecipes({ recipes }: EditRecipesProps) {
  const [editTitle, setEditTitle] = useState<string>("")
  const [editDescription, setEditDescription] = useState<string>("")
  const [ingredients, setIngredients] = useState<string[]>([])
  const [id, setId] = useState<number | undefined>(undefined)

  const params = useParams();

  useEffect(() => {
    setId(Number(params.id))
  }, [])

  useEffect(() => {
    const recipe = recipes.filter(recipe => recipe.id === id)[0]
    if (recipe) {
      if (recipe.title) setEditTitle(recipe.title);
      if (recipe.description) setEditDescription(recipe.description);
      console.log(recipe.ingredients)
      const ingredientsClient: string[] = [];
      recipe.ingredients.map(ing => ingredientsClient.push(ing.name))
      setIngredients(ingredientsClient)
    }

  }, [id])

  const handleEditTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTitle(e.target.value);
  };

  const handleEditDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditDescription(e.target.value);
  };

  const saveRecipe = async () => {
    const ingredientsAPI:any = [];
     ingredients.map(ing => ingredientsAPI.push({"name": ing}))

    const newRecipe = {
      title: editTitle,
      description: editDescription,
      "ingredients": ingredientsAPI
    }
    const data = await fetch(`http://127.0.0.1:8000/api/recipe/recipes/${id}/`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newRecipe)
    });
    const json = await data.json();
    console.log(json, "response")
  };

  return (
    <div>
      <h2>Edit this Recipe</h2>
      <div>
        <InputField
          handleInput={handleEditTitle}
          value={editTitle}
          placeholder="Title here"
          title="Title"
        />
        <InputField
          handleInput={handleEditDescription}
          value={editDescription}
          placeholder="description of your recipe"
          title="Description"
        />
        <ListIngredients ingredients={ingredients} setIngredients={setIngredients} />
      </div>
      <button onClick={() => saveRecipe()}>Save</button>
      <Link to="/">
        <button>See all Recipes</button>
      </Link>
    </div>
  )
}
