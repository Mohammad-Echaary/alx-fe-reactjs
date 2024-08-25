import React from "react";
import useRecipeStore from "./recipeStore";

const IngredientsFilter = () => {
  const setIngredientsFilter = useRecipeStore(
    (state) => state.setIngredientsFilter
  );

  const handleChange = (e) => {
    setIngredientsFilter(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by ingredients..."
        onChange={handleChange}
      />
    </div>
  );
};

export default IngredientsFilter;
