function Alien(name) {
  this.name = name;
  this.age = 0;
  this.hunger = 0;
  this.fitness = 10;
}

Alien.prototype.growUp = function () {
  // Increment the age property by 1
  this.age++;
  console.log(this.name + "'s age is: " + this.age);

  // Increment the hunger property by 5, but not if it is already at its maximum value of 30
  if (this.hunger < 30) {
    this.hunger += 5;
    console.log(this.name + "'s hunger is: " + this.hunger);
  }

  // Decrement the fitness property by 3, but not if it is already at its minimum value of 0
  if (this.fitness > 0) {
    this.fitness -= 3;
    console.log(this.name + "'s fitness is: " + this.fitness);
  }
};

Alien.prototype.fly = function () {
  // if fitness is less than 10 increment by 4 //
  if (this.fitness < 10) {
    this.fitness += 4;
    console.log(
      this.name + " has been flying! their fitness is now " + this.fitness
    );
  }

  // if fitness is maximum of 10 return message //
  if (this.fitness === 10) {
    console.log(this.name + " is fit enough for intergalactic travel!");
  }
};

// Export the Alien class
module.exports = Alien;
