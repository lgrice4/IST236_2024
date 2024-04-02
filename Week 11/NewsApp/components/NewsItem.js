// Import components
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
// Import Constants
import Colors from "../constants/Colors";

// Creates NewsItem
function NewsItem(props) {
  const navigation = useNavigation();

  // Function for article click
  function selectedNewsHandler() {
    navigation.navigate("NewsDetail", {
      NewsId: props.id,
    });
  }

  return (
    <View style={styles.itemContainer}>
      <Pressable onPress={selectedNewsHandler}>
        {/* Container for displaying image */}
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
        </View>
        {/* Container for displaying news info */}
        <View style={styles.infoContainer}>
          {/* Displays headline & date of publishing of article */}
          <Text style={styles.headline}>{props.headline}</Text>
          <Text style={styles.articleReleased}>{props.date}</Text>
        </View>
      </Pressable>
    </View>
  );
}

// Export component for use
export default NewsItem;

// Stylesheet
const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    marginBottom: 20,
    borderRadius: 7,
    borderWidth: 5,
    borderRadius: 4,
    borderColor: Colors.secondary500,
    backgroundColor: Colors.primary500,
  },
  button: {
    flex: 1,
  },
  imageContainer: {
    height: 200,
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 7,
  },
  infoContainer: {
    flex: 1,
    alignItems: "center",
  },
  headline: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "roboto",
    paddingBottom: 20,
    color: Colors.secondary800,
  },
  articleReleased: {
    fontSize: 18,
    fontFamily: "roboto",
    color: Colors.secondary800,
  },
});
