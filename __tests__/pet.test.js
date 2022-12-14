const Pet = require("../src/pet");

describe("constructor", () => {
  it("returns an object", () => {
    expect(new Pet("Fido")).toBeInstanceOf(Object);
  });
});

describe("construtor", () => {
  it("Sets the name property of the Pet", () => {
    const pet = new Pet("Fido");
    expect(pet.name).toEqual("Fido");
  });
});
