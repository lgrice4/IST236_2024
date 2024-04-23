// Import dummy-data
import { NEWSARTICLES } from "../data/dummy-data";
// Import News listitem component
import NewsList from "../components/NewsList";

// Function for TravelNewsScreen
function TravelNewsScreen(props) {
  // Sets type of content to show (world, news, tavel, etc)
  const type = "TRAVEL";

  // Takes info from dummy-data & filters for matched type
  const displayedArticles = NEWSARTICLES.filter((newsItem) => {
    return newsItem.type === type;
  });

  // Shows list of filtered items to display
  return <NewsList items={displayedArticles} />;
}

// Export component for use
export default TravelNewsScreen;