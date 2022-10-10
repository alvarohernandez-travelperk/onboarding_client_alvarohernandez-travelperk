import { useState } from "react";
import InputField from "./InputField";
import { Button, Main, InputBox, List } from '../Styles/ListIngredients'
import { FaTrash } from 'react-icons/fa';


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