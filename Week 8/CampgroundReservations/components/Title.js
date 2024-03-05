// Import components for use
import { Text, StyleSheet, useWindowDimensions } from "react-native";
// Import constants for use
import Colors from "../constants/Colors";

// Function for the title
function Title(props) {
  // Finds the window dimensions
  const { width, height } = useWindowDimensions();
  // Shows the Title Text
  return (
    <Text style={[styles.title, { fontSize: width * 0.15 }]}>
      {props.children}
    </Text>
  );
}

// Exports component for use
export default Title;

// Stylesheet for the Title component
const styles = StyleSheet.create({
  title: {
    fontFamily: "primaryBold",
    color: Colors.primary500,
    textAlign: "center",
  },
});