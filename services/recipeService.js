// RecipeService makes API calls to the Spoonacular API

// Import API constants (base URL the and endpoints)
import { BASE_URL, RECIPE_SEARCH_ENDPOINT } from '../constants/urls';

// Function to fetch recipes from the Spoonacular API based on a search query
export const fetchRecipes = async (query, apiKey) => {
  try {
    // Making a request to the API with the query and API key
    const response = await fetch(`${BASE_URL}${RECIPE_SEARCH_ENDPOINT}?query=${query}&apiKey=${apiKey}`);
    
    // If it fails, throw an error
    if (!response.ok) {
      throw new Error(`Error fetching recipes: ${response.statusText}`);
    }

    // Parse the JSON response
    const data = await response.json();
    
    // Return the recipes results or an empty array if no results found
    return data.results || [];
  } catch (error) {
    console.error("Error:", error); // Log the error
    return []; // Return an empty array if an error occurs
  }
};
