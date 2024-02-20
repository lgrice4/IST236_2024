// Import components for use
import { View, Text, Modal } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NavButton from "../components/NavButton";
// Import constants for use
import Colors from "../constants/colors";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native";

// Function for the RecipesView modal
function RecipeView(props) {
  // Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

  return (
    <Modal visible={props.visible} animationType="slide">
      <View
        style={[
          styles.rootContainer,
          {
            // Apply safe area insets for padding
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          },
        ]}
      >
        {/* Container for the recipe title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{props.title}</Text>
        </View>

        {/* Container for the recipe text */}
        <ScrollView style={styles.textContainer}>
          <Text style={styles.text}>{props.text}</Text>
        </ScrollView>

        {/* Navbutton container */}
        <View style={styles.navButtonContainer}>
          <NavButton onNext={props.onClose}>Return to Recipes</NavButton>
        </View>
      </View>
    </Modal>
  );
}

// Exports component for use
export default RecipeView;

// Stylesheet for RecipeView modal
styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.accent800,
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    fontFamily: "paperNotes",
    color: Colors.primary300,
  },
  textContainer: {
    // flex: 2,
    width: "95%",
    borderWidth: 3,
    borderColor: Colors.primary500,
    backgroundColor: Colors.primary800,
    padding: 15,
  },
  text: {
    color: Colors.primary300,
    fontSize: 25,
    fontFamily: "paperNotes",
  },
  navButtonContainer: {
    marginTop: 20,
    flex: 1,
  },
});
