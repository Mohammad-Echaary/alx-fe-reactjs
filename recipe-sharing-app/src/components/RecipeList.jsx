import React from "react";
import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const isFavorite = (recipeId) => favorites.includes(recipeId);

  const handleFavoriteToggle = (recipeId) => {
    if (isFavorite(recipeId)) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  return (
    <div>
      <h2>Recipe List</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            <button onClick={() => handleFavoriteToggle(recipe.id)}>
              {isFavorite(recipe.id)
                ? "Remove from Favorites"
                : "Add to Favorites"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
