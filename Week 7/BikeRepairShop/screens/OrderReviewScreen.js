// Import components for use
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
// Import constants for use
import Colors from "../constants/colors";
import NavButton from "../components/NavButton";
import { LinearGradient } from "expo-linear-gradient";

// Function for the OrderReviewScreen
function OrderReviewScreen(props) {
  // Set SafeArea screen boundaries
  const insets = useSafeAreaInsets();

  // Render the OrderReviewScreen
  return (
    // LinearGradient styling for gradient background
    <LinearGradient
      colors={[Colors.accent300, Colors.accent200, Colors.accent300]}
      style={styles.rootContainer}
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
          <Title>Order Summery</Title>
        </View>

        {/* Subtitle container for order detailing */}
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>Your order has been placed.</Text>
        </View>

        {/* Container for scrollable content */}
        <ScrollView>
          {/* Container for displaying selected services */}
          <View style={styles.servicesContainer}>
            {/* Displays the selected service time */}
            <Text style={styles.service}>Repair Time:</Text>
            <Text style={styles.subService}>{props.repairTime}</Text>
            {/* Display selected services */}
            <Text style={styles.service}>Services:</Text>
            {props.services.map((item) => {
              if (item.value) {
                return (
                  <Text key={item.id} style={styles.subService}>
                    {item.name}
                  </Text>
                );
              }
            })}
            {/* Container for displaying subscription information */}
            <Text style={styles.service}>Add Ons:</Text>
            <Text style={styles.subService}>
              {props.newsletter ? "Newsletter" : ""}
            </Text>
            <Text style={styles.subService}>
              {props.rentalMembership ? "Rental Membership" : ""}
            </Text>
          </View>

          {/* Container for displaying pricing details; sales tax, subtotal, etc. */}
          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>
              Subtotal: ${props.price.toFixed(2)}
            </Text>
            <Text style={styles.subTitle}>
              Sales Tax: ${(props.price * 0.06).toFixed(2)}
            </Text>
            <Text style={styles.subTitle}>
              Total: ${(props.price + props.price * 0.06).toFixed(2)}
            </Text>
          </View>

          {/* Button container */}
          <View style={styles.buttonContainer}>
            <NavButton onPress={props.onNext}>Return Home</NavButton>
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
}

// Exports component for use
export default OrderReviewScreen;

// Stylesheet for the OrderReviewScreen
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
  subTitleContainer: {
    marginVertical: 10,
    marginBottom: 30,
  },
  subTitle: {
    fontSize: 20,
    textAlign: "center",
    color: Colors.accent500,
    fontFamily: "evogria",
  },
  servicesContainer: {
    marginBottom: 30,
    borderTopWidth: 2,
    borderTopColor: Colors.primary500,
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary500,
    marginHorizontal: 50,
    paddingVertical: 5,
  },
  service: {
    marginTop: 30,
    fontSize: 20,
    color: Colors.accent500,
    paddingLeft: 20,
    fontFamily: "evogria",
  },
  subService: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: "evogria",
    marginTop: 5,
  },
  buttonContainer: {
    alignItems: "center",
  },
});
