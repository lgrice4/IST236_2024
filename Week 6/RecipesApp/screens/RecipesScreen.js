// Import components for use
import { View, Image, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
// Import constants for use
import Colors from "../constants/colors";
import RecipesItem from "../components/RecipesItem";
import RecipeView from "../modals/RecipeView";
import { useState } from "react";
import { StyleSheet } from "react-native";

// Function for the Recipes Screen
function RecipesScreen(props) {
  // Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [modalRecipeTitle, setModalRecipeTitle] = useState("");
  const [modalRecipeText, setModalRecipeText] = useState("");

  // Function to show recipe details
  function recipeViewHandler(title, text) {
    setModalRecipeTitle(title);
    setModalRecipeText(text);
    setModalIsVisible(true);
  }

  // Function to close the recipe details
  function closeRecipeViewHandler() {
    setModalIsVisible(false);
  }

  // Render the recipe screen
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
        <Title>My Recipes</Title>
      </View>

      {/* Container for the recipes */}
      <View style={styles.itemContainer}>
        {/* Flatlist to display the recipies */}
        <FlatList
          data={props.currentRecipes}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
          renderItem={(itemData) => {
            return (
              // Displays the recipe items using RecipeItem component
              <RecipesItem
                id={itemData.item.id}
                title={itemData.item.title}
                onView={recipeViewHandler.bind(
                  this,
                  itemData.item.title,
                  itemData.item.text
                )}
                onDelete={props.onDelete.bind(this, itemData.item.id)}
              />
            );
          }}
        />

        {/* Displays the modal for detailed recipe */}
      </View>
      <RecipeView
        visible={modalIsVisible}
        title={modalRecipeTitle}
        text={modalRecipeText}
        onClose={closeRecipeViewHandler}
      />
      {/* NavButton container */}
      <View style={styles.navButtonContainer}>
        {/* Button to add a new recipe */}
        <View style={styles.navButton}>
          <NavButton onNext={props.onAdd}>Add A Recipe</NavButton>
        </View>
        {/* Button to return to main Home Screen */}
        <View style={styles.navButton}>
          <NavButton onNext={props.onHome}>Return To Home</NavButton>
        </View>
      </View>
    </View>
  );
}

// Exports component for use
export default RecipesScreen;

// Stylesheet for RecipeScreen
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "90%",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  itemContainer: {
    flex: 6,
  },
  navButtonContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navButton: {
    marginHorizontal: 5,
  },
});
