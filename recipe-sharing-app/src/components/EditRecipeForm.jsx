import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const EditRecipeForm = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const navigate = useNavigate();
  const recipe = useRecipeStore((state) => state.recipes[id]); // Fetch the recipe by ID
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [updatedRecipe, setUpdatedRecipe] = useState(recipe || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(id, updatedRecipe); // Update the recipe in the store
    navigate("/"); // Redirect to the home page or wherever you want after updating
  };

  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <input
        type="text"
        value={updatedRecipe}
        onChange={(e) => setUpdatedRecipe(e.target.value)}
        placeholder="Update recipe name"
      />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
