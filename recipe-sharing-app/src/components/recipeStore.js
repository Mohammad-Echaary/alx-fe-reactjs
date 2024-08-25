import create from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],

  // Action to add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  // Action to delete a recipe by its index
  deleteRecipe: (index) =>
    set((state) => ({
      recipes: state.recipes.filter((_, i) => i !== index),
    })),

  // Action to update a recipe by its index
  updateRecipe: (index, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe, i) =>
        i === index ? updatedRecipe : recipe
      ),
    })),

  // Action to set or initialize the list of recipes
  setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;
