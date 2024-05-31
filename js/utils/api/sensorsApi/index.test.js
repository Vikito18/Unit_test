import { retrieveSensorsData } from ".";
import { data } from "../../../../data/mock-homepage-data";

describe("sensorsApi unit test suite", () => {
  it("should return data", () => {
    expect(retrieveSensorsData()).toBe(data.facades);
  });
});
