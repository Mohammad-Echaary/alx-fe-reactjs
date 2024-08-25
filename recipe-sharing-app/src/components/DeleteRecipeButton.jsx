import React from "react";
import { useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(id); // Delete the recipe from the store
    navigate("/"); // Redirect to the home page or wherever you want after deleting
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
