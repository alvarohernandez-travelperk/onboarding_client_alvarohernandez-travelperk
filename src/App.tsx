import RecipeItem from './Components/Recipe';
import { useEffect, useState } from 'react';
import ListRecipes from './Views/ListRecipes';

function App() {
const [recipes, setRecipes] = useState<[]>([])

  useEffect(() => {
    console.log("Fetch data from backend")

  }, [])

  return (
    <div>
      <h1>Recipe APP</h1>
      <li>
        <button>Add new recipe</button>
      </li>
      <ListRecipes />
    </div>
  );
}

export default App;
