import { Link } from "react-router-dom";
import ListIngredients from "../Components/ListIngredients";
import InputField from "../Components/InputField";
import { useState } from "react";
import { Main, Button, FormCard, ButtonsBox } from '../Styles/Views';

interface AddRecipesProps {
  fetchData: ()=> void
}

export default function AddRecipes({fetchData}: AddRecipesProps) {
  const [addTitle, setAddTitle] = useState<string>("")
  const [addDescription, setAddDescription] = useState<string>("")
  const [ingredients, setIngredients] = useState<string[]>([])

  const handleAddTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddTitle(e.target.value);
  };

  const handleAddDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddDescription(e.target.value);
  };

  const addRecipe = async () => {
    const ingredientsAPI: { "name": string }[] = [];
    ingredients.map(ing => ingredientsAPI.push({ "name": ing }))

    const newRecipe = {
      title: addTitle,
      description: addDescription,
      "ingredients": ingredientsAPI
    }
    const data = await fetch("http://127.0.0.1:8000/api/recipe/recipes/", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newRecipe)
    });
    const json = await data.json();
    fetchData();
  };

  return (
    <Main>
  
      <FormCard>
      <h2>Add new Recipe</h2>
        <InputField
          handleInput={handleAddTitle}
          value={addTitle}
          placeholder="Title here"
          title="Title"
        />
        <InputField
          handleInput={handleAddDescription}
          value={addDescription}
          placeholder="Description of your recipe"
          title="Description"
        />
        <ListIngredients ingredients={ingredients} setIngredients={setIngredients} />
      </FormCard>
      <ButtonsBox>
      <Button onClick={() => addRecipe()}>Create</Button>
      <Link to="/">
        <Button>See all recipes</Button>
      </Link>
      </ButtonsBox>
   
    </Main>
  )
}
