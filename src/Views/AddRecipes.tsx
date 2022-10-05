import { Link } from "react-router-dom";

export default function AddRecipes() {
  return (
    <div>
      <h2>Add new Recipes</h2>
      <Link to="/">
        <button>See all recipes</button>
        </Link>
    </div>
  )
}
