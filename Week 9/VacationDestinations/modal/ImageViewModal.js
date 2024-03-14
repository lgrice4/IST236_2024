// Import components for use
import { Modal, View, Button, Image, StyleSheet, Text } from "react-native";
// Import constants for use
import Colors from "../constants/colors";

// Component for displaying an image & description in a modal
function ImageViewModal(props) {
  return (
    // Renders the container for modal content
    <View style={styles.container}>
      <Modal
        visible={props.isVisible}
        animationType="slide"
        transparent={false}
      >
        {/* Container for the modal content */}
        <View style={styles.modalContainer}>
          {/*Container for image passed via props */}
          <Image style={styles.image} source={{ uri: props.countryURL }} />
          {/* Container for description of the image */}
          <Text style={styles.description}>{props.description}</Text>
          {/* Container for return button */}
          <View style={styles.buttonContainer}>
            {/* Button to close the modal & return to main */}
            <Button title="Return" onPress={props.onClose} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

// Exports component for use
export default ImageViewModal;

// Stylesheet for the modal
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.accent500,
  },
  image: {
    flex: 2,
    width: "100%",
    height: "90%",
    resizeMode: "contain",
    paddingBottom: 10,
  },
  description: {
    flex: 1,
    fontFamily: "primaryFont",
    fontSize: 20,
    paddingHorizontal: 18,
    textAlign: "justify",
  },
  buttonContainer: {
    flex: 1,
    paddingTop: 10,
  },
});
