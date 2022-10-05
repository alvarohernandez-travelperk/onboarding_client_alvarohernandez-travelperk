import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import InputField from "../Components/InputField";

export default function EditRecipes() {
  const [editTitle, setEditTitle] = useState<string>("")
  const [editDescription, setEditDescription] = useState<string>("")

  useEffect(() => {
    console.log("Load existing data in form fields")
  }, [])
  
  const handleEditTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTitle(e.target.value);
  };

  const handleEditDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditDescription(e.target.value);
  };

  return (
    <div>
      <h2>Add new Recipes</h2>
      <div>
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
      </div>
      <button>Save</button>
      <Link to="/">
        <button>See all Recipes</button>
      </Link>
    </div>
  )
}
