import { sayHello } from "./unit1";

describe("sayHello test", () => {
  it('should return : "Hello world !"', () => {
    expect(sayHello()).toBe("Hello world !");
  });

  it('should return : "Hello Vikito"', () => {
    expect(sayHello("Vikito")).toBe("Hello Vikito");
  });

  it("should return : Bonjour, Victor", () => {
    expect(sayHello("Victor")).toBe("Bonjour, Victor");
  });
});
