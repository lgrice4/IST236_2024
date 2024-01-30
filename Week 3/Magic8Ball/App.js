import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  TextInput,
  View,
} from "react-native";
export default function App() {
  // Create state management variables
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [userQuestion, setUserQuestion] = useState("");
  const [magic8BallResponse, setmagic8BallResponse] = useState("");

  // Create Array of Random Responses - Taken From D2L
  const arraymagic8BallResponses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];

  // Create maxLimit for array (arrayEightBallResponses)
  const maxLimit = 20;

  // Create Modal Screen Functions
  function startShowingResponse() {
    setModalIsVisible(true);
  }
  function endShowingResponse() {
    setModalIsVisible(false);
  }

  // Takes user input question from main page & shows it on modal screen
  function userQuestionHandler(userQuestion) {
    setUserQuestion(userQuestion);
  }

  // Function to generate a random response for the EightBall
  function magic8BallResponseHandler() {
    // Opens Modal Screen
    startShowingResponse();

    // Creates a place holder for random number
    let randomNumber = Math.floor(Math.random() * maxLimit);

    // Use randomNumber to a response from array by calling it's index
    ballResponse = arraymagic8BallResponses[randomNumber];

    // Set the Magic 8 Ball's response
    setmagic8BallResponse(ballResponse);
  }

  return (
    <>
      {/* Main Page starts here */}
      <StatusBar style="auto" />
      {/* Root Container with Title for Main page */}
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>The Magic 8 Ball</Text>
        </View>

        {/* Image Container ft. magic 8 ball */}
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("./assets/images/magic8ball.png")}
          />
        </View>

        {/* Subtitle Container (acts as directions) */}
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>Ask The Magic 8 Ball A Question:</Text>
        </View>

        {/* Text Input box for User Question */}
        <View style={styles.textinputContainer}>
          <TextInput
            style={styles.userquestionTextInput}
            // Place holder for before text is entered
            placeholder="Please enter your question here"
            keyboardAppearance="default"
            onChangeText={userQuestionHandler}
            value={userQuestion}
          />
        </View>

        {/* Submit Button Container - response handler */}
        <View style={styles.submitbuttonContainer}>
          <Pressable
            // Android Ripple to make it pretty
            android_ripple={{ color: "#15078c" }}
            // Style the button when pressed
            style={({ pressed }) => pressed && styles.pressedButton}
            // When pressed, open modal screen
            onPress={magic8BallResponseHandler}
          >
            {/* Ask Button Container */}
            <View style={styles.askButtonContainer}>
              <Text style={styles.askButtonText}>Ask The Magic 8 Ball</Text>
            </View>
          </Pressable>
        </View>
        {/* Main Page ends here */}

        {/* Modal Screen starts here */}
        <Modal visible={modalIsVisible} animationType="fade">
          {/* Root Container for Modal Page with Modal Title */}
          <SafeAreaView style={styles.rootContainer}>
            <View style={styles.titleModalContainer}>
              <Text style={styles.modalTitle}>The Answer</Text>
            </View>

            {/* Ask Container - S*/}
            <View style={styles.modalAskContainer}>
              <Text style={styles.modalAskTitle}>You Asked:</Text>
            </View>
            {/* Displays the User Input Question as asked */}
            <View style={styles.modalUserQuestionContainer}>
              <Text style={styles.modalUserQuestion}>{userQuestion}</Text>
            </View>
            {/* Answer Container */}
            <View style={styles.modalAnswerContainer}>
              <Text style={styles.modalAnswerTitle}>
                The Magic 8 Ball Said:
              </Text>
            </View>
            {/* Magic 8 Ball Container - displays random response */}
            <View style={styles.modalmagic8BallContainer}>
              <Text style={styles.modalmagic8BallResponse}>
                {magic8BallResponse}
              </Text>
            </View>

            {/* Button Container */}
            <View style={styles.modalButtonContainer}>
              <Pressable
                // Android Ripple to make it pretty
                android_ripple={{ color: "#15078c" }}
                // Style the button when pressed
                style={({ pressed }) => pressed && styles.pressedButton}
                // When pressed, open modal screen
                onPress={endShowingResponse}
              >
                {/* Back Button Container - returns to main page */}
                <View style={styles.modalBackButtonContainer}>
                  <Text style={styles.modalBackButtonText}>
                    Go Back To The Main Page
                  </Text>
                </View>
              </Pressable>
            </View>
          </SafeAreaView>
        </Modal>
      </SafeAreaView>
    </>
  );
}

// Root - Main Page Styles Start Here
const styles = StyleSheet.create({
  // Root Container Styles
  rootContainer: {
    flex: 1,
    backgroundColor: "#15078c",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  // Title Container Styles
  titleContainer: {
    marginTop: 30,
  },
  // Title Styles
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    padding: 25,
  },
  // Image Container Styles
  imageContainer: {
    flex: 4,
    width: "100%",
    marginBottom: 40,
    marginTop: 5,
  },
  // Image Styles
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "center",
  },
  // Subtitle Styles
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    padding: 15,
    textAlign: "center",
  },
  // Text Input Container Styles
  textinputContainer: {
    marginBottom: 50,
    width: "100%",
    alignItems: "center",
  },
  // User Question Text Input Styles
  userquestionTextInput: {
    width: "90%",
    backgroundColor: "#f2f2f2",
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#040000",
    padding: 15,
    fontSize: 16,
    textAlign: "center",
  },
  // Submit Button Container Styles
  submitbuttonContainer: {
    flex: 4,
  },
  // Ask Button Container Styles
  askButtonContainer: {
    padding: 20,
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#000000",
    backgroundColor: "#05020c",
    borderRadius: 10,
    marginTop: 30,
  },
  // Ask Button Text Styles
  askButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    padding: 5,
  },

  // Modal Page Styles Start Here
  // Title Styles
  modalTitle: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    padding: 15,
  },
  // Ask Title Styles
  modalAskTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    padding: 25,
  },
  // User Question Container Styles
  modalUserQuestionContainer: {
    flex: 1,
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#000000",
    backgroundColor: "#05020c",
    borderRadius: 10,
    marginBottom: 20,
    width: "90%",
  },
  // User Question Styles
  modalUserQuestion: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    padding: 20,
    textAlign: "center",
  },
  // Answer Title Styles
  modalAnswerTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    padding: 25,
  },
  // Magic 8 Ball Container Styles
  modalmagic8BallContainer: {
    flex: 1,
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#000000",
    backgroundColor: "#05020c",
    borderRadius: 10,
    marginBottom: 20,
    width: "90%",
  },
  // Magic 8 Ball Response Styles
  modalmagic8BallResponse: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    padding: 25,
    textAlign: "center",
  },
  // Button Container Styles
  modalButtonContainer: {
    flex: 2,
  },
  // Back Button Container Styles
  modalBackButtonContainer: {
    padding: 20,
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#000000",
    backgroundColor: "#05020c",
    borderRadius: 10,
    marginTop: 50,
  },
  // Back Button Text Styles
  modalBackButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    padding: 5,
  },
});
