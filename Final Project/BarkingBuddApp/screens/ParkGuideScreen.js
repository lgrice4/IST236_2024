// Import components
import React from 'react';
import { StyleSheet, View, Text, useWindowDimensions } from 'react-native';
// Imports mapview for gps location
import MapView from 'react-native-maps';
import { useFonts } from "expo-font";
// Import icons for bottom tab navigation
import { FontAwesome5 } from "@expo/vector-icons";

// Functional component for the parkguidescreen
const ParkGuideScreen = () => {
  const { width, height } = useWindowDimensions();
  return (
    // Mapview for GPS 
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 34.195770,
            longitude: -79.761971,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
            {/* Section for text info about the guide */}
      <View style={styles.textContainer}>
      <Text style={styles.title}>Use Our GPS To Find A Park Near You</Text>
      <Text style={[styles.text]}>A trip to the park isn't just for you, it's a tail-wagging good time for your furry friend too! 
      Parks offer wide open spaces for them to run free and burn off energy, leaving them happy and relaxed. But that's not all!  
      They'll also get a chance to socialize with other pups, which is important for their mental well-being and teaches them good doggy etiquette.
      And let's not forget, a tired dog is a well-behaved dog, so you might just enjoy some extra peace and quiet at home. 
      So next sunny day, grab your leash and head to the park for a fun and healthy outing with your canine companion!
      </Text>
      </View>
    </View>
  );
};

// Stylesheet for parkguidescreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: 0.6, // Adjusts the size of the map
  },
  map: {
    flex: 1,
  },
  textContainer: {
    flex: 0.4, // Adjust the size of the text container
    padding: 20,
    backgroundColor: '#edd1d1',
  },
  title: {
    fontSize: 20, 
    textAlign: 'center',
    fontFamily: 'TypoGraphica', 
    marginBottom: 10, // Add some spacing between title and text
  },
  text: {
    fontSize: 16,
    textAlign: 'justify',
    fontFamily: 'RobotoRegular'
  },
});

// exports component for use
export default ParkGuideScreen;
