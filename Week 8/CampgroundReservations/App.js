// Import components for use
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useCallback } from "react";
// Import screens for use
import HomeScreen from "./screens/HomeScreen";
import * as SplashScreen from "expo-splash-screen";
// Import constants for use
import Colors from "./constants/Colors";
// Import fonts
import { useFonts } from "expo-font";

// Main App component
export default function App() {
  // Set up custom fonts
  const [fontsLoaded, fontError] = useFonts({
    primary:require("./assets/fonts/KGLegoHouse.ttf"),
    primaryBold: require("./assets/fonts/StayandShine.ttf"),
  });

  // Function to hide splash screen once fonts are loaded
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Shows HomeScreen on start up
  let screen = <HomeScreen />;

  // Renders the current screen within a SafeAreaProvider
  // Checks to see if fonts are loaded, shows screen if they are with no errors
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
    backgroundColor: Colors.accent500,
  },
});