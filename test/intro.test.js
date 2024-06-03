import { describe, test, it, expect } from "vitest";
import { expect } from "vitest";
import { factorial } from "../src/intro";
import { calculateAverage } from "../src/intro";
import { max } from "../src/intro";
import { fizzBuzz } from "../src/intro";
describe("Max", () => {
  test("Should return the first arguement if it is greater", () => {
    expect(max(2, 1)).toBe(2);
  });
  test("Should return the second arguement if it is greater", () => {
    expect(max(1, 3)).toBe(3);
  });
  test("Should return the frist arguement if arguement are equal", () => {
    expect(max(3, 3)).toBe(3);
  });
});

describe("Fizz Buzz", () => {
  test("Should return FizzBuzz if divisible by 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });
  test("Should return Fizz if divisible by 3", () => {
    expect(fizzBuzz(9)).toBe("Fizz");
  });
  test("Should return Buzz if divisible by 5", () => {
    expect(fizzBuzz(20)).toBe("Buzz");
  });
  test("If not divisible by non return arguement as a string", () => {
    expect(fizzBuzz(1)).toBe("1");
  });
});
describe("Calculate Average", () => {
  test("Should return NaN if given an empty array", () => {
    expect(calculateAverage([])).toBe(NaN);
  });
  test("Should calculate the average of an array with a single element", () => {
    expect(calculateAverage([1])).toBe(1);
  });
  test("Should calculate the average of an array with a two element", () => {
    expect(calculateAverage([1, 2])).toBe(1.5);
  });
  test("Should calculate the average of an array with a three element", () => {
    expect(calculateAverage([1, 2, 3])).toBe(2);
  });
});
describe("Factorial", () => {
  test("Should return 1 if given 0 ", () => {
    expect(factorial(0)).toBe(1);
  });
  test("Should return 1 if given 1 ", () => {
    expect(factorial(1)).toBe(1);
  });
  test("Should return 2 if given 2", () => {
    expect(factorial(2)).toBe(2 * 1);
  });
  test("Should return 6 if given 3", () => {
    expect(factorial(3)).toBe(6);
  });
  test("Should return 24 if given 4", () => {
    expect(factorial(4)).toBe(24);
  });
  test("Should return undefined if given nagative value", () => {
    expect(factorial(-1)).toBeUndefined(undefined);
  });
});
