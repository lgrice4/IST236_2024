// Import components for use
import { Pressable, View, Text, StyleSheet, useWindowDimensions } from "react-native";
// Import constants for use
import Colors from "../constants/Colors";

// Function for NavButton
function NavButton(props) {
  // Finds the window dimensions
  const { width, height } = useWindowDimensions();

  // If portrait base size on screen width
  let size = width * 0.08;
  // If landscape base size on screen height
  if (width > height) {
    size = height * 0.2;
  }

  return (
    // Declare Button as a Pressable and set style
    <Pressable
      onPress={props.onPress}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      {/* Set View as buttonContainer */}
      <View style={[styles.buttonContainer, {width: width * 0.8}]}>
        {/* Set View as textContainer */}
        <View style={styles.textContainer}>
          {/* Show Text for button */}
          <Text style={[styles.text, {fontSize: size}]}>{props.children}</Text>
        </View>
      </View>
    </Pressable>
  );
}

// Export component for use
export default NavButton;

// Styles for the nav button
const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.secondary500,
    borderColor:Colors.accent300,
    borderWidth: 3,
    borderRadius: 100,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  pressedItem: {
    opacity: 0.8,
  },
  textContainer: {},
  text: {
    padding: 10,
    fontFamily: "primaryBold",
    textAlign: "center",
    color: Colors.primary500,
  },
});