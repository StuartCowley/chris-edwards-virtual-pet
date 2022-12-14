function Pet(name) {
  this.name = name;
  this.age = 0;
  this.hunger = 0;
  this.fitness = 10;

  Pet.prototype.growUp = function () {
    // Increment the age property by 1
    this.age++;
    console.log(name + "'s age is: " + this.age);
    this.hunger += 5;
    console.log(name + "'s hunger is: " + this.hunger);
    this.fitness -= 3;
    console.log(name + "'s fitness is: " + this.fitness);
  };
}

// Export the Pet class
module.exports = Pet;
