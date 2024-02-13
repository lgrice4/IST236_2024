import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';

export default function App() {
  
  // Set state variable for the current screen
  const [currentScreen, setCurrentScreen] = useState("home");

  function menuScreenHandler() {
    setCurrentScreen("menu");
  }

  function homeScreenHandler() {
    setCurrentScreen("home");
  }

  // Determine which screen to be one
  let screen = <HomeScreen onNext={menuScreenHandler}/>;

  if (currentScreen === "menu"){
    screen = <MenuScreen onNext={homeScreenHandler}/>;
  }

  return (
   <>
   <StatusBar style='light' />
   <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
