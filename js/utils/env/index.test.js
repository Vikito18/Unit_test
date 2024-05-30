import { isInTestEnv } from ".";

describe("isInTestEnv unit test suites", () => {
  it("should return true", () => {
    expect(isInTestEnv()).toBe(true);
  });
});
