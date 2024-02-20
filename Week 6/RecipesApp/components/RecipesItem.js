// Import components for use
import { View, Text, Button } from "react-native";
import { StyleSheet } from "react-native";
// Import constants for use
import Colors from "../constants/colors";

// Function for RecipesItem
function RecipesItem(props) {
  return (
    <View style={styles.item}>
      {/* Title container for recipe item */}
      <View style={styles.itemTitleContainer}>
        <Text style={styles.itemTitle}>{props.title}</Text>
      </View>

      {/* Button container for recipe item */}
      <View style={styles.itemButtonsContainer}>
        <View style={styles.button}>
          {/* View button to View recipe */}
          <Button title="View" onPress={props.onView} />
        </View>

        {/* Delete button to delete recipe */}
        <View style={styles.button}>
          <Button title="Delete" onPress={props.onDelete} />
        </View>
      </View>
    </View>
  );
}

// Export component for use
export default RecipesItem;

// Styles for the RecipesItem
const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 3,
    borderRadius: 10,
    backgroundColor: Colors.accent500,
  },
  itemTitleContainer: {
    justifyContent: "center",
  },
  itemTitle: {
    fontFamily: "paperNotes",
    fontSize: 20,
    color: Colors.primary300,
    padding: 8,
  },
  itemButtonsContainer: {
    flexDirection: "row",
    padding: 5,
  },
  button: {
    marginVertical: 20,
    marginHorizontal: 3,
    backgroundColor: "#000000",
  },
});
