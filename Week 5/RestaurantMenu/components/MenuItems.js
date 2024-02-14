// Import components for use
import { View, Text, StyleSheet, Image } from "react-native";
// Import constants for use
import Colors from "../constants/colors";

// Function for MenuItem
function MenuItem(props) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{props.name}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={props.image} />
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{props.price}</Text>
      </View>
    </View>
  );
}

// Exports component for use
export default MenuItem;

// Style sheet for menu items
const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 30,
  },
  titleContainer: {
    backgroundColor: Colors.accent300,
    padding: 6,
    borderWidth: 2,
    borderColor: "white",
  },
  title: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
    fontFamily: "digitalt",
  },
  imageContainer: {
    alignItems: "center",
    borderWidth: 2,
    borderColor: "white",
  },
  image: {
    width: "100%",
    height: 350,
    resizeMode: "cover",
  },
  priceContainer: {
    backgroundColor: Colors.accent300,
    padding: 6,
    borderWidth: 2,
    borderColor: "white",
  },
  price: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
    fontFamily: "digitalt",
  },
});
