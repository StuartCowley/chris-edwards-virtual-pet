// speciesList.js

// Create an array of possible species names
const speciesList = [
  "Lastik",
  "Zorg",
  "Xenon",
  "Borg",
  "Klingon",
  "Vulcan",
  "Romulan",
  "Ferengi",
  "Cardassian",
  "Bajoran",
  "Dominion",
  "Jem'Hadar",
];

// Use a loop to generate 100 random species names and add them to the speciesList array
for (let i = 0; i < 100; i++) {
  speciesList.push("Species " + (i + 1));
}

// Export the speciesList array
module.exports = speciesList;
