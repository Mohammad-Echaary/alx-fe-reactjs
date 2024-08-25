import React from "react";
import { useParams } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const RecipeDetails = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const recipe = useRecipeStore((state) => state.recipes[id]); // Fetch the recipe by ID

  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  return (
    <div>
      <h2>Recipe Details</h2>
      <p>ID: {id}</p>
      <p>Name: {recipe}</p>
      {/* You can add more details about the recipe here */}
    </div>
  );
};

export default RecipeDetails;
