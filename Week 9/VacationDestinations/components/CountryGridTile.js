// Import components for use
import { LinearGradient } from "expo-linear-gradient";
import {
  Pressable,
  View,
  StyleSheet,
  Platform,
  Text,
  ImageBackground,
} from "react-native";
// Import constants for use
import Colors from "../constants/colors";

// Defines component to display each country as a grid tile
function CountryGridTile(props) {
  return (
    // Main container for each grid item
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: Colors.primary300 }}
        onPress={props.onPress}
      >
        {/* BG image for the grid tile */}
        <ImageBackground
          source={{ uri: props.countryURL }}
          resizeMode="cover"
          style={styles.imageBackground}
        >
          {/* LinearGradient for a fading effect */}
          <LinearGradient
            colors={[
              Colors.accent300o75,
              "rgba(0, 0, 0, 0.18)",
              "rgba(39, 39, 39, 0.42)",
              "rgba(0, 0, 0, 0.18)",
              Colors.accent300o75,
            ]}
            style={styles.innerContainer}
          >
            {/* Displays the country name */}
            <Text style={[styles.name, { color: props.color }]}>
              {props.name}
            </Text>
          </LinearGradient>
        </ImageBackground>
      </Pressable>
    </View>
  );
}

// Exports the component for use
export default CountryGridTile;

// Stylesheet for the component
const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "white",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 20,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  imageBackground: {
    flex: 1,
  },
  name: {
    textAlign: "center",
    fontSize: 25,
    fontFamily: "primaryFont",
  },
});
