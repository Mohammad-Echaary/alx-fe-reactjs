import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./RecipeList";
import AddRecipeForm from "./AddRecipeForm";
import RecipeDetails from "./RecipeDetails";
import EditRecipeForm from "./EditRecipeForm";
import SearchRecipes from "./SearchRecipes";
import IngredientsFilter from "./IngredientsFilter";
import CookingTimeFilter from "./CookingTimeFilter";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Recipe Manager</h1>
          <SearchRecipes />
          <IngredientsFilter />
          <CookingTimeFilter />
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <AddRecipeForm />
                  <RecipeList />
                </>
              }
            />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
            <Route path="/edit-recipe/:id" element={<EditRecipeForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
