// SearchScreen component for handling recipe search functionality in React Native
import React, { useState } from "react"; // Import React and useState hook
import { View, TextInput, Button, FlatList, Text } from "react-native"; // Import necessary React Native components
import { fetchRecipes } from "../components/api"; // Import the fetchRecipes function to get data from the API

// Functional component for searching recipes
const SearchScreen = () => {
    const [query, setQuery] = useState(""); // State to hold the search query
    const [recipes, setRecipes] = useState([]); // State to hold the fetched recipes

    // Function for search button click
    const handleSearch = async () => {
        const results = await fetchRecipes(query); // Fetch recipes based on search query
        setRecipes(results); // Set fetched recipes to state
    };

    return (
        <View>
            {/* TextInput for the user's search query */}
            <TextInput
                placeholder="Search for recipes"
                value={query}
                onChangeText={setQuery} // Update query state as the user types
            />
            {/* Button triggers the search */}
            <Button title="Search" onPress={handleSearch} />
            
            {/* FlatList displays recipes */}
            <FlatList
                data={recipes}  // List of recipes to display
                keyExtractor={(item) => item.id.toString()}  // Unique key for each item
                renderItem={({ item }) => <Text>{item.title}</Text>}  // Display recipe titles
            />
        </View>
    );
};

// Export the SearchScreen component for use in the app
export default SearchScreen;
