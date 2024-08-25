import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./RecipeList";
import AddRecipeForm from "./AddRecipeForm";
import RecipeDetails from "./RecipeDetails";
import EditRecipeForm from "./EditRecipeForm";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Recipe Manager</h1>
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
          {/* Route to display details of a specific recipe */}
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          {/* Route to edit a specific recipe */}
          <Route path="/edit-recipe/:id" element={<EditRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
