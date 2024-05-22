const profile = {
  name: "vikito",
  lastname: "DM",
  age: 18,
};

describe("toBe unit test suite", () => {
  it("sould return firstname", () => {
    expect(profile.name).toBe("vikito");
  });
});
