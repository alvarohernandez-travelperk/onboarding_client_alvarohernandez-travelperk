import { useState } from "react";
import { FaTrash } from 'react-icons/fa';
import { Button, InputBox, List, Main } from '../Styles/ListIngredients';
import InputField from "./InputField";


interface ListIngredientsProps {
  ingredients: string[];
  setIngredients: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function ListIngredients({ ingredients, setIngredients }: ListIngredientsProps) {
  const [newIngredient, setNewIngredient] = useState<string>("")

  const handleNewIngredient = (e: React.ChangeEvent<HTMLInputElement>) => {

    setNewIngredient(e.target.value);
  };

  const handleIngredients = (newIngredient: string) => {
    const existIngredient = ingredients.find(el => el === newIngredient)
    if (!existIngredient && newIngredient !== "") {
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
      <Main>
        <span>List of Ingredients :</span>
        <InputBox>
          <InputField
            handleInput={handleNewIngredient}
            value={newIngredient}
            placeholder="Type name here"
            title="Name"
          />
          <Button data-testid="add-ingredient-button" onClick={() => handleIngredients(newIngredient)}>Add Ingredient</Button>
        </InputBox>
        <List>
          {ingredients.map(ingredient =>
            <li data-testid="ingredient-item" key={ingredient}>
              {ingredient}
              <span onClick={() => deleteIngredient(ingredient)}>
              <FaTrash />
              </span>
            </li>
          )}
        </List>
      </Main>
    );
}