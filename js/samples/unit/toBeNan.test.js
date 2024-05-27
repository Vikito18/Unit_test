const sum = (a, b) => a + b;
const string = (a, b) => a * b;

describe("toBeNan unit test suites", () => {
  it("souldn't return a Nan", () => {
    expect(sum(2, 8)).not.toBeNaN();
  });
  it("sould return a Nan", () => {
    expect(string("hello", 8)).toBeNaN();
  });
});
