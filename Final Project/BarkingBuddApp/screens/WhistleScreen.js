// Import components
import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
// Import audio for use with app
import { Audio } from "expo-av";
// Import Constants
import colors from "../constants/colors";

// Functional component for the whistlescreen
const WhistleScreen = () => {
  // State to manage playback
  const [sound, setSound] = useState();

  // Function for loading the sound file
  const loadSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/sounds/whistle.mp3")
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
      {/* Title section */}
      <Text style={styles.title}>
        Did You Know Dogs Have Sensitive Hearing?
      </Text>

      <Image
        source={require("../assets/images/dog-whistle.png")}
        style={styles.image}
      />
      <Text style={styles.infoText}>
        Dogs are the ultimate eavesdroppers! Their hearing is far superior to
        ours. While humans can hear sounds from about 20 Hz to 20,000 Hz, a
        dog's range stretches up to 60,000 Hz. This means they can pick up on
        high-pitched sounds that escape our ears completely. Dog whistles
        exploit this difference. These whistles emit ultrasonic frequencies,
        sounds above our range but perfectly audible to dogs. They can be a
        great training tool because the sound cuts through noise without
        disturbing us and gets your dog's attention from afar. Think of it as a
        secret language between you and your furry friend!
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Play Sound"
          onPress={playSound}
          color={colors.accent3} // Use colors.accent3 from colors.js
          // Apply fontFamily to the button title style
          titleStyle={{ fontFamily: "TypoGraphica" }}
        />
        <Button
          title="Stop Sound"
          onPress={stopSound}
          color={colors.accent3} // Use colors.accent3 from colors.js
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary1, // Use colors.primary1 from colors.js
  },
  image: {
    width: 400,
    height: 250,
    resizeMode: "contain",
    marginBottom: 20,
  },
  infoText: {
    marginBottom: 20,
    paddingHorizontal: 20,
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "RobotoRegular",
    textAlign: "justify",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
  },
  title: {
    fontSize: 20,
    marginBottom: 20, // Add some space between title and image
    textAlign: "center", // Center align the title text
    fontFamily: "TypoGraphica",
    color: colors.primary3, // Use colors.primary3 from colors.js
  },
});

// export component for use in app
export default WhistleScreen;
