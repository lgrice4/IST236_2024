// Import components for use
import { useState } from "react";
import { Pressable, View, Text, Image, StyleSheet } from "react-native";
// Import constants for use
import Colors from "../constants/colors.js";
import ImageViewModal from "../modal/ImageViewModal.js";

// Component for rendering destination items
function VacationDestinationItem(props) {
  // State to control modal visibility
  const [modalIsVisible, setModalIsVisible] = useState(false);

  // Handler function to show modal
  function viewImageHandler() {
    setModalIsVisible(true);
  }

  // Handler to close modal
  function closeImageHandler() {
    setModalIsVisible(false);
  }

  // Component render logic
  return (
    // Container for the destination item
    <View
      style={[
        styles.itemContainer,
        { backgroundColor: props.listIndex % 2 == 0 ? "#ccc" : "#fff" },
      ]}
    >
      {/* Pressable area to trigger modal */}
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: Colors.primary300 }}
        onPress={viewImageHandler}
      >
        {/* Container for the content ft. image & information */}
        <View style={styles.rowContainer}>
          <Image style={styles.image} source={{ uri: props.countryURL }} />
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{props.name}</Text>
            <View style={styles.innerRowContainer}>
              <Text style={styles.costs}>Average: {props.avgCost}</Text>
              <Text style={styles.year}>Founded: {props.foundedYear}</Text>
            </View>
            <Text style={styles.rating}>Rating: {props.rating} / 5</Text>
          </View>
        </View>
      </Pressable>

      {/* Modal component for image */}
      <ImageViewModal
        isVisible={modalIsVisible}
        countryURL={props.countryURL}
        description={props.description}
        onClose={closeImageHandler}
      />
    </View>
  );
}

// Exports the component for use
export default VacationDestinationItem;

// Stylesheet for the component
const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#CCC",
    paddingHorizontal: 10,
    paddingTop: 5,
    marginBottom: 5,
    borderRadius: 15,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  rowContainer: {
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  image: {
    width: "25%",
    height: "100%",
    resizeMode: "contain",
    borderRadius: 15,
  },
  infoContainer: {
    width: "75%",
    paddingLeft: 20,
  },
  name: {
    fontWeight: "bold",
    textAlign: "left",
    fontSize: 20,
  },
  costs: {
    width: "85%",
    fontSize: 15,
  },
  year: {
    fontSize: 14,
  },
  innerRowContainer: {
    flexDirection: "row",
    alignItems: "left",
    justifyContent: "justify",
    marginRight: 25,
    paddingRight: 85,
  },
  rating: {
    fontSize: 15,
  },
});
