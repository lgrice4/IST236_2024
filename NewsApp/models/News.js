// Creates the News model for holding news info for each article
class News {
  constructor(id, type, headline, date, author, agency, description, imageUrl) {
    this.id = id;
    this.type = type;
    (this.headline = headline),
      (this.date = date),
      (this.author = author),
      (this.agency = agency),
      (this.description = description),
      (this.imageUrl = imageUrl);
  }

  toString() {
    return `${this.headline} was created by ${this.author} on ${this.date} and published by ${this.agency}. ${this.description} Type: ${this.type} Image:${this.imageUrl}`;
  }
}

// Export component for use
export default News;
