// Importing React and necessary hooks for fetching recipes and displaying them
import React, { useState, useEffect } from 'react';
import { fetchRecipes } from '../services/recipeService';  // Import fetch function for recipe data
import RecipeCard from '../components/RecipeCard'; // Component for displaying individual recipes

// Main App component to handle recipe fetching and displaying
const App = () => {
  // State to hold the list of recipes and the current search query
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('chicken');  // Default search query

  // useEffect hook to fetch recipes when query state changes
  useEffect(() => {
    const getRecipes = async () => {
      const fetchedRecipes = await fetchRecipes(query); // Fetch recipes based on query
      setRecipes(fetchedRecipes); // Set the fetched recipes to state
    };

    getRecipes(); // Call the function to fetch recipes
  }, [query]); // Re-run when query changes

  return (
    <div>
      <h1>Recipe Search</h1>
      {/* Search input to update query state */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update the query based on user input
        placeholder="Search for a recipe"
      />
      <div>
        {/* Render each recipe using RecipeCard component */}
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

// Export the App component for use in the app
export default App;
