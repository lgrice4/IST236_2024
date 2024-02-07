//  Import components to be utilized
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, FlatList } from "react-native";
// Import custom components to be utilized
import MovieItem from "./components/MovieItem";

// Define main App component
export default function App() {
  // useState hook for managing the list
  const [movieItems, setMovieItems] = useState([
    {
      name: "Paris, Texas",
      image: require("./assets/images/paris_texas.jpg"),
      rating: "#1",
    },
    {
      name: "My Dinner with Andre",
      image: require("./assets/images/my_dinner_with_andre.jpg"),
      rating: "#2",
    },
    {
      name: "Drugstore Cowboy",
      image: require("./assets/images/drugstore_cowboy.jpg"),
      rating: "#3",
    },
    {
      name: "Blue Velvet",
      image: require("./assets/images/blue_velvet.jpg"),
      rating: "#4",
    },
    {
      name: "Léon: The Professional",
      image: require("./assets/images/leon_the_professional.jpg"),
      rating: "#5",
    },
    {
      name: "A Woman Under\n the Influence",
      image: require("./assets/images/a_woman_under_the_influence.jpg"),
      rating: "#6",
    },
    {
      name: "Twin Peaks:\n Fire Walk With Me",
      image: require("./assets/images/twin_peaks_fire_walk_with_me.jpg"),
      rating: "#7",
    },
    {
      name: "Funny Face",
      image: require("./assets/images/funny_face.jpg"),
      rating: "#8",
    },
    {
      name: "In the Mood for Love",
      image: require("./assets/images/in_the_mood_for_love.jpg"),
      rating: "#9",
    },
    {
      name: "Rear Window",
      image: require("./assets/images/rear_window.jpg"),
      rating: "#10",
    },
  ]);

  // The app's user interface
  return (
    <>
      {/* Main Page starts here*/}
      {/* Adjusts the status bar for visibility sake */}
      <StatusBar style="light" />
      {/* Safe area view for container of main page */}
      <SafeAreaView style={styles.rootContainer}>
        {/* Container for the the title */}
        <View style={styles.titleContainer}>
          {/* Text for the app title */}
          <Text style={styles.title}>Top 10 Movies</Text>
        </View>

        <View style={styles.listContainer}>
          {/* Creates the Flat List to hold the movies */}
          <FlatList
            showsVerticalScrollIndicator={false}
            // movieItems Data source for the list input
            data={movieItems}
            renderItem={({ item }) => (
              // MovieItem component to set up the app page ft: title, image, & rating
              <MovieItem
                name={item.name}
                image={item.image}
                rating={item.rating}
              />
            )}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

// App Stylesheet begins here
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 35,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff",
  },
  listContainer: {
    flex: 8,
    width: "95%",
  },
});
