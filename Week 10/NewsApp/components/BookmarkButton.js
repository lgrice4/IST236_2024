// Imports icons
import { Fontisto } from "@expo/vector-icons";
import { Pressable } from "react-native";
// Import Constants
import Colors from "../constants/Colors";

// Creatse Bookmark Button
function BookmarkButton(props) {
  // Checks to see if buttons pressed
  if (props.pressed) {
    // Fills the button in if yes
    return (
      <Pressable onPress={props.onPress}>
        <Fontisto name="bookmark-alt" size={30} color={Colors.accent500} />
      </Pressable>
    );
  } else {
    // Outline only if not
    return (
      <Pressable onPress={props.onPress}>
        <Fontisto name="bookmark" size={30} color={Colors.accent500} />
      </Pressable>
    );
  }
}

// Export component for use
export default BookmarkButton;
