// Import components for use
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import "react-native-gesture-handler";
// Import bottomtabs for navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// Import screens
import Home from "./screens/HomeScreen";
import HiringScreen from "./screens/HiringScreen";
import WhistleScreen from "./screens/WhistleScreen";
import ParkGuideScreen from "./screens/ParkGuideScreen";
// Import icons for bottom tab navigation
import { FontAwesome5 } from "@expo/vector-icons";
import { useFonts } from "expo-font";

// Create a bottom tab navigator
const tab = createBottomTabNavigator();



// Main component for the app
export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoRegular: require('./assets/fonts/RobotoRegular.ttf'),
    TypoGraphica: require('./assets/fonts/TypoGraphica.otf'),
  });

  if (!fontsLoaded) {
    return <Text>Loading Fonts...</Text>;
  }
  return (
    // Container for the navigation
    <NavigationContainer>
            <StatusBar style="dark" />
            {/* Navigation for the bottom tab */}
      <tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#767577",
            position: "fixed",
            bottom: 40,
            marginHorizontal: 10,
            height: 60,
            borderRadius: 20,
            shadowColor: "#000",
            shadowOpacity: 0.7,
            shadowOffset: {
              width: 8,
              height: 10,
            },
            paddingHorizontal: 10,
          },
        }}
      >
                {/* Home screen tab */}
        <tab.Screen
          name={"Helpful Tips For Your Furry Friend"}
          component={Home}
          options={{
            // headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  position: "absolute",
                  paddingTop: 20,
                }}
              >
                <FontAwesome5
                  name="home"
                  size={25}
                  color={focused ? "#edd1d1" : "white"}
                ></FontAwesome5>
              </View>
            ),
          }}
        ></tab.Screen>
        {/* Hiring screen tab */}
        <tab.Screen
          name={"Hire A Dog Walker or Sitter"}
          component={HiringScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  position: "absolute",
                  paddingTop: 20,
                }}
              >
                <FontAwesome5
                  name="users"
                  size={25}
                  color={focused ? "#edd1d1" : "white"}
                ></FontAwesome5>
              </View>
            ),
          }}
        />
        {/* Whistle screen tab */}
        <tab.Screen
          name={"Try Our Dog Whistle"}
          component={WhistleScreen}
          options={{
            // headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  position: "absolute",
                  paddingTop: 20,
                }}
              >
                <FontAwesome5
                  name="volume-up"
                  size={25}
                  color={focused ? "#edd1d1" : "white"}
                ></FontAwesome5>
              </View>
            ),
          }}
        />
                {/* Park guide screen tab */}
        <tab.Screen
          name={"Find A Dog Park Near You"}
          component={ParkGuideScreen}
          options={{
            // headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  position: "absolute",
                  paddingTop: 20,
                }}
              >
                <FontAwesome5
                  name="map"
                  size={25}
                  color={focused ? "#edd1d1" : "white"}
                ></FontAwesome5>
              </View>
            ),
          }}
        />
      </tab.Navigator>
    </NavigationContainer>
  );
}


// stylesheet for main app components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});