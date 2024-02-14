// Import components for use
import { Text, StyleSheet } from "react-native";
// Import constants for use
import Colors from "../constants/colors";

// Function for the title
function Title(props) {
  return <Text style={styles.title}>{props.children}</Text>;
}

// Exports component for use
export default Title;

// Style sheet
const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    textAlign: "center",
    color: Colors.primary500,
    fontFamily: "digitalt",
  },
});
