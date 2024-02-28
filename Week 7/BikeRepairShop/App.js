// Import components for use
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState, useMemo, useCallback } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
// Import constants for use
import Colors from "./constants/colors";
// Import screens for use
import HomeScreen from "./screens/HomeScreen";
import OrderReviewScreen from "./screens/OrderReviewScreen";
import * as SplashScreen from "expo-splash-screen";
// Import fonts
import { useFonts } from "expo-font";

// Main App component
export default function App() {
  // Set up  custom fonts
  const [fontsLoaded, fontError] = useFonts({
    evogria: require("./assets/fonts/Evogria.otf"),
  });

  // Function to hide splash screen once fonts are loaded
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // State variables for current screen and price
  const [currentScreen, setCurrentScreen] = useState("");
  const [currentPrice, setCurrentPrice] = useState(0);

  // Memoized array with repair time options
  const repairTimeRadioButtons = useMemo(
    () => [
      {
        id: "0",
        label: "Standard",
        value: "Standard",
        price: 0,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "1",
        label: "Expedited",
        value: "Expedited",
        price: 50,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "2",
        label: "Next Day",
        value: "Next Day",
        price: 100,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
    ],
    []
  );

  //  State variables for repair time and services
  const [repairTimeId, setRepairTimeId] = useState(0);
  const [services, setServices] = useState([
    { id: 0, name: "Basic Tune-Up", value: false, price: 50 },
    { id: 1, name: "Comprehensive Tune-Up", value: false, price: 75 },
    { id: 2, name: "Flat Tire Repair", value: false, price: 20 },
    { id: 3, name: "Brake Servicing", value: false, price: 50 },
    { id: 4, name: "Gear Servicing", value: false, price: 40 },
    { id: 5, name: "Chain Servicing", value: false, price: 15 },
    { id: 6, name: "Frame Repair", value: false, price: 35 },
    { id: 7, name: "Safety Check", value: false, price: 25 },
    { id: 8, name: "Accessory Install", value: false, price: 10 },
  ]);

  // State variables for newsletter subscription and rental membership
  const [newsletter, setNewsletter] = useState(false);
  const [rentalMembership, setRentalMembership] = useState(false);

  // Handler for setting services
  function setServicesHandler(id) {
    setServices((prevServices) =>
      prevServices.map((item) =>
        item.id === id ? { ...item, value: !item.value } : item
      )
    );
  }

  // Handler for setting newsletter subscription
  function setNewsletterHandler() {
    setNewsletter((previous) => !previous);
  }

  // Handler for setting rental membership
  function setRentalMembershipHandler() {
    setRentalMembership((previous) => !previous);
  }

  // Function to reset all selections and navigate to homescreen
  function homeScreenHandler() {
    setRepairTimeId(0);
    setServices(services.map((service) => ({ ...service, value: false })));
    setNewsletter(false);
    setRentalMembership(false);
    setCurrentPrice(0);
    setCurrentScreen("home");
  }

  // Function to calculate total price
  function orderReviewHandler() {
    let price = 0;
    for (let i = 0; i < services.length; i++) {
      if (services[i].value) {
        price = price + services[i].price;
      }
    }
    // Adds in fixed price if the rental is selected
    if (rentalMembership) {
      price = price + 100.0;
    }
    // Adds in price based on the selected repair time
    price = price + repairTimeRadioButtons[repairTimeId].price;

    // Updates the current price and navigates to the review screen
    setCurrentPrice(price);
    setCurrentScreen("review");
  }

  // Determines which screen to be on
  let screen = (
    <HomeScreen
      repairTimeId={repairTimeId}
      services={services}
      newsletter={newsletter}
      rentalMembership={rentalMembership}
      repairTimeRadioButtons={repairTimeRadioButtons}
      onSetRepairTimeId={setRepairTimeId}
      onSetServices={setServicesHandler}
      onSetNewsletter={setNewsletterHandler}
      onSetRentalMembership={setRentalMembershipHandler}
      onNext={orderReviewHandler}
    />
  );
  if (currentScreen == "review") {
    screen = (
      <OrderReviewScreen
        repairTime={repairTimeRadioButtons[repairTimeId].value}
        services={services}
        newsletter={newsletter}
        rentalMembership={rentalMembership}
        price={currentPrice}
        onNext={homeScreenHandler}
      />
    );
  }

  // Renders the current screen within a SafeAreaProvider
  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    return (
      <>
        <StatusBar style="light" />
        <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
      </>
    );
  }
}

// Stylesheet for main app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent300,
  },
});
