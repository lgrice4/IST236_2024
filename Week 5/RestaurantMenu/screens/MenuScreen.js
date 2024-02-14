// Import components for use
import { View, StyleSheet, Text, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import NavButton from "../components/NavButton";
import Title from "../components/Title";
import MenuItem from "../components/MenuItems";

// Function for the Menu Screen
function MenuScreen(props) {
  // Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

  // State to house the list of items ft. name, image, & price
  const [menuItems, setMenuItems] = useState([
    {
      name: "La Paz Special",
      image: require("../assets/images/menu-items/la-paz-special.jpg"),
      price: "$14.75",
      id: 1,
    },
    {
      name: "Fish Tacos",
      image: require("../assets/images/menu-items/fish-tacos.jpg"),
      price: "$10.99",
      id: 2,
    },
    {
      name: "California Burrito",
      image: require("../assets/images/menu-items/california-burrito.jpg"),
      price: "$11.25",
      id: 3,
    },
    {
      name: "Bisteces a la Mexicana",
      image: require("../assets/images/menu-items/bisteces-a-la-mexicana.jpg"),
      price: "$13.25",
      id: 4,
    },
    {
      name: "Shrimp Taco Salad",
      image: require("../assets/images/menu-items/shrimp-taco-salad.jpg"),
      price: "$12.50",
      id: 5,
    },
  ]);

  // Design to ensure content is within the safearea of the screen
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
      {/* Title container for the menu screen */}
      <View style={styles.titleContainer}>
        <Title style={styles.title}>Our Menu</Title>
      </View>

      {/* Container for the list of items.*/}
      <View style={styles.listContainer}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.id}
          overScrollMode="never"
          showsVerticalScrollIndicator={false}
          renderItem={(itemData) => {
            return (
              <MenuItem
                name={itemData.item.name}
                image={itemData.item.image}
                price={itemData.item.price}
              />
            );
          }}
        />
      </View>

      {/* Nav button to go to the home screen */}
      <View style={styles.buttonContainer}>
        <NavButton onPress={props.onNext}>Home</NavButton>
      </View>
    </View>
  );
}

// Exports component for use
export default MenuScreen;

// Style sheet for the menu screen
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  listContainer: {
    flex: 7,
    width: "95%",
  },
  buttonContainer: {
    flex: 1,
    marginTop: 20,
  },
});
