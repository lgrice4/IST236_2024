import { View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";}



function MenuScreen(props) {
    // Set Safe Area Screen Boundaries
    const insets = useSafeAreaInsets();

    return(
        <View style={[
            styles.rootContainer, 
            {
                paddingTop: insets.top,
                paddingBottom: insets.bottom, 
                paddingLeft: insets.left,
                paddingRight: insets.right,
            }
        ]}>


        <View>
            <Text>Menu Screen</Text>
        </View>
            

        </View>
    )

}

export default MenuScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1, 
        alignItems: "center"
    }
})