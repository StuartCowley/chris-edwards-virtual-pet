const Alien = require("../src/pet.js");

describe("constructor", () => {
  it("returns an object", () => {
    expect(new Alien("Zorg")).toBeInstanceOf(Object);
  });

  it("Sets the name property of the Alien", () => {
    const alien = new Alien("Zorg");
    expect(alien.name).toEqual("Zorg");
  });

  it("has the starting age of 0", () => {
    const alien = new Alien("Zorg");
    expect(alien.age).toEqual(0);
  });
});

describe("growUp", () => {
  it("increments the age by 1", () => {
    const alien = new Alien("Zorg");
    alien.growUp();
    expect(alien.age).toEqual(1);
    expect(alien.hunger).toEqual(5);
    expect(alien.fitness).toEqual(7);
  });
});

describe("fly", () => {
  it("Increases the fitness of the alien by 4", () => {
    const alien = new Alien("Zorg");
    expect(alien.age).toEqual(1);
    expect(alien.fitness).toEqual(7);
    alien.fly();
    expect(alien.fitness).toEqual(10);
  });
});
