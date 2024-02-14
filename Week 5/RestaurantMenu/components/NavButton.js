// Import components for use
import { Pressable, View, Text, StyleSheet } from "react-native";
// Import constants for use
import Colors from "../constants/colors";

// Function for the NavButton
function NavButton(props) {
  return (
    <Pressable
      android_ripple={{ color: "grey", foreground: true }}
      onPress={props.onPress}
      style={styles.buttonContainer}
    >
      <View style={styles.textContainer}>
        <Text style={styles.text}>{props.children}</Text>
      </View>
    </Pressable>
  );
}

// Exports component for use
export default NavButton;

// Style sheet for nav buttons
const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: Colors.primary500,
    backgroundColor: Colors.accent800,
    width: 250,
    margin: 5,
    overflow: "hidden",
  },
  textContainer: {},
  text: {
    padding: 10,
    fontSize: 25,
    textAlign: "center",
    color: Colors.primary500,
    fontFamily: "digitalt",
  },
});
