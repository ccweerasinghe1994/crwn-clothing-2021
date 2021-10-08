const googleDatabase = [
  "cats.com",
  "souperecipies.com",
  "flowers.com",
  "animals.com",
  "catspictures.com",
  "myfavouritecats.com",
  "myfavouritecats2.com",
];

const googleSearch = (searchInput, db) => {
  const matches = db.filter((website) => {
    return website.includes(searchInput);
  });

  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

module.exports = googleSearch;
