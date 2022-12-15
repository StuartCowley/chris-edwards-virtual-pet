const { speciesList, specialAbilities } = require("./speciesList.js");

// Min and Max Stats //

const MAX_FITNESS = 10;
const MIN_FITNESS = 0;

const MAX_HUNGER = 20;
const MIN_HUNGER = 0;

function Alien(name) {
  this.name = name;
  this.species = speciesList[Math.floor(Math.random() * speciesList.length)];
  this.level = 0;
  this.health = 100;
  this.XP = 0;
  this.hunger = 0;
  this.fitness = 10;
  this.specialAbilities = [];
}

Alien.prototype.levelUp = function () {
  // Increment the level property by 1
  this.level++;
  // Decrement the fitness property by 3
  this.fitness -= 3;

  // If the level is divisible by 7, assign a new ability to the alien
  if (this.level % 7 === 0) {
    // Generate a random number between 0 and 19
    let randomNumber = Math.floor(Math.random() * 20);

    // Use the random number to select a random ability from the specialAbilities array
    let ability = specialAbilities[randomNumber];

    // Assign the ability to the alien
    this.specialAbilities.push(ability);
  }

  // Generate a random number between 1 and 20
  let health_increase = Math.floor(Math.random() * 20) + 1;

  // Increase the alien's health by the health increase
  this.health += health_increase;

  // If the fitness level is below or equal to 0, set it to 0
  if (this.fitness <= MIN_FITNESS) {
    this.fitness = MIN_FITNESS;
  }

  console.log(this.name + " has leveled up!");

  // Print the stats of the current instance of the Alien class
  console.log("Here are " + this.name + "'s stats:");
  console.log("Level: " + this.level);
  console.log("HP: " + this.health);
  console.log("XP: " + this.XP);
  console.log("Hunger: " + this.hunger);
  console.log("Fitness: " + this.fitness);

  // Increment the hunger property by 5, but not if it is already at its maximum value of 20
  if (this.hunger < MAX_HUNGER) {
    this.hunger += 5;
  }

  // If the hunger property is at its maximum value of 20, warn that the alien needs to eat humans
  if (this.hunger === MAX_HUNGER) {
    console.log(this.name + " is starving and needs to eat humans!");
  }
  // if fitness level is 0 display message warning that alien is fat //
  if (this.fitness <= 0) {
    console.log("WARNING: alien is a fatty and needs to loose some weight");
  }

  // If the hunger level is below 0, set it to 0
  if (this.hunger < MIN_HUNGER) {
    this.hunger = MIN_HUNGER;
  }

  // If the hunger level is above MAX, set it to MAX
  if (this.hunger > MAX_HUNGER) {
    this.hunger = MAX_HUNGER;
  }
};
Alien.prototype.fly = function () {
  // Adds some XP when flying //
  this.XP += 2;
  console.log(this.name + " Gained some XP!");

  // if fitness is less than 10 increment by 2 //
  if (this.fitness < MAX_FITNESS) {
    this.fitness += 2;
    console.log(
      this.name + " has been flying! their fitness is now " + this.fitness
    );
  }

  // if fitness is maximum of 10 return message //
  if (this.fitness === MAX_FITNESS) {
    console.log(this.name + " is fit enough for intergalactic travel!");
  }

  // If the fitness level is below 0, set it to 0 //
  if (this.fitness < MIN_FITNESS) {
    this.fitness = MIN_FITNESS;
  }
};

// If fitness is below MIN_FITNESS, set it to MIN_FITNESS //
if (this.fitness > MIN_FITNESS) {
  this.fitness = MIN_FITNESS;
}

if (this.fitness > MAX_FITNESS) {
  this.fitness = MAX_FITNESS;
}

Alien.prototype.feed = function () {
  // Decreases the hunger level by 3 //
  this.hunger -= 3;
  // Decreases Fitness level by 1 //
  this.fitness -= 1;
  // Checks if the hunger level is below min hunger level //
  if (this.hunger >= 10) {
    console.log(this.name + " is still hungry!");
  } else {
    console.log(this.name + " is full!");
  }
};

// Export the Alien class
module.exports = Alien;
