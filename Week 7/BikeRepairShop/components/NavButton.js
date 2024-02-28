// Import components for use
import { Pressable, View, Text, StyleSheet } from "react-native";
// Import constants for use
import Colors from "../constants/colors";

// Function for NavButton
function NavButton(props) {
  return (
    <Pressable
      android_ripple={{ color: Colors.primary800, foreground: true }}
      onPress={props.onPress}
      // style={({ pressed }) => pressed && styles.pressedItem}
      style={styles.buttonContainer}
    >
      <View style={styles.textContainer}>
        <Text style={styles.text}>{props.children}</Text>
        {/* </View> */}
      </View>
    </Pressable>
  );
}

// Export component for use
export default NavButton;

// Styles for the nav buttons
const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary500,
    borderRadius: 300,
    width: 300,
    marginHorizontal: 10,
    marginVertical: 10,
    overflow: "hidden",
  },
  text: {
    padding: 20,
    fontSize: 25,
    textAlign: "center",
    color: Colors.accent300,
    fontFamily: "evogria",
  },
});
