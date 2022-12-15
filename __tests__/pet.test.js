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
    expect(alien.level).toEqual(0);
  });
});

describe("levelUp", () => {
  it("increments the level by 1", () => {
    const alien = new Alien("Zorg");
    alien.growUp();
    expect(alien.level).toEqual(1);
    expect(alien.hunger).toEqual(5);
    expect(alien.fitness).toEqual(7);
  });
});

describe("fly", () => {
  it("Increases the fitness of the alien by 4", () => {
    const alien = new Alien("Zorg");
    expect(alien.level).toEqual(0);
    expect(alien.fitness).toEqual(10);
    alien.fly();
    expect(alien.fitness).toEqual(10);
  });
});

describe("feed", () => {
  it("Decreases the hunger level by 3");
  const alien = new Alien("Zorg");
  expect(alien.level).toEqual(1);
  expect(alien.hunger).toEqual(5);
  alien.feed();
  expect(alien.hunger).toEqual(2);
});
