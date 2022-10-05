export default function RecipeItem() {

  const deleteRecipe = () => {
    console.log("Send delete request with id")
  };

  return (
    <div>
      <span> Recipe Title</span>
      <span> Recipe Description</span>
      <ul>
        <li>Ingredient 1</li>
        <li>Ingredient 2</li>
        <li>Ingredient 3</li>
      </ul>
      <button>Edit</button>
      <button onClick={()=>deleteRecipe()}>Delete</button>
    </div>
  );
}