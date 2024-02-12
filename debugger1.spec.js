const calculateBonus = require("./debugger");

describe("Suite for sum tests", () => {
  test("two positive values less then bonus", () => {
    expect(calculateBonus(1, 9)).toBe(10);
  });
  test("two positive values greater then bonus", () => {
    expect(calculateBonus(50, 9)).toBe(50);
  });
  test("two 0 values", () => {
    expect(calculateBonus(0, 0)).toBe(0);
  });
});
