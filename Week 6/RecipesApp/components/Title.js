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

// Stylesheet for the Title component
const styles = StyleSheet.create({
  title: {
    alignItems: "center",
    fontSize: 50,
    paddingHorizontal: 10,
    color: Colors.primary300,
    textShadowColor: Colors.primaryDark,
    textShadowRadius: 10,
    textAlign: "center",
    justifyContent: "center",
    fontFamily: "paperNotes",
  },
});
