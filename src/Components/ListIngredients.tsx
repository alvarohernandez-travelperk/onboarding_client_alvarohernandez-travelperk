import { useState } from "react";
import InputField from "./InputField";

interface ListIngredientsProps {
  ingredients: string[];
  setIngredients: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function ListIngredients({ingredients, setIngredients}: ListIngredientsProps) {
  const [newIngredient, setNewIngredient] = useState<string>("")

  const handleNewIngredient = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewIngredient(e.target.value);
  };

  const handleIngredients = (newIngredient: string) => {
    const existIngredient = ingredients.find(el => el === newIngredient)
    if (!existIngredient) {
      const newArray = [...ingredients, newIngredient];
      setIngredients(newArray)
      setNewIngredient("");
    }
  };

  const deleteIngredient = (ingredientToDelete: string) => {
    const newArray = ingredients.filter(el => el !== ingredientToDelete);
    setIngredients(newArray)
  };

  return (
    <div>
      <span>List of Ingredients</span>
      <div>
        <InputField
          handleInput={handleNewIngredient}
          value={newIngredient}
          placeholder="Title here"
          title="Title"
        />
        <button onClick={() => handleIngredients(newIngredient)}>Add Ingredient</button>
      </div>
      <ul>
        {ingredients.map(ingredient => 
          <li key={ingredient}>
            {ingredient} 
            <span  onClick={() => deleteIngredient(ingredient)}>
                X
            </span>
          </li>
        )}
      </ul>
    </div>
  );
}