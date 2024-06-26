// Import components
import React, { useState } from "react";
import {
  View,
  Text,
  Switch,
  Modal,
  Pressable,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
// Datetimepicker for start date and end date
import DateTimePicker from "@react-native-community/datetimepicker";
// Picker for number of dogs
import { Picker } from "@react-native-picker/picker";
// LinearGradient background import
import { LinearGradient } from "expo-linear-gradient"; // Import LinearGradient
// Import Constants
import colors from "../constants/colors";

// Defines HiringScreen functional component
const HiringScreen = () => {
  // State variables for various aspects of the hiring process
  const [dogWalking, setDogWalking] = useState(false);
  const [dogSitting, setDogSitting] = useState(false);
  const [serviceLength, setServiceLength] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfDogs, setNumberOfDogs] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);

  // Function to handle changes in service length selection
  const handleServiceLength = (value) => {
    setServiceLength(value);
  };

  // Function to handle scheduling button press
  const handleSchedule = () => {
    // Process and handle the scheduling
    setModalVisible(true);
  };

  const { width, height } = useWindowDimensions();

  // Rendering of the component
  return (
    <LinearGradient colors={["#cda1a1", "#fff"]} style={styles.container}>
      <View style={styles.container}>
        {/* Title for selecting service */}
        <Text style={styles.title}>Which service would you like?</Text>
        {/* Switches for selecting dog walking and dog sitting services */}
        <View style={styles.switchContainer}>
          <Text>Dog Walking</Text>
          {/* Switch for dog walking */}
          <Switch
            value={dogWalking}
            onValueChange={setDogWalking}
            trackColor={{ false: "#767577", true: colors.primary2 }} // Use colors.primary2 from colors.js
            thumbColor={dogWalking ? colors.primary1 : "#f4f3f4"} // Use colors.primary1 from colors.js
          />
          <Text>Dog Sitting</Text>
          {/* Switch for dog sitting */}
          <Switch
            value={dogSitting}
            onValueChange={setDogSitting}
            trackColor={{ false: "#767577", true: colors.primary2 }} // Use colors.primary2 from colors.js
            thumbColor={dogSitting ? colors.primary1 : "#f4f3f4"} // Use colors.primary1 from colors.js
          />
        </View>
        {/* Title for selecting service length */}
        <Text style={styles.title}>Choose your Service Length</Text>
        {/* Radio buttons for selecting service length */}
        <View style={styles.radioContainer}>
          <TouchableOpacity
            style={[
              styles.radioButton,
              serviceLength === "A day" && styles.radioButtonSelected,
            ]}
            onPress={() => handleServiceLength("A day")}
          >
            <Text style={styles.radioText}>A day</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.radioButton,
              serviceLength === "A weekend" && styles.radioButtonSelected,
            ]}
            onPress={() => handleServiceLength("A weekend")}
          >
            <Text style={styles.radioText}>A weekend</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.radioButton,
              serviceLength === "A week" && styles.radioButtonSelected,
            ]}
            onPress={() => handleServiceLength("A week")}
          >
            <Text style={styles.radioText}>A week</Text>
          </TouchableOpacity>
        </View>
        {/* Container for selecting start date */}
        <View style={styles.dateContainer}>
          <Text>Start Date:</Text>
          {/* Date picker for selecting start date */}
          <DateTimePicker
            value={startDate}
            mode="date"
            onChange={(event, date) => setStartDate(date)}
          />
        </View>
        {/* Container for selecting end date */}
        <View style={styles.dateContainer}>
          <Text>End Date:</Text>
          {/* Date picker for selecting end date */}
          <DateTimePicker
            value={endDate}
            mode="date"
            onChange={(event, date) => setEndDate(date)}
          />
        </View>

        {/* Container for selecting number of dogs */}
        <View style={styles.pickerContainer}>
          <Text style={styles.title}>Select the Number of dogs</Text>
          {/* Picker for selecting number of dogs */}
          <Picker
            selectedValue={numberOfDogs}
            onValueChange={(itemValue) => setNumberOfDogs(itemValue)}
            style={styles.picker}
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <Picker.Item key={num} label={num.toString()} value={num} />
            ))}
          </Picker>
        </View>

        {/* Button to schedule the service */}
        <Pressable style={styles.button} onPress={handleSchedule}>
          <Text style={styles.buttonText}>Schedule Now</Text>
        </Pressable>

        {/* Modal for displaying order confirmation */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Order Confirmation:</Text>
              {/* Display selected options */}
              <Text>
                Service: {dogWalking ? "Dog Walking" : ""}{" "}
                {dogSitting ? "Dog Sitting" : ""}
              </Text>
              <Text>Service Length: {serviceLength}</Text>
              <Text>Start Date: {startDate.toDateString()}</Text>
              <Text>End Date: {endDate.toDateString()}</Text>
              <Text>Number of Dogs: {numberOfDogs}</Text>
              {/* Button to close the modal */}
              <Pressable
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </LinearGradient>
  );
};

// stylesheet for hiringscreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    fontFamily: "TypoGraphica",
  },
  switchContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 20,
  },
  radioContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  radioButton: {
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.accent4, // Use colors.accent4 from colors.js
  },
  radioButtonSelected: {
    backgroundColor: colors.accent4, // Use colors.accent4 from colors.js
  },
  radioText: {
    fontSize: 16,
    color: colors.accent2,
    fontFamily: "RobotoRegular",
  },
  dateContainer: {
    marginBottom: 20,
  },
  pickerContainer: {
    // position: 'relative',
    marginBottom: 10,
    alignItems: "center",
  },
  picker: {
    width: 200,
    height: 60,
    marginTop: -40,
  },
  button: {
    backgroundColor: colors.accent4, // Use colors.accent4 from colors.js
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginVertical: 160,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    fontFamily: "TypoGraphica",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    fontFamily: "RobotoRegular",
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 10,
    fontFamily: "TypoGraphica",
  },
  closeButton: {
    backgroundColor: colors.accent4, // Use colors.accent4 from colors.js
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 20,
  },
  closeButtonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    fontFamily: "TypoGraphica",
  },
});

// export component for use in app
export default HiringScreen;
