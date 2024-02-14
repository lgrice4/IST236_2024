// Import components for use
import { View, StyleSheet, Text, Image, Linking } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
// Import constants for use
import Colors from "../constants/colors";

// Function for the Main Screen
function HomeScreen(props) {
  // Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

  // Design to ensure content is within the safearea of the screen
  return (
    <View
      style={[
        styles.rootContainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      {/* Title container for the restaurant's name */}
      <View style={styles.titleContainer}>
        <Title>EL AGAVE</Title>
      </View>

      {/* Image container with a restaurant image */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/el-agave.jpg")}
        />
      </View>

      {/* Info container for clickable information with links */}
      <View style={styles.infoContainer}>
        <Text
          style={styles.infoText}
          onPress={() => Linking.openURL("tel:843-472-5268")}
        >
          (843) 472-5268
        </Text>
        <Text
          style={styles.infoText}
          onPress={() =>
            Linking.openURL("https://maps.app.goo.gl/ckdPix4Ugu5p4C7p8")
          }
        >
          147 W Evans St,{"\n"} Florence, SC 29501
        </Text>
        <Text
          style={styles.infoText}
          onPress={() =>
            Linking.openURL("https://elagavemexicanrestaurant.org/")
          }
        >
          Visit Our Website
        </Text>
      </View>

      {/* Button container for NavButton component to move to the menu screen */}
      <View style={styles.buttonContainer}>
        <NavButton onPress={props.onNext}>View Our Menu</NavButton>
      </View>
    </View>
  );
}

// Exports component for use
export default HomeScreen;

// Style sheet for the home screen
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  imageContainer: {
    flex: 3,
  },
  image: {
    resizeMode: "cover",
    height: "100%",
    width: 400,
  },
  infoContainer: {
    flex: 2,
    justifyContent: "center",
  },
  infoText: {
    fontSize: 35,
    textAlign: "center",
    padding: 10,
    color: Colors.primary500,
    fontFamily: "digitalt",
  },
  buttonContainer: {
    flex: 1,
  },
});
