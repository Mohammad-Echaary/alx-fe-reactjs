import create from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],

  // Action to add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  // Action to set or initialize the list of recipes
  setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;
