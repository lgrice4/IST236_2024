// Import components
import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
// Import bookmark context
import { BookmarksContext } from "../store/context/bookmarks-context.js";
// Import dummy-data
import { NEWSARTICLES } from "../data/dummy-data.js";
// Import News listitem component
import NewsList from "../components/NewsList.js";

// Function for BookmarksScreen
function BookmarksScreen(props) {
  // Pulls the Context from BookmarkContext
  const bookmarkedNewsCtx = useContext(BookmarksContext);
  // Looks for bookmarked articles
  const bookmarkedArticles = NEWSARTICLES.filter((articleItem) => {
    return bookmarkedNewsCtx.ids.includes(articleItem.id);
  });

  // If none saved, give message telling so
  if (bookmarkedArticles.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You Have No News Articles Saved!</Text>
      </View>
    );
  }

  // Shows articles if they are saved
  return <NewsList items={bookmarkedArticles} />;
}

// Exports component for use
export default BookmarksScreen;

// Stylesheet
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    textAlign: "center",
    color: "white",
    fontFamily: "roboto",
  },
});
