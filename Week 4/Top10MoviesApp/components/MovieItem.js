//  Import components to be utilized
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

// MovieItem component used to display title, image, and rating for each movie
const MovieItem = React.memo(function MovieItem(props) {
  // Movie item container
  return (
    <View style={styles.itemContainer}>
      {/* Movie title container */}
      <View style={styles.titleContainer}>
        {/*  Movie title text */}
        <Text style={styles.itemTitle}>{props.name}</Text>
      </View>
      {/* Movie image container */}
      <View style={styles.imageContainer}>
        {/* Movie image */}
        <Image style={styles.itemImage} source={props.image} />
      </View>
      {/* Movie rating container */}
      <View style={styles.ratingContainer}>
        {/* Movie rating text */}
        <Text style={styles.itemRating}>{props.rating}</Text>
      </View>
    </View>
  );
});

// Exports MovieItem component
export default React.memo(MovieItem);

// Stylesheet for MovieItem begins here
const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 20,
  },
  titleContainer: {
    backgroundColor: "#e03f00",
    borderWidth: 2,
    borderRadius: 2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  itemTitle: {
    fontSize: 25,
    fontStyle: "italic",
    fontWeight: "bold",
    textAlign: "center",
    color: "#ffffff",
  },
  imageContainer: {
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 2,
  },
  itemImage: {
    width: "100%",
    height: 600,
    resizeMode: "cover",
  },
  ratingContainer: {
    backgroundColor: "#e03f00",
    borderWidth: 2,
    borderRadius: 2,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  itemRating: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ffffff",
  },
});
