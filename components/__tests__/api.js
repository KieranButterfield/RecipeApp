// components/api.js
import 'dotenv/config';
import { BASE_URL, RECIPE_SEARCH_ENDPOINT } from "../constants/urls";

const API_KEY = process.env.SPOONACULAR_API_KEY;

export const fetchRecipes = async (query) => {
    const url = `${BASE_URL}${RECIPE_SEARCH_ENDPOINT}?query=${query}&apiKey=${API_KEY}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch recipes");
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error fetching recipes:", error);
        return [];
    }
};
