import React from "react";
import useRecipeStore from "./recipeStore";

const CookingTimeFilter = () => {
  const setCookingTimeFilter = useRecipeStore(
    (state) => state.setCookingTimeFilter
  );

  const handleChange = (e) => {
    setCookingTimeFilter(e.target.value);
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Filter by cooking time (minutes)..."
        onChange={handleChange}
      />
    </div>
  );
};

export default CookingTimeFilter;
