// Import components
import { Text, StyleSheet, View } from "react-native";
// Import dummy-data
import { NEWSARTICLES } from "../data/dummy-data";
// Import News listitem component
import NewsList from "../components/NewsList";

// Function for WorldNewsScreen
function WorldNewsScreen(props) {
  // Sets type of content to show (world, news, tavel, etc)
  const type = "WORLD";

  // Takes info from dummy-data & filters for matched type
  const displayedArticles = NEWSARTICLES.filter((newsItem) => {
    return newsItem.type === type;
  });

  // Shows list of filtered items to display
  return <NewsList items={displayedArticles} />;
}

// Export component for use
export default WorldNewsScreen;
