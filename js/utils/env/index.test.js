import { isInTestEnv } from ".";

describe("isInTestEnv unit test suites", () => {
  it("should return true test env", () => {
    expect(isInTestEnv()).toBe(true);
  });

  it("should return false not test env", () => {
    process.env.NODE_ENV = "hey";

    expect(isInTestEnv()).toBe(false);
  });
});
