// Import components for use
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import HomeScreen from "./screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
// Import constants for use
import Colors from "./constants/colors";
// Import screens for use
import AddRecipeScreen from "./screens/AddRecipeScreen";
import RecipesScreen from "./screens/RecipesScreen";
// Import fonts
import { useFonts } from "expo-font";

// Main App component
export default function App() {
  // Set up custom fonts
  const [fontsLoaded] = useFonts({
    paperNotes: require("./assets/fonts/Papernotes.ttf"),
  });

  // Set the current screen
  const [currentScreen, setCurrentScreen] = useState("home");
  const [currentID, setCurrentID] = useState(3);
  const [currentRecipes, setCurrentRecipes] = useState([
    {
      id: 1,
      title: "Sweet Lemon Shrimp",
      text:
        "- 1/3 cup hoisin sauce\n" +
        "- 1/4 cup honey\n" +
        "- 1/2 cup freshly squeezed lemon juice\n" +
        "- Zest of 1 lemon\n" +
        "- Kosher salt & feshly ground black pepper, to taste\n" +
        "- 1 1/2 pounds medium shrip (peeled & deveined)\n" +
        "- 2 tablespoons chopped fresh cilantro leaves",
    },
    {
      id: 2,
      title: "Spaghetti Carbonara",
      text:
        "- 8 ounces spaghetti\n" +
        "- 2 large eggs\n" +
        "- 1/2 cup freshly grated Parmesan\n" +
        "- 4 slices bacon, diced\n" +
        "- 4 cloves garlic, minced\n" +
        "- Kosher salt & feshly ground black pepper, to taste\n" +
        "- 2 tablespoons chopped fresh parsley leaves",
    },
  ]);

  // Function to switch to home screen
  function homeScreenHandler() {
    setCurrentScreen("home");
  }

  // Function to switch to recipes screen
  function recipesScreenHandler() {
    setCurrentScreen("recipes");
  }

  // Function to add recipe
  function addRecipeScreenHandler() {
    setCurrentScreen("add");
  }
  function addRecipeHandler(enteredRecipeTitle, enteredRecipeText) {
    setCurrentRecipes((currentRecipes) => {
      return [
        ...currentRecipes,
        { id: currentID, title: enteredRecipeTitle, text: enteredRecipeText },
      ];
    });
    setCurrentID(currentID + 1);
    recipesScreenHandler();
  }

  // Function to delete recipe
  function deleteRecipeHandler(id) {
    setCurrentRecipes((currentRecipes) => {
      return currentRecipes.filter((item) => item.id !== id);
    });
  }

  // Determine which screen to be on
  let screen = <HomeScreen onNext={recipesScreenHandler} />;
  if (currentScreen === "add") {
    screen = (
      <AddRecipeScreen
        onAdd={addRecipeHandler}
        onCancel={recipesScreenHandler}
      />
    );
  }
  if (currentScreen === "recipes") {
    screen = (
      <RecipesScreen
        onHome={homeScreenHandler}
        onAdd={addRecipeScreenHandler}
        onDelete={deleteRecipeHandler}
        currentRecipes={currentRecipes}
      />
    );
  }

  // Renders the current screen within a SafeAreaProvider
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}

// StyleSheet for main app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary800,
    alignItems: "center",
    justifyContent: "center",
  },
});
