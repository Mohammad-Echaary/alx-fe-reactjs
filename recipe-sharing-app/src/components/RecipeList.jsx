import React, { useState } from "react";
import useRecipeStore from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const [editingIndex, setEditingIndex] = useState(null);
  const [newRecipeName, setNewRecipeName] = useState("");

  const handleUpdateRecipe = (index) => {
    updateRecipe(index, newRecipeName);
    setEditingIndex(null);
  };

  return (
    <div>
      <h2>Recipe List</h2>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>
            {editingIndex === index ? (
              <>
                <input
                  type="text"
                  value={newRecipeName}
                  onChange={(e) => setNewRecipeName(e.target.value)}
                />
                <button onClick={() => handleUpdateRecipe(index)}>Save</button>
              </>
            ) : (
              <>
                {recipe}
                <button onClick={() => setEditingIndex(index)}>Edit</button>
                <button onClick={() => deleteRecipe(index)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
