import React from "react";
import RecipeList from "./RecipeList";
import AddRecipeForm from "./AddRecipeForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Recipe Manager</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;
