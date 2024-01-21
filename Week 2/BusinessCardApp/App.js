import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Image, Linking } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar styles="dark" />
      <SafeAreaView style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.Image} source={require("./assets/images/mypicture.jpg")} />
      </View>
      <View style={styles.informationContainer}>
        <Text style={styles.text}>Logan Grice</Text>
        <Text style={styles.text} onPress={() => Linking.openURL("mailto:logangrice13@gmail.com")}>Email: logangrice13@gmail.com</Text>
        <Text style={styles.text} onPress={() => Linking.openURL("tel:+1(843)6245601")}>Phone: (843)-624-5601</Text>
        <Text style={styles.text} onPress={() => Linking.openURL("https://github.com/lgrice4")}>GitHub: lgrice4</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 3,
    paddingTop: 50,
    width: "100%",
  },
  Image: {
    height: 500,
    width: "100%",
    resizeMode: "cover",
    borderWidth: 7,
    borderColor: "#827f7f",
  },
  informationContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    fontStyle: 'italic',
    marginBottom: 15
  }
});
