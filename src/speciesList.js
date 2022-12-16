// speciesList.js

// Create an array of possible species names
const speciesList = [
  "Arcturian",
  "Andromedan",
  "Zephyrian",
  "Cepheid",
  "Ursian",
  "Draconian",
  "Rigelian",
  "Cygnian",
  "Antarean",
  "Eltarian",
  "Taurian",
  "Regulan",
  "Betelgeusian",
  "Orionian",
  "Altairian",
  "Eridanian",
  "Lyrian",
  "Pleiadian",
  "Aldebaran",
  "Procyonian",
  "Hyracian",
  "Rigelian",
  "Vindemiatrixian",
  "Canopican",
  "Delphinian",
  "Aquilian",
  "Fomalhautian",
  "Siriusian",
  "Luytenian",
  "Polluxian",
  "Wolfian",
  "Polarisian",
  "Denebian",
  "Vegaian",
  "Atrian",
  "Bellatrixian",
  "Capellian",
  "Deneb-Kaitosian",
  "Arcturian",
  "Proximian",
  "Altarian",
  "Mirfakian",
  "Denubian",
  "Gacruxian",
  "Alnilamian",
  "Atikarian",
  "Alhenaian",
  "Sadalmelikian",
  "Acruxian",
  "Menkabian",
  "Alnilamian",
  "Alhenaian",
  "Bellatrixian",
  "Betelgeusian",
  "Alnilamian",
  "Altairian",
  "Betelgeusian",
  "Rigelian",
  "Antarean",
  "Zephyrian",
  "Aldebaran",
  "Polarisian",
  "Arcturian",
  "Fomalhautian",
  "Alhenaian",
  "Deneb-Kaitosian",
  "Altairian",
  "Alnilamian",
  "Bellatrixian",
  "Vegaian",
  "Capell",
];

// 20 starter abilities //
const specialAbilities = [
  { name: "Acid Spit", damage: 2 },
  { name: "Claws", damage: 3 },
  { name: "Healing Touch", health: 5 },
  { name: "Power Boost", fitness: 3 },
  { name: "Invisibility", health: -2 },
  { name: "Webbing", fitness: -1 },
  { name: "Venom", health: -3, damage: 3 },
  { name: "Sonic Scream", fitness: -2, damage: 4 },
  { name: "Regeneration", health: 4 },
  { name: "Phasing", fitness: 2 },
  { name: "Telekinesis", health: -1, damage: 3 },
  { name: "Telepathy", fitness: -2, damage: 4 },
  { name: "Heat Vision", health: -3, damage: 1 },
  { name: "Super Strength", fitness: 4, damage: 2 },
  { name: "Super Speed", health: 3 },
  { name: "Super Jump", fitness: 2 },
  { name: "Super Senses", health: 1 },
  { name: "Super Durability", fitness: 3 },
  { name: "Super Agility", health: 2 },
  { name: "Super Intelligence", fitness: 4 },
  { name: "Super Reflexes", health: 5, damage: 5 },
];

const speciesData = {};

speciesList.forEach((species) => {
  const health = Math.floor(Math.random() * 31) + 90; // Generate a random number between 90 and 120
  const fitness = Math.floor(Math.random() * 9); // Generate a random number between 0 and 8
  const ability = specialAbilities[Math.floor(Math.random() * 20)]; // Choose a random ability from the specialAbilities array

  speciesData[species] = { health, fitness, ability };
});

const checkUpMessage = [
  "Galactic traveler thanks for checking up",
  "Alien thanks for checking up on me",
  "Saucer captain thanks for checking up",
  "Space invader thanks for checking on me",
  "Interstellar traveler thanks for checking up",
  "Galactic hero thanks for checking on me",
  "Saucer being thanks for checking up",
  "Alien thanks for checking up on me",
  "Space adventurer thanks for checking up",
  "Galactic traveler thanks for checking on me",
];

const tooFat = [
  "Galactic traveler getting too round",
  "Alien getting a little space chunky",
  "Saucer captain getting plump",
  "Space invader getting thick around the middle",
  "Interstellar traveler getting space pudgy",
  "Galactic hero getting a little space hefty",
  "Saucer being getting space doughy",
  "Alien feeling space chunky in the tummy",
  "Space adventurer getting a little space rotund",
  "Galactic traveler getting a little space portly",
];

const lowHealthMessage = [
  "Space bug needs healing nectar",
  "Galactic traveler in need of tonic",
  "Saucer being low on health juice",
  "Alien feeling under the cosmic weather",
  "Space invader requires health elixir",
  "Interstellar traveler in need of potion",
  "Galactic hero requires health potion",
  "Saucer captain in need of healing brew",
  "Alien warrior low on health potion",
  "Space adventurer in need of healing draught",
];

const needsFood = [
  "Galactic traveler needs space food",
  "Alien feeling hangry",
  "Saucer captain needs space snacks",
  "Space invader needs space grub",
  "Interstellar traveler needs space sustenance",
  "Galactic hero needs space nourishment",
  "Saucer being needs space vittles",
  "Alien feeling famished in space",
  "Space adventurer needs space victuals",
  "Galactic traveler needs space provisions",
];

const babySayings = [
  {
    Burp: "I'm a little alien, short and stout!",
    Mood: "happy",
  },
  {
    Burp: "I may be small, but I have big dreams!",
    Mood: "determined",
  },
  {
    Burp: "I come in peace... mostly.",
    Mood: "mischievous",
  },
  {
    Burp: "Don't mind me, I'm just a baby alien learning the ropes.",
    Mood: "innocent",
  },
  {
    Burp: "I may be small, but I have a big appetite!",
    Mood: "hungry",
  },
  {
    Burp: "I may not be able to fly yet, but I'll crawl my way to the top!",
    Mood: "determined",
  },
  {
    Burp: "I may not be able to speak your language, but I can still make weird noises.",
    Mood: "playful",
  },
  {
    Burp: "I may be small, but I have a big personality!",
    Mood: "confident",
  },
  {
    Burp: "I may not be able to walk yet, but I can still wiggle my way around.",
    Mood: "playful",
  },
  {
    Burp: "I may be just a baby, but I still have a lot to learn.",
    Mood: "curious",
  },
  {
    Burp: "I may not be able to understand you, but I can still give you a big alien hug!",
    Mood: "affectionate",
  },
  {
    Burp: "I may not be able to talk yet, but I can still communicate with my big alien eyes.",
    Mood: "curious",
  },
  {
    Burp: "I may be a baby, but I still have a lot of energy to burn!",
    Mood: "energetic",
  },
  {
    Burp: "I may not be able to do much yet, but I'm still a little alien with a lot of potential!",
    Mood: "determined",
  },
  {
    Burp: "I may be small, but I have a big alien brain and I'm always thinking!",
    Mood: "intelligent",
  },
  {
    Burp: "I may not be able to talk yet, but I can still make a lot of noise!",
    Mood: "noisy",
  },
  {
    Burp: "I may be just a baby, but I still have a lot of love to give!",
    Mood: "affectionate",
  },
  {
    Burp: "I may not be able to do much yet, but I'm still a little alien on the rise!",
    Mood: "determined",
  },
  {
    Burp: "I may be small, but I have a big alien heart and I'm always ready to play!",
    Mood: "playful",
  },
  {
    Burp: "I may not be able to walk yet, but I can still crawl my way to adventure!",
    Mood: "adventurous",
  },
];

// Export the speciesList array
module.exports = {
  speciesList,
  specialAbilities,
  lowHealthMessage,
  tooFat,
  needsFood,
  checkUpMessage,
  speciesData,
  babySayings,
};
