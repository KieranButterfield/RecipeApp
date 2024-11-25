// Importing React hooks and the fetchRecipes function
import React, { useState, useEffect } from 'react';
import { fetchRecipes } from '../services/recipeService'; // import for fetching recipe data

// Main App component
const App = () => {
  // State to hold the fetched recipes, search query, loading state, and any errors
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('chicken'); // Default search query for search bar
  const [loading, setLoading] = useState(false); // The loading state is tracked
  const [error, setError] = useState(null); // Error messages are held if present

  // Function to handle recipe search when search button is clicked
  const handleSearch = async () => {
    setLoading(true); // When the search starts, set loading as true
    try {
      // Fetch recipes based on search query
      const data = await fetchRecipes(searchQuery);
      setRecipes(data.results); // Store the fetched recipes in state
      setError(null); // Reset any previous errors
    } catch (error) {
      console.error('Error fetching recipes:', error);
      setError('Failed to load recipes'); // If the fetch fails, set error message
    } finally {
      setLoading(false); // Set loading to false once the fetching is done
    }
  };

  // useEffect hook to fetch recipes on initial page load
  useEffect(() => {
    handleSearch(); // Call handleSearch function when the component mounts
  }, []); // Empty dependency array ensures this runs once on component mount

  return (
    <div>
      <h1>Recipe Search</h1>
      {/* Search input and button */}
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
          placeholder="Search for recipes"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Loading the state and error message */}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {/* Display recipes if they exist */}
      {recipes && Array.isArray(recipes) && recipes.length > 0 ? (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>{recipe.title}</li> // Display title of each recipe
          ))}
        </ul>
      ) : (
        <p>No recipes found.</p> // Display if no recipes are found
      )}
    </div>
  );
};

// Export the App component for use in the app
export default App;
