import Pagination from ".";

describe("Pagination Unit test suites", () => {
  it("should return something", () => {
    expect(Pagination.getNumberOfPages(12)).toBeDefined();
  });

  it(`should return : "0"`, () => {
    expect(Pagination.getNumberOfPages(0)).toBe(0);
  });
});
