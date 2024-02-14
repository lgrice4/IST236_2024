// Import components for use
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen";
import MenuScreen from "./screens/MenuScreen";
import Colors from "./constants/colors";
import { useFonts } from "expo-font";

export default function App() {
  // Set up custom fonts
  const [fontsLoaded] = useFonts({
    digitalt: require("./assets/fonts/Digitalt.ttf"),
  });

  // Set the current screen
  const [currentScreen, setCurrentScreen] = useState("home");

  // Function to switch to the menu screen
  function menuScreenHandler() {
    setCurrentScreen("menu");
  }

  // Function to switch to the home screen
  function homeScreenHandler() {
    setCurrentScreen("home");
  }

  // Determine which screen to be on
  let screen = <HomeScreen onNext={menuScreenHandler} />;

  if (currentScreen === "menu") {
    screen = <MenuScreen onNext={homeScreenHandler} />;
  }

  // Renders the current screen within a SafeAreaProvider
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}

// Style sheet for the main app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent500,
    alignItems: "center",
    justifyContent: "center",
  },
});
