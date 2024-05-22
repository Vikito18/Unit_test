const profile = {
  name: "vikito",
  lastname: "DM",
  age: 18,
};

const color = "black";

describe("toBe unit test suite", () => {
  it("sould return firstname", () => {
    expect(profile.name).toBe("vikito");
  });

  it("should be black", () => {
    expect(color).toBe("black");
  });

  it("should not return orange", () => {
    expect(color).not.toBe("orange");
  });
});
