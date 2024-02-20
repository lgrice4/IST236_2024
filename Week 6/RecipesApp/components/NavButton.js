// Import components for use
import { Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
// Import constants for use
import Colors from "../constants/colors";

// Function for NavButton
function NavButton(props) {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressedItem}
      onPress={props.onNext}
    >
      {/* Button container */}
      <View style={styles.buttonContainer}>
        {/* Container for text */}
        <View style={styles.textContainer}>
          <Text style={styles.text}>{props.children}</Text>
        </View>
      </View>
    </Pressable>
  );
}

// Export component for use
export default NavButton;

// Styles for the NavButton
const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 8,
    borderColor: Colors.accent500,
    borderRadius: 100,
    backgroundColor: Colors.accent500,
    width: "100%",
    paddingHorizontal: 3,
  },
  textContainer: {},
  text: {
    padding: 8,
    fontSize: 20,
    textAlign: "center",
    color: "white",
  },
});
