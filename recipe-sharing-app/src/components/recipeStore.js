import create from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "",
  ingredientsFilter: "",
  cookingTimeFilter: "",
  filteredRecipes: [],

  // Action to set the search term and trigger filtering
  setSearchTerm: (term) =>
    set((state) => {
      const lowerCaseTerm = term.toLowerCase();
      const filteredRecipes = state.recipes.filter(
        (recipe) =>
          recipe.title.toLowerCase().includes(lowerCaseTerm) &&
          recipe.ingredients
            .toLowerCase()
            .includes(state.ingredientsFilter.toLowerCase()) &&
          recipe.cookingTime <= state.cookingTimeFilter
      );

      return {
        searchTerm: term,
        filteredRecipes,
      };
    }),

  // Action to set the ingredients filter
  setIngredientsFilter: (ingredients) =>
    set((state) => {
      const lowerCaseIngredients = ingredients.toLowerCase();
      const filteredRecipes = state.recipes.filter(
        (recipe) =>
          recipe.ingredients.toLowerCase().includes(lowerCaseIngredients) &&
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) &&
          recipe.cookingTime <= state.cookingTimeFilter
      );

      return {
        ingredientsFilter: ingredients,
        filteredRecipes,
      };
    }),

  // Action to set the cooking time filter
  setCookingTimeFilter: (time) =>
    set((state) => {
      const filteredRecipes = state.recipes.filter(
        (recipe) =>
          recipe.cookingTime <= time &&
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) &&
          recipe.ingredients
            .toLowerCase()
            .includes(state.ingredientsFilter.toLowerCase())
      );

      return {
        cookingTimeFilter: time,
        filteredRecipes,
      };
    }),

  // Action to add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
      filteredRecipes: [...state.filteredRecipes, newRecipe],
    })),

  // Action to delete a recipe by its index
  deleteRecipe: (index) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter((_, i) => i !== index);
      const updatedFilteredRecipes = state.filteredRecipes.filter(
        (_, i) => i !== index
      );

      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedFilteredRecipes,
      };
    }),

  // Action to update a recipe by its index
  updateRecipe: (index, updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe, i) =>
        i === index ? updatedRecipe : recipe
      );
      const updatedFilteredRecipes = state.filteredRecipes.map((recipe, i) =>
        i === index ? updatedRecipe : recipe
      );

      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedFilteredRecipes,
      };
    }),

  // Action to set or initialize the list of recipes
  setRecipes: (recipes) =>
    set({
      recipes,
      filteredRecipes: recipes,
    }),
}));

export default useRecipeStore;
