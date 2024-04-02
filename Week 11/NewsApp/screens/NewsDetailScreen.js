// Import components
import { Text, StyleSheet, View, Image, ScrollView } from "react-native";
import { useContext, useLayoutEffect, useState } from "react";
import BookmarkButton from "../components/BookmarkButton.js";
// Import dummy-data
import { NEWSARTICLES } from "../data/dummy-data.js";
// Important bookmarkscontext
import { BookmarksContext } from "../store/context/bookmarks-context.js";

// Function for NewsDetailScreen
function NewsDetailScreen(props) {
  const bookmarkedNewsCtx = useContext(BookmarksContext);
  // Extracts newsId from route parameters
  const NewsId = props.route.params.NewsId;
  // Finds selected article by using NewsId
  const selectedArticle = NEWSARTICLES.find((article) => article.id === NewsId);

  // Gets id from Article and adds it to bookmarkedNewsCtx Context id to add/remove
  articleIsBookmarked = bookmarkedNewsCtx.ids.includes(NewsId);

  // Function to handle if bookmark is pressed or not
  function changeBookmarkStatusHandler() {
    // If already bookmarked then remove it
    if (articleIsBookmarked) {
      bookmarkedNewsCtx.removeFavoriteArticle(NewsId);
    } else {
      // if not then adds the article
      bookmarkedNewsCtx.addFavoriteArticle(NewsId);
    }
  }

  // Function to update the icon for the bookmark if pressed
  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: "",
      headerRight: () => {
        return (
          <BookmarkButton
            pressed={articleIsBookmarked}
            onPress={changeBookmarkStatusHandler}
          />
        );
      },
    });
  }, [props.navigation, changeBookmarkStatusHandler]);

  return (
    <View style={styles.rootContainer}>
      <ScrollView>
        {/* Container for displaying image */}
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: selectedArticle.imageUrl }}
          />
        </View>

        {/* Container for displaying news info */}
        <View style={styles.infoContainer}>
          <Text style={styles.headline}>{selectedArticle.headline}</Text>
          <Text style={styles.author}>{selectedArticle.author}</Text>

          {/* Container for displaying row container */}
          <View style={styles.rowContainer}>
            <Text style={styles.rowItem}>{selectedArticle.date}</Text>
            <Text style={styles.rowItem}>{selectedArticle.agency}</Text>
          </View>
          <Text style={styles.description}>{selectedArticle.description}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

// Exports component for use
export default NewsDetailScreen;

// Stylesheet
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  imageContainer: {
    marginVertical: 15,
    height: 200,
    width: "95%",
    alignSelf: "center",
  },
  image: {
    height: "100%",
    resizeMode: "cover",
  },
  infoContainer: {
    alignSelf: "center",
    marginVertical: 5,
    marginBottom: 15,
    paddingHorizontal: 15,
    width: "95%",
    borderWidth: 3,
    borderColor: "white",
  },
  headline: {
    fontSize: 22,
    marginVertical: 15,
    textAlign: "center",
    fontFamily: "roboto",
    color: "white",
  },
  author: {
    fontSize: 18,
    marginVertical: 10,
    textAlign: "center",
    fontFamily: "roboto",
    color: "white",
  },
  rowContainer: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    color: "white",
  },
  rowItem: {
    fontSize: 16,
    fontFamily: "roboto",
    color: "white",
  },
  description: {
    fontSize: 15,
    alignSelf: "center",
    textAlign: "justify",
    marginBottom: 10,
    fontFamily: "roboto",
    color: "white",
  },
});
