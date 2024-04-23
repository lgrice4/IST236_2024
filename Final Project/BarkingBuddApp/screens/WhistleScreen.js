// Import components
import React, { useState } from 'react';
import { View, Image, Text, Button, StyleSheet, useWindowDimensions } from 'react-native';
// Import audio for use with app
import { Audio } from 'expo-av';
import { useFonts } from "expo-font";
// Import icons for bottom tab navigation
import { FontAwesome5 } from "@expo/vector-icons";

// Functional component for the whistlescreen
const WhistleScreen = () => {
    // State to manage playback
  const [sound, setSound] = useState();

  // Function for loading the sound file
  const loadSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/sounds/dog-whistle.mp3')
    );
    setSound(sound);
  };

  // Function to play the loaded sound
  const playSound = async () => {
    if (sound) {
      await sound.playAsync();
    } else {
      await loadSound();
    }
  };

  // Function to stop the currently playing sound
  const stopSound = async () => {
    if (sound) {
      await sound.stopAsync();
    }
  };

  const { width, height } = useWindowDimensions();

  // Renders the audio player, image, and buttons  
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/dog-whistle.png')}
        style={styles.image}
      />
      <Text style={styles.infoText}>Information about the audio</Text>
      <View style={styles.buttonContainer}>
      <Button
          title="Play Sound"
          onPress={playSound}
          color="#ffffff"
          // Apply fontFamily to the button title style
          titleStyle={{ fontFamily: "TypoGraphica" }}
        />
       <Button
          title="Stop Sound"
          onPress={stopSound}
          color="#ffffff"
          // Apply fontFamily to the button title style
          titleStyle={{ fontFamily: "TypoGraphica" }}
        />
      </View>
    </View>
  );
};

// stylesheet for whistlescreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#edd1d1',
  },
  image: {
    width: 400,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  infoText: {
    marginBottom: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    fontFamily: "RobotoRegular",
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
});

// export component for use in app
export default WhistleScreen;
