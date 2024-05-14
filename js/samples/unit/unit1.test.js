import { sayHello } from "./unit1";

describe("sayHello test", () => {
  it('should return : "Hello world !"', () => {
    expect(sayHello()).toBe("Hello world !");
  });
});
