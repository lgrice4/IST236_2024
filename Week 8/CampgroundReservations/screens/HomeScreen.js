// Import components for use
import {
  Text,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
  Pressable,
  Platform,
  Modal,
  Button,
  useWindowDimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import DateTimePicker from "@react-native-community/datetimepicker";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import { useState } from "react";
import WheelPicker from "react-native-wheely";
// Import constants for use
import Colors from "../constants/Colors";

// Function for the the HomeScreen
function HomeScreen() {
  // Set SafeArea screen boundaries
  const insets = useSafeAreaInsets();

  // State variables --
  // Sets variables for the check in & check out date
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());

  // Sets variables for the check in & check out date picker screen
  const [showCheckIn, setShowCheckIn] = useState(false);
  const [showCheckOut, setShowCheckOut] = useState(false);

  // Function to show check in date picker
  function showCheckInPicker() {
    setShowCheckIn(true);
  }
  // Function to hide check in date picker
  function hideCheckInPicker() {
    setShowCheckIn(false);
  }

  // Check in --
  // Function that allows user to pick a date then updates on screen
  function onChangeCheckIn(event, selectedDate) {
    const currentDate = selectedDate;
    // Checks to see if device is an android
    if (Platform.OS === "android") {
      // If yes hides the date picker
      hideCheckInPicker(true);
    }
    // Changes the date to match chosen
    setCheckIn(currentDate);
  }

 // Check out --
  // Function that shows check out date picker
  function showCheckOutPicker() {
    setShowCheckOut(true);
  }
  // Function that hides check out date picker
  function hideCheckOutPicker() {
    setShowCheckOut(false);
  }
  // Function that allows user to pick a date and updates on screen
  function onChangeCheckOut(event, selectedDate) {
    const currentDate = selectedDate;
    // Checks to see if device is an android
    if (Platform.OS === "android") {
      // If yes hides the date picker
      hideCheckOutPicker(true);
    }
    // Changes the date to match chosen
    setCheckOut(currentDate);
  }

  
  // Number of guests and campsites --
  // Creates an array for number of guests up to 15
  const guestCounts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  // Creates an array for number of campsites up to 5
  const campsiteCounts = [1, 2, 3, 4, 5];

  // Sets the variable for number of guests 
  const [numGuests, setNumGuests] = useState(0);
  // Sets the variable to show guests wheel picker
  const [showNumGuests, setShowNumGuests] = useState(false);

  // Sets the variable for the number of campsites
  const [numCampSites, setCampSites] = useState(0);
  // Sets the variable to show the campsites wheel picker
  const [showNumCampSites, setShowNumCampSites] = useState(false);

  // Function that shows the guests wheel picker
  function showNumGuestsPicker() {
    setShowNumGuests(true);
  }
  // Function that hides the guests wheel picker
  function hideNumGuestsPicker() {
    setShowNumGuests(false);
  }
  // Function that changes the number of guests to match chosen on screen
  function onChangeNumGuests(index) {
    setNumGuests(index);
  }

  // Function that shows the campsites wheel picker
  function showNumCampsitesPicker() {
    setShowNumCampSites(true);
  }
  // Function that hides the number of campsites wheel picker
  function hideNumCampsitesPicker() {
    setShowNumCampSites(false);
  }
  // Function that changes the number of campsites to match chosen on screen
  function onChangeNumCampsites(index) {
    setCampSites(index);
  }

  // Creates state variable to hold the chosen results
  const [results, setResults] = useState("");

  // Function that takes all the values from above & outputs them to the screen
  function onReserveHandler() {
    let res = `Check In:\t\t${checkIn.toDateString()}\n`;
    res = res + `Check Out:\t\t${checkOut.toDateString()}\n`;
    res = res + `Number of Guests:\t\t${guestCounts[numGuests]}\n`;
    res = res + `Number of Campsites:\t\t${campsiteCounts[numCampSites]}\n`;
    setResults(res);
  }

  // Finds the window dimensions
  const { width, height } = useWindowDimensions();
  const dateLabelFlex = {
    fontSize: width * 0.05,
  };
  const dateTextFlex = {
    fontSize: width * 0.05,
  };

  // Render the HomeScreen
  return (
    // Background image for the HomeScreen
    <ImageBackground
      source={require("../assets/images/campsite.jpg")}
      resize="center"
      style={styles.rootContainer}
      imageStyle={styles.backgroundImage}
    >
      {/* Safe Area inserts for container for main content */}
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
{/* Container for scrollable content */}
        <ScrollView style={styles.scrollViewContainer}>        
        {/* Title container for page name */}
          <View style={styles.titleContainer}>
            <Title>Hideaway Campsite</Title>
          </View>

          {/* Container for displaying a table to hold everything */}
          <View style={styles.tableContainer}>
            {/* Container for displaying the dates */}
            <View style={styles.dateContainer}>
              {/* Text for label for the check in */}
              <Text style={[styles.dateLabel, dateLabelFlex]}>Check In:</Text>
              {/* Date button to select check in date */}
              <Pressable onPress={showCheckInPicker}>
                <Text style={[styles.dateText, dateTextFlex]}>
                  {checkIn.toDateString()}
                </Text>
              </Pressable>
            </View>

            {/* Container for displaying the dates */}
            <View style={styles.dateContainer}>
              {/* Text for label for the check in */}
              <Text style={[styles.dateLabel, dateLabelFlex]}>Check Out:</Text>
              {/* Date button to select check in date */}
              <Pressable onPress={showCheckOutPicker}>
                <Text style={[styles.dateText, dateTextFlex]}>
                  {checkOut.toDateString()}
                </Text>
              </Pressable>
            </View>

            {/* Container view for check in & check out for both Android and IOS */}
            <View>
              {showCheckIn && Platform.OS === "android" && (
                <DateTimePicker
                  testID="dateTimePickerCheckInAndroid"
                  value={checkIn}
                  mode={"date"}
                  display="spinner"
                  onChange={onChangeCheckIn}
                />
              )}
              {showCheckIn && Platform.OS === "ios" && (
                <Modal
                  animationType="slide"
                  transparent={true}
                  supportedOrientations={["portrait", "landscape"]}
                >
                  <View style={styles.centeredModalView}>
                    <View style={styles.modalView}>
                      <DateTimePicker
                        testID="dateTimePickerCheckInIOS"
                        value={checkIn}
                        mode={"date"}
                        display="spinner"
                        onChange={onChangeCheckIn}
                      />
                      <Button title="Confirm" onPress={hideCheckInPicker} />
                    </View>
                  </View>
                </Modal>
              )}

              {showCheckOut && Platform.OS === "android" && (
                <DateTimePicker
                  testID="dateTimePickerCheckOutAndroid"
                  value={checkOut}
                  mode={"date"}
                  display="spinner"
                  onChange={onChangeCheckOut}
                />
              )}
              {showCheckOut && Platform.OS === "ios" && (
                <Modal
                  animationType="slide"
                  transparent={true}
                  supportedOrientations={["portrait", "landscape"]}
                >
                  <View style={styles.centeredModalView}>
                    <View style={styles.modalView}>
                      <DateTimePicker
                        testID="dateTimePickerCheckOutIOS"
                        value={checkOut}
                        mode={"date"}
                        display="spinner"
                        onChange={onChangeCheckOut}
                      />
                      <Button title="Confirm" onPress={hideCheckOutPicker} />
                    </View>
                  </View>
                </Modal>
              )}
            </View>

            {/* Container for displaying row content for number of guests */}
            <View style={styles.rowContainer}>
              {/* Displays text for number of guests */}
              <Text style={[styles.dateLabel, dateLabelFlex]}>
                Number of Guests:
              </Text>
              {/* Number of guests button to select number */}
              <Pressable onPress={showNumGuestsPicker}>
                {/* Container for displaying number of guests */}
                <View style={styles.dateContainer}>
                  {/* Displays the number of guests chosen */}
                  <Text style={[styles.dateText, dateTextFlex]}>
                    {guestCounts[numGuests]}
                  </Text>
                </View>
              </Pressable>

              {/* Modal created to show wheel picker for number of guests */}
              <Modal
                animationType="slide"
                transparent={true}
                visible={showNumGuests}
                supportedOrientations={["portrait", "landscape"]}
              >
                <View style={styles.centeredModalView}>
                  <View style={styles.modalView}>
                    <Text>Enter Number of Guests:</Text>
                    <WheelPicker
                      selectedIndex={numGuests}
                      options={guestCounts}
                      onChange={onChangeNumGuests}
                      containerStyle={{ width: 300 }}
                    />
                    <Button title="Confirm" onPress={hideNumGuestsPicker} />
                  </View>
                </View>
              </Modal>
            </View>
            
            {/* Container for displaying row content for number of campsites */}
            <View style={styles.rowContainer}>
              {/* Displays text for number of campsites */}
              <Text style={[styles.dateLabel, dateLabelFlex]}>
                Number of Campsites:
              </Text>
              {/* Number of campsites button to select number */}
              <Pressable onPress={showNumCampsitesPicker}>
                                {/* Container for displaying number of campsites */}
                <View style={styles.dateContainer}>
                  {/* Displays the number of campsites chosen */}
                  <Text style={[styles.dateText, dateTextFlex]}>
                    {campsiteCounts[numCampSites]}
                  </Text>
                </View>
              </Pressable>

              {/* Modal created to show wheel picker for number of campsites */}
              <Modal
                animationType="slide"
                transparent={true}
                visible={showNumCampSites}
                supportedOrientations={["portrait", "landscape"]}
              >
                <View style={styles.centeredModalView}>
                  <View style={styles.modalView}>
                    <Text style={[styles.dateText, dateTextFlex]}>
                      Enter Number of Campsites:
                    </Text>
                    <WheelPicker
                      selectedIndex={numCampSites}
                      options={campsiteCounts}
                      onChange={onChangeNumCampsites}
                      containerStyle={{ width: 300 }}
                    />
                    <Button title="Confirm" onPress={hideNumCampsitesPicker} />
                  </View>
                </View>
              </Modal>
            </View>
          </View>
          {/* Button Container to reserve now */}
          <View style={[styles.navButtonContainer]}>
            <NavButton onPress={onReserveHandler}>Reserve Now</NavButton>
          </View>

          {/* Container to display results from given info */}
          <View style={[styles.resultContainer]}>
            {/* Displays chosen information output */}
            <Text style={[styles.results, dateLabelFlex]}>{results}</Text>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

// Exports component for use
export default HomeScreen;

// Stylesheet for the HomeScreen
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    opacity: 0.6,
  },
  titleContainer: {
    padding: 10,
    marginVertical: 30,
    paddingHorizontal: 30,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: Colors.accent300,
    backgroundColor: Colors.secondary500,
  },
  scrollViewContainer: {
    flex: 1,
    width: 3000,
    maxWidth: "95%",
  },
  tableContainer: {
    textAlign: "left",
    borderWidth: 3,
    borderRadius: 10,
    borderColor: Colors.accent300,
    backgroundColor: Colors.secondary300,
    padding: 10,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  dateLabel: {
    color: Colors.primary500,
    fontFamily: "primary",
    textShadowColor: "black",
    textShadowOffset: { width: 2, height: 3 },
    textShadowRadius: 2,
  },
  dateText: {
    color: Colors.primary800,
    fontWeight: "bold",
  },
  centeredModalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  modalView: {
    margin: 10,
    backgroundColor: Colors.secondary500,
    borderWidth: 3,
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  navButtonContainer: {
    paddingVertical: 45,
    alignItems: "center",
  },
  resultContainer: {
    padding: 5,
    marginBottom: 10,
  },
  results: {
    margin: 10,
    textAlign: "center",
    color: Colors.primary500,
    fontFamily: "primary",
    textShadowColor: "black", 
    textShadowOffset: { width: 2, height: 3 },
    textShadowRadius: 2, 
  },
});