// Import components for use
import { View, Text, FlatList } from "react-native";
// Imports dummy-data for countries
import { COUNTRIES } from "../data/dummy-data";
// Imports CountryGridTile for rendering individual country items
import CountryGridTile from "../components/CountryGridTile";

// Function for the the HomeScreen
function HomeScreen(props) {
  // Function to render each countrys items
  function renderCountryItem(itemData) {
    // Handler function for press event for country tile items
    function pressHandler() {
      // Navigates to the VacationDestinationScreen with selected country's id
      props.navigation.navigate("VacationDestinationScreen", {
        countryId: itemData.item.id,
      });
    }

    // Renders the CountryGridTile component with country data
    return (
      <CountryGridTile
        name={itemData.item.name}
        color={itemData.item.color}
        countryURL={itemData.item.countryURL}
        onPress={pressHandler}
      />
    );
  }

  // Renders the main view
  return (
    <View>
      {/* Flatlist for displaying the countries*/}
      <FlatList
        data={COUNTRIES}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={renderCountryItem}
        numColumns={2}
      />
    </View>
  );
}

// Exports component for use
export default HomeScreen;
