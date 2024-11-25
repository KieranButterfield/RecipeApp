// RecipeDetail component displays detailed information about a recipe
import React from 'react';

// Functional component displays recipe details which are passed as props
const RecipeDetail = ({ recipe }) => {
  return (
    <div>
      <h2>{recipe.title}</h2>  {/* Display the recipe title */}
      <img src={recipe.image} alt={recipe.title} /> {/* Display the recipe's image */}
      
      <h3>Ingredients</h3>
      {/* List all the ingredients in the recipe */}
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li> // Display each ingredient
        ))}
      </ul>
      
      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>  {/* Display recipe instructions */}
    </div>
  );
};

// Export the RecipeDetail component for use in other files
export default RecipeDetail;
