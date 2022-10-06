import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Recipe } from './Types/Recipe';
import AddRecipes from './Views/AddRecipes';
import EditRecipes from './Views/EditRecipes';
import ListRecipes from './Views/ListRecipes';

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([])

  const fetchURL = 'http://127.0.0.1:8000/api/recipe/recipes/';

  const location = useLocation();

  const fetchData = async (url: string) => {
    try {
      const data = await fetch(url);
      const json = await data.json();
      setRecipes(json);
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    console.log("Fetch data from backend")
    fetchData(fetchURL)
  }, [location])

  return (
    <div>
      <h1>Recipe APP</h1>
      <Routes>
        <Route path="/" element={<ListRecipes recipes={recipes}/>} />
        <Route path="add" element={< AddRecipes />} />
        <Route path={`edit/:id`} element={< EditRecipes recipes={recipes}/>} />
      </Routes>
    </div>
  );
}

export default App;
