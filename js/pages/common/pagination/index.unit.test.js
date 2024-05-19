import Pagination from ".";

describe("Pagination Unit test suites", () => {
  it("should return something", () => {
    expect(Pagination.getNumberOfPages(12)).toBeDefined();
  });
});
