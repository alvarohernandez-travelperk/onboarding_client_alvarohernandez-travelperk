import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import InputField from "../Components/InputField";
import ListIngredients from "../Components/ListIngredients";
import { Recipe } from "../Types/Recipe";
import { Main, Button, FormCard, ButtonsBox } from '../Styles/Views';
import StatusMessage from "../Components/StatusMessage";
import { Status } from "../Types/Status";


interface EditRecipesProps {
  recipes: Recipe[];
  fetchData: () => void
}

export default function EditRecipes({ recipes, fetchData }: EditRecipesProps) {
  const [editTitle, setEditTitle] = useState<string>("")
  const [editDescription, setEditDescription] = useState<string>("")
  const [ingredients, setIngredients] = useState<string[]>([])
  const [id, setId] = useState<number | undefined>(undefined)
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false)

  const params = useParams();

  useEffect(() => {
    setId(Number(params.id))
  }, [])

  useEffect(() => {
    const recipe = recipes.filter(recipe => recipe.id === id)[0]
    if (recipe) {
      if (recipe.title) setEditTitle(recipe.title);
      if (recipe.description) setEditDescription(recipe.description);
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
    const ingredientsAPI: {"name": string}[] = [];
    ingredients.map(ing => ingredientsAPI.push({ "name": ing }))

    const newRecipe = {
      title: editTitle,
      description: editDescription,
      "ingredients": ingredientsAPI
    }
    const data = await fetch(`${process.env.REACT_APP_URL}${id}/`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newRecipe)
    });
    await data.json();
    if (data.status === 200) {
      showMessage();
    }
    fetchData()
  };

  const showMessage = () => {
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 5000);
  }

  return (
    <Main>
      <FormCard>
        <h2>Edit this Recipe</h2>
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
      </FormCard>
      <ButtonsBox>
        <Button onClick={() => saveRecipe()}>Save</Button>
        {showSuccessMessage ? <StatusMessage status={Status.Success} message="Recipe edited successfully!" /> : null}
        <Link to="/">
          <Button>See all Recipes</Button>
        </Link>
      </ButtonsBox>
    </Main>
  )
}
