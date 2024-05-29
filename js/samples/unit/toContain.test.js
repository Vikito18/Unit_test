const nameArray = ["Gregoin", "Serge", "Mr Bean"];

describe("toContain unit test suite", () => {
  it("should contain the name Serge", () => {
    expect(nameArray).toContain("Serge");
  });
  it("should contain the name Vikito", () => {
    expect(nameArray).not.toContain("Vikito");
  });
});
