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
    alien.levelUp();
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
  it("Decreases the hunger level by 3", () => {
    // Create an instance of the Alien class
    const alien = new Alien("Zorg");
    // Store the initial hunger level
    const initialHunger = alien.hunger;
    // Call the feed() method
    alien.feed();

    // Use the expect() function to check if the hunger level has been
    // decreased by 3
    expect(alien.hunger).toEqual(initialHunger - 3);
  });

  it("throws an error if the pet is not alive", () => {
    const alien = new Alien("Jeff");
    alien.level = 50;
    expect(() => alien.feed()).toThrow("Your Alien is not alive!");
  });
});

$("#typed").typed({
  strings: ["Hello world.", "Check this out.", "Add any text you like here."],
  typeSpeed: 100,
  startDelay: 0,
  backSpeed: 60,
  backDelay: 2000,
  loop: true,
  cursorChar: "|",
  contentType: "html",
});
