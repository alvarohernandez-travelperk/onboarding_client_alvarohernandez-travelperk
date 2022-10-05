import { useEffect, useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import AddRecipes from './Views/AddRecipes';
import ListRecipes from './Views/ListRecipes';

function App() {
  const [recipes, setRecipes] = useState<[]>([])

  useEffect(() => {
    console.log("Fetch data from backend")

  }, [])

  return (
    <div>
      <h1>Recipe APP</h1>
      <Routes>
        <Route path="/" element={<ListRecipes />} />
        <Route path="add" element={< AddRecipes />} />
      </Routes>
    </div>
  );
}

export default App;
