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
  test("two negative values", () => {
    expect(calculateBonus(-1, -5)).toBe(-6);
  });
  test("increased bonus, but sum not equals to bonus", () => {
    let sum = 50;
    let bonus;
    sum > 50 ? (bonus = 60) : (bonus = sum);
    expect(bonus).toEqual(50);
  });
  test("increased bonus and sum greater then bonus", () => {
    let sum = 51;
    let bonus;
    sum > 50 ? (bonus = 60) : (bonus = sum);
    expect(bonus).toEqual(60);
  });
});
