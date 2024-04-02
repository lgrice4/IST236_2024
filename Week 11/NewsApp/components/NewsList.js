// Import components
import { View, StyleSheet, FlatList } from "react-native";
import NewsItem from "./NewsItem";
// Import Constants
import { Colors } from "react-native/Libraries/NewAppScreen";

// Creates & renders NewsList
function NewsList(props) {
  function renderNewsItem(itemData) {
    const newsItemProps = {
      id: itemData.item.id,
      type: itemData.item.type,
      headline: itemData.item.headline,
      date: itemData.item.date,
      author: itemData.item.author,
      agency: itemData.item.agency,
      description: itemData.item.description,
      imageUrl: itemData.item.imageUrl,
    };
    return <NewsItem {...newsItemProps} />;
  }

  return (
    <View style={styles.container}>
      {/* Creates FlatList for housing news info */}
      <FlatList
        data={props.items}
        keyExtractor={(item) => item.id}
        renderItem={renderNewsItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

// Export component for use
export default NewsList;

// Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  backgroundImage: {
    opacity: 0.1,
  },
});
