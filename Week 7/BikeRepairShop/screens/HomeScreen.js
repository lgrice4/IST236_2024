// Import components for use
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Switch,
  ImageBackground,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
// Import constants for use
import Colors from "../constants/colors";
import { RadioGroup } from "react-native-radio-buttons-group";
import BouncyCheckbox from "react-native-bouncy-checkbox";

// Function for the HomeScreen
function HomeScreen(props) {
  // Set SafeArea screen boundaries
  const insets = useSafeAreaInsets();

  // Render the HomeScreen
  return (
    // Background image for the HomeScreen
    <ImageBackground
      source={require("../assets/images/background.jpg")}
      resize="cover"
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
        {/* Title container for page name */}
        <View style={styles.titleContainer}>
          <Title>The Bike Doc</Title>
        </View>

        {/* Container for scrollable content */}
        <ScrollView style={styles.scrollContainer}>
          {/* Container for displaying the service time buttons */}
          <View style={styles.radioContainer}>
            <Text style={styles.radioHeader}>Service Times:</Text>
            <RadioGroup
              radioButtons={props.repairTimeRadioButtons}
              onPress={props.onSetRepairTimeId}
              selectedId={props.repairTimeId}
              layout="row"
              containerStyle={styles.radioGroup}
              labelStyle={styles.radioGroupLabels}
            />
          </View>

          {/* Container for displaying service options */}
          <View style={styles.rowContainer}>
            <View style={styles.checkBoxContainer}>
              <Text style={styles.checkBoxHeader}>Service Options:</Text>
              <View style={styles.checkBoxSubContainer}>
                {props.services.map((item) => {
                  return (
                    <BouncyCheckbox
                      key={item.id}
                      text={item.name}
                      onPress={props.onSetServices.bind(this, item.id)}
                      textStyle={{
                        textDecorationLine: "none",
                        color: Colors.primary500,
                        fontFamily: "evogria",
                      }}
                      innerIconStyle={{
                        borderRadius: 0,
                        borderColor: Colors.primary500,
                      }}
                      iconStyle={{
                        borderRadius: 0,
                      }}
                      fillColor={Colors.primary500}
                      style={{
                        padding: 2,
                      }}
                    />
                  );
                })}
              </View>
            </View>
          </View>

          {/* Container for displaying a subscription options */}
          <View style={styles.rowContainer}>
            <View style={styles.addOnsContainer}>
              <View style={styles.addOnsSubContainer}>
                <Text style={styles.addOnsLabel}>Newsletter Sign-Up</Text>
                <Switch
                  onValueChange={props.onSetNewsletter}
                  value={props.newsletter}
                  thumbColor={
                    props.newsletter ? Colors.primary500 : Colors.primary800
                  }
                  trackColor={{
                    false: Colors.primary500,
                    true: Colors.primary800,
                  }}
                />
              </View>
              <View style={styles.addOnsSubContainer}>
                <Text style={styles.addOnsLabel}>
                  Rental Membership Sign-Up
                </Text>
                <Switch
                  onValueChange={props.onSetRentalMembership}
                  value={props.rentalMembership}
                  thumbColor={
                    props.rentalMembership
                      ? Colors.primary500
                      : Colors.primary800
                  }
                  trackColor={{
                    false: Colors.primary500,
                    true: Colors.primary800,
                  }}
                />
              </View>
            </View>
          </View>

          {/* Button container */}
          <View style={styles.buttonContainer}>
            <NavButton onPress={props.onNext}>Submit Order</NavButton>
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
  },
  backgroundImage: {
    opacity: 0.5,
  },
  titleContainer: {
    marginTop: 50,
    marginBottom: 30,
    borderTopWidth: 2,
    borderTopColor: Colors.primary500,
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary500,
    marginHorizontal: 50,
    paddingVertical: 5,
  },
  scrollContainer: {
    flex: 1,
  },
  radioContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  radioHeader: {
    fontSize: 25,
    color: Colors.primary500,
    fontFamily: "evogria",
    marginBottom: 15,
  },
  radioGroup: {
    paddingBottom: 30,
  },
  radioGroupLabels: {
    fontSize: 15,
    color: Colors.primary500,
    fontFamily: "evogria",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingBottom: 20,
  },
  checkBoxContainer: {
    marginBottom: 30,
    borderTopWidth: 2,
    borderTopColor: Colors.primary500,
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary500,
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  checkBoxHeader: {
    fontSize: 25,
    color: Colors.primary500,
    fontFamily: "evogria",
  },
  checkBoxSubContainer: {
    paddingTop: 6,
    paddingHorizontal: 50,
  },
  addOnsContainer: {
    justifyContent: "space-evenly",
    marginBottom: 30,
  },
  addOnsSubContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingTop: 5,
  },
  addOnsLabel: {
    color: Colors.primary500,
    fontSize: 20,
    fontFamily: "evogria",
  },
  buttonContainer: {
    alignItems: "center",
  },
});
