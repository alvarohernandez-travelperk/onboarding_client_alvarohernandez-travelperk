import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Recipe } from './Types/Recipe';
import AddRecipes from './Views/AddRecipes';
import EditRecipes from './Views/EditRecipes';
import ListRecipes from './Views/ListRecipes';

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([])

  const fetchURL = 'http://127.0.0.1:8000/api/recipe/recipes/';


  const fetchData = async () => {
    try {
      const data = await fetch(fetchURL);
      const json = await data.json();
      setRecipes(json);
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    console.log("Fetch data from backend")
    fetchData()
  }, [])

  return (
    <div>
      <h1>Recipe APP</h1>
      <Routes>
        <Route path="/" element={<ListRecipes recipes={recipes} fetchData={fetchData}/>} />
        <Route path="add" element={< AddRecipes fetchData={fetchData}/>} />
        <Route path={`edit/:id`} element={< EditRecipes recipes={recipes} fetchData={fetchData}/>} />
      </Routes>
    </div>
  );
}

export default App;
