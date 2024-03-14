// Defines a class to represent a vacation destination
class VacationLocation {
  // Constructor function to initializes a new instance for destinations
  constructor(
    id,
    countryId,
    name,
    avgCost,
    foundedYear,
    rating,
    countryURL,
    description
  ) {
    this.id = id; // Unique identifier for the location
    this.countryId = countryId; // Identifier linking to a country
    this.name = name; // Name of the location
    this.avgCost = avgCost; // Average cost
    this.foundedYear = foundedYear; // Year founded
    this.rating = rating; // User rating
    this.countryURL = countryURL; // URL for an image
    this.description = description; // Description of the location
  }
}

// Exports the class for use
export default VacationLocation;
