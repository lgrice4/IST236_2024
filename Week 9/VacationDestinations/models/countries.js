// Defines a class to model country data
class Country {
  constructor(id, name, color, countryURL) {
    this.id = id; // Unique identifier for the country
    this.name = name; // Name of the country
    this.color = color; // Color for UI purposes
    this.countryURL = countryURL; // URL for an image
  }
}

// Exports the class for use
export default Country;
