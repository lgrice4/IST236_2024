// Import components for use
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Import fonts
import { useFonts } from "expo-font";
// Import screens for use
import HomeScreen from "./screens/HomeScreen";
import VacationDestinationScreen from "./screens/VacationDestinationScreen";
import * as SplashScreen from "expo-splash-screen";
// Import constants for use
import Colors from "./constants/colors.js";

// Creates stack navigator
const Stack = createNativeStackNavigator();

// Main App component
export default function App() {
  // Set up custom fonts
  const [fontsLoaded, fontError] = useFonts({
    primaryFont: require("./assets/fonts/Roboto-Regular.ttf"),
    secondaryFont: require("./assets/fonts/Suifak.otf"),
  });

  // Function to hide splash screen once fonts are loaded
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Renders the current screen within a SafeAreaProvider
  // Checks to see if fonts are loaded, shows screen if they are with no errors
  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    return (
      <>
        <StatusBar style="light" />
        {/* Container for navigator  */}
        <NavigationContainer>
          <Stack.Navigator
            // to default to first stack screen if initialRouteName isn't set
            initialRouteName="HomeScreen"
            screenOptions={{
              // screen options for the navigator
              headerStyle: { backgroundColor: Colors.primary500 },
              headerTintColor: Colors.primary300,
              headerTitleStyle: { fontFamily: "secondaryFont", fontSize: 34 },
              contentStyle: { backgroundColor: Colors.primary800 },
            }}
          >
            <Stack.Screen
              name="HomeScreen" // Defines screen in stack
              component={HomeScreen}
              options={{
                // Sets options for the screen
                title: "Vacation Locations",
              }}
            />
            <Stack.Screen
              name="VacationDestinationScreen" // Defines another screen in stack
              component={VacationDestinationScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

// Stylesheet for main app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
