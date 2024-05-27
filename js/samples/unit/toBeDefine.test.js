const userName = () => "vikito";

const userAge = 18;

describe("toBeDefined unit test suites", () => {
  it("should return something", () => expect(userName()).toBeDefined());
  it("should also return something", () => expect(userAge).toBeDefined());
});
