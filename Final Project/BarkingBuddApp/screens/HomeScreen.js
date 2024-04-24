// Import components
import React, { useState } from "react";
import {
  View,
  FlatList,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  useOrientation,
} from "react-native";
// Import the guide items data
import GuideItems from "../components/GuideItems";
// Import Constants
import colors from "../constants/colors";

// Functional component for the homescreen
const HomeScreen = () => {
  // Initialize state with the guide items
  const [guides, setGuides] = useState(GuideItems);
  // render Homescreen with GuideItem flatlist for information
  const renderGuideItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={[styles.title, { fontFamily: "TypoGraphica" }]}>
          {item.title}
        </Text>
        <Text style={{ fontFamily: "RobotoRegular" }}>{item.description}</Text>
      </View>
    </View>
  );

  const { width, height } = useWindowDimensions();

  // Flatlist for housing information - title, image, description / text
  return (
    <View style={styles.container}>
      <FlatList
        data={guides}
        renderItem={renderGuideItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

// stylesheet for HomeScreen
const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.accent1, // Use colors.accent1 from colors.js
    backgroundColor: colors.primary1, // Use colors.primary1 from colors.js
    height: 200,
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: "cover",
    marginRight: 20,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1, // Takes up remaining space
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: colors.primary3, // Use colors.primary3 from colors.js
  },
});

// export component for use in app
export default HomeScreen;
