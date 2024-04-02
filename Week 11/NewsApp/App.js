// Import components
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
// Import Constants
import Colors from "./constants/Colors";
// Import Screens
import * as SplashScreen from "expo-splash-screen";
import BookmarksScreen from "./screens/BookmarksScreen";
import USNewsScreen from "./screens/USNewsScreen";
import WorldNewsScreen from "./screens/WorldNewsScreen";
import TravelNewsScreen from "./screens/TravelNewsScreen";
import NewsDetailScreen from "./screens/NewsDetailScreen";
// Import icons
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import BookmarkContextProvider from "./store/context/bookmarks-context.js";

// Creates stack, drawer, and tabs navigator
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

// Builds Drawer Navigator
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="News"
      screenOptions={{
        headerStyle: { backgroundColor: Colors.secondary500 },
        headerTitleStyle: {
          fontFamily: "fava",
          fontSize: 30,
          color: Colors.primary500,
        },

        sceneContainerStyle: { backgroundColor: Colors.primary800 },
        drawerContentStyle: { backgroundColor: Colors.secondary800 },
        drawerInactiveTintColor: Colors.primary500,
        drawerActiveTintColor: Colors.accent500,
        drawerActiveBackgroundColor: Colors.secondary500,
      }}
    >
      {/* Drawer Screen - news */}
      <Drawer.Screen
        name="News"
        component={TabsNavigator}
        options={{
          title: "News Articles",
          drawerLabel: "News Articles",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="newspaper" size={size} color={color} />
          ),
        }}
      />
      {/* Drawer Screen - bookmarks */}
      <Drawer.Screen
        name="BookmarkedNews"
        component={BookmarksScreen}
        options={{
          title: "Saved Articles",
          drawerLabel: "Saved Articles",
          drawerIcon: ({ color, size }) => (
            <FontAwesome name="bookmark" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

// Builds Tab Navigator
function TabsNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveBackgroundColor: Colors.primary800,
        tabBarActiveTintColor: Colors.accent500,
        tabBarInactiveBackgroundColor: Colors.primary500,
        tabBarInactiveTintColor: Colors.primary300,
        tabBarLabel: {
          fontSize: 15,
          fontFamily: "roboto",
        },
        tabBarStyle: {
          backgroundColor: Colors.primary500,
        },
      }}
    >
      {/* Creates bottom tab screens - US news */}
      <Tabs.Screen
        name="USArticles"
        component={USNewsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="flag" size={size} color={color} />
          ),
          tabBarLabel: "US Articles",
        }}
      />
      {/* Creates bottom tab screen - World news*/}
      <Tabs.Screen
        name="WorldArticles"
        component={WorldNewsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="globe" size={size} color={color} />
          ),
          tabBarLabel: "World Articles",
        }}
      />
      {/* Creates bottom tab screen - Travel news */}
      <Tabs.Screen
        name="TravelArticles"
        component={TravelNewsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="plane" size={size} color={color} />
          ),
          tabBarLabel: "Travel Articles",
        }}
      />
    </Tabs.Navigator>
  );
}

// Main App component
export default function App() {
  // Set up custom fonts
  const [fontsLoaded, fontError] = useFonts({
    fava: require("./assets/fonts/Fava.ttf"),
    roboto: require("./assets/fonts/Roboto.ttf"),
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
        {/* Create Bookmark Context Provider so it can access screens to allow user to bookmark screens*/}
        <BookmarkContextProvider>
          {/* Container for navigator */}
          <NavigationContainer style={styles.container}>
            <Stack.Navigator
              // to default to first stack screen if initialRouteName isn't set
              initialRouteName="DrawerScreen"
              screenOptions={{
                headerTintColor: Colors.primary500,
                headerStyle: { backgroundColor: Colors.secondary800 },
                contentStyle: { backgroundColor: Colors.primary800 },
              }}
            >
              <Stack.Screen
                name="DrawerScreen"
                component={DrawerNavigator}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="NewsDetail"
                component={NewsDetailScreen}
                options={{
                  headerBackTitle: false,
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </BookmarkContextProvider>
      </>
    );
  }
}

// Stylesheet for main app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
