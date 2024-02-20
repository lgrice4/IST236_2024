// Import components for use
import { View, Image, StyleSheet, ScrollView, TextInput } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
// Import constants for use
import Colors from "../constants/colors";
import { useState } from "react";

// Function for the Add Recipe Screen
function AddRecipeScreen(props) {
  // Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();
  const [recipeTitle, setRecipeTitle] = useState("");
  const [recipeText, setRecipeText] = useState("");

  // Function to add new recipe
  function addRecipeHandler() {
    props.onAdd(recipeTitle, recipeText);
    props.onCancel;
  }

  // Render the add recipe screen
  return (
    <View
      style={[
        styles.rootContainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      {/* Title container for page name */}
      <View style={styles.titleContainer}>
        <Title>Add New Recipes</Title>
      </View>

      {/* Container for scrollable content */}
      <View style={styles.scrollContainer}>
        <ScrollView>
          <View style={styles.recipeTitleContainer}>
            <TextInput
              placeholder="Enter Recipe Title Here"
              style={styles.recipeTitle}
              onChangeText={setRecipeTitle}
            />
          </View>

          {/* Container for the recipe text input */}
          <View style={styles.recipeTextContainer}>
            <TextInput
              placeholder="Enter Recipe Text Here"
              style={styles.recipeText}
              onChangeText={setRecipeText}
              textAlignVertical="top"
              multiline={true}
              numberOfLines={22}
            />
          </View>

          {/* Navbutton container */}
          <View style={styles.navButtonContainer}>
            <View style={styles.navButton}>
              {/* Button to save the recipe */}
              <NavButton onNext={addRecipeHandler}>Save Recipe</NavButton>
            </View>
            {/* Button to cancel */}
            <View style={styles.navButton}>
              <NavButton onNext={props.onCancel}>Cancel</NavButton>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

// Exports component for use
export default AddRecipeScreen;

// Stylesheet for AddRecipeScreen
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  scrollContainer: {
    flex: 7,
  },
  recipeTitleContainer: {
    borderWidth: 3,
    marginVertical: 10,
    backgroundColor: Colors.primary300,
  },
  recipeTitle: {
    color: Colors.primary500,
    fontWeight: "bold",
    fontSize: 20,
  },
  recipeText: {
    color: Colors.primary500,
    fontWeight: "bold",
    fontSize: 20,
  },
  recipeTextContainer: {
    marginVertical: 5,
    marginVertical: 5,
    borderWidth: 3,
    backgroundColor: Colors.primary300,
  },
  navButtonContainer: {
    flex: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  navButton: {
    marginHorizontal: 5,
    marginVertical: 20,
  },
});
