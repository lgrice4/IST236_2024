// Import components for use
import { View, Image, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
// Import constants for use
import Colors from "../constants/colors";

// Function for the main Home Screen
function HomeScreen(props) {
  // Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

  // Render the home screen
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
        <Title>My Recipe Saver</Title>
      </View>
      {/* Image container with recipe stock image */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/recipes.jpg")}
          style={styles.image}
        />
      </View>
      {/* NavButton container for moving pages */}
      <View style={styles.navButtonContainer}>
        <NavButton onNext={props.onNext}>View The Recipes</NavButton>
      </View>
    </View>
  );
}

// Exports component for use
export default HomeScreen;

// Stylesheet for the home screen
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "95%",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  imageContainer: {
    flex: 2,
    justifyContent: "center",
    borderWidth: 5,
    borderStyle: "dotted",
    borderColor: Colors.accent500,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "stretch",
  },
  navButtonContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
