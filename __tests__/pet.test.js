const Pet = require("../src/pet.js");

describe("constructor", () => {
  it("returns an object", () => {
    expect(new Pet("Fido")).toBeInstanceOf(Object);
  });

  it("Sets the name property of the Pet", () => {
    const pet = new Pet("Fido");
    expect(pet.name).toEqual("Fido");
  });

  it("has the starting age of 0", () => {
    const pet = new Pet("Fido");
    expect(pet.age).toEqual(0);
  });
});
