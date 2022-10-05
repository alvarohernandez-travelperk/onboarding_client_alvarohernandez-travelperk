import { Link } from "react-router-dom";
import ListIngredients from "../Components/ListIngredients";
import InputField from "../Components/InputField";
import { useState } from "react";

export default function AddRecipes() {
  const [addTitle, setAddTitle] = useState<string>("")
  const [addDescription, setAddDescription] = useState<string>("")
  const [ingredients, setIngredients] = useState<string[]>([])

  const handleAddTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddTitle(e.target.value);
  };

  const handleAddDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddDescription(e.target.value);
  };

  const addRecipe = () => {
    const newRecipe = {
      title: addTitle,
      description: addDescription,
      ingredients
    }
    console.log('send recipe to the server', newRecipe)
  };

  return (
    <div>
      <h2>Add new Recipes</h2>
      <div>
        <InputField
          handleInput={handleAddTitle}
          value={addTitle}
          placeholder="Title here"
          title="Title"
        />
        <InputField
          handleInput={handleAddDescription}
          value={addDescription}
          placeholder="description of your recipe"
          title="Description"
        />
        <ListIngredients ingredients={ingredients} setIngredients={setIngredients} />
      </div>
      <button onClick={() => addRecipe()}>Create</button>
      <Link to="/">
        <button>See all recipes</button>
      </Link>
    </div>
  )
}
