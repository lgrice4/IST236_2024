// Import Components
import { createContext, useState } from "react";

// Create Context to pass items between files
export const BookmarksContext = createContext({
  ids: [],
  addFavoriteArticle: (id) => {},
  removeFavoriteArticle: (id) => {},
});

// Function for holding  add/remove functions for bookmarks
function BookmarkContextProvider({ children }) {
  // Creates useState for bookmarked items
  const [bookmarkedIds, setBookmarksIds] = useState([]);

  // Function for adding articles to the bookmarks screen
  function addFavoriteArticle(id) {
    // Adds in article based on Id
    setBookmarksIds((currentBookmarkedIds) => {
      return [...currentBookmarkedIds, id];
    });
  }

  // Function for removing articles from the bookmarks screen
  function removeFavoriteArticle(id) {
    // Removes article based on Id
    setBookmarksIds((currentBookmarkedIds) => {
      return currentBookmarkedIds.filter((bookId) => bookId != id);
    });
  }

  // Creates value object for holding Ids + add/removed articles
  const value = {
    ids: bookmarkedIds,
    addFavoriteArticle: addFavoriteArticle,
    removeFavoriteArticle: removeFavoriteArticle,
  };

  // Shows saved articles on screen
  return (
    <BookmarksContext.Provider value={value}>
      {children}
    </BookmarksContext.Provider>
  );
}

// Export component for use
export default BookmarkContextProvider;
