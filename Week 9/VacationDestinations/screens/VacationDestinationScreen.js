// Import components for use
import { useLayoutEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
// Imports dummy-data for countries and destinations
import { VACATIONDESTINATIONS, COUNTRIES } from "../data/dummy-data.js";
// Imports the DestinationItem component for rendering individual destination items
import VacationDestinationItem from "../components/DestinationItem.js";

// Component for rendering the list of destinations for a selected country
function VacationDestinationScreen(props) {
  // Retrieves the countryId
  const countryId = props.route.params.countryId;

  // Sets navigation sccreen title based on selected country's name
  useLayoutEffect(() => {
    const country = COUNTRIES.find((country) => country.id === countryId);
    props.navigation.setOptions({ title: country ? country.name : null }); // Fallback title if country not found
  }, [countryId, props.navigation]);

  // Filter destination locations based on selected country's id
  const displayedVacationDestinations = VACATIONDESTINATIONS.filter(
    (vacationLocationItem) => {
      return vacationLocationItem.countryId === countryId;
    }
  );

  // Renders each destination items into flatlist
  function renderVacationDestinationItem(itemData) {
    // Props for the VacationDestinationItem component
    const vacationLocationItemProps = {
      name: itemData.item.name,
      countryURL: itemData.item.countryURL,
      avgCost: itemData.item.avgCost,
      foundedYear: itemData.item.foundedYear,
      rating: itemData.item.rating,
      listIndex: itemData.index,
      description: itemData.item.description,
    };
    // Renders VacationDestinationItem with specified props
    return <VacationDestinationItem {...vacationLocationItemProps} />;
  }

  // Renders the main view
  return (
    <View style={styles.container}>
      {/* Flatlist for displaying the destinations*/}
      <FlatList
        data={displayedVacationDestinations}
        keyExtractor={(item) => item.id}
        renderItem={renderVacationDestinationItem}
      />
    </View>
  );
}

// Exports component for use
export default VacationDestinationScreen;

// StyleSheet for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
