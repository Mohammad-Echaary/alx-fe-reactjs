import React from "react";
import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      <h2>Recipe List</h2>
      <ul>
        {filteredRecipes.map((recipe, index) => (
          <li key={index}>
            <Link to={`/recipe/${index}`}>{recipe}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
