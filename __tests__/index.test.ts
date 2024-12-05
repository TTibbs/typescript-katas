import { createPerson } from "../katas/interfaces";
import {
  addNumbers,
  divideNumbers,
  multiplyNumbers,
  subtractNumbers,
} from "../katas/numbers";
import { palindromeChecker } from "../katas/palindrome";
import { reverseArray } from "../katas/reverse-array";
import { reverseString } from "../katas/reverse-string";

describe("String manipulation", () => {
  test("Should successfully reverse a string", () => {
    const result = reverseString("My first TypeScript test");
    const expectedResult: String = "tset tpircSepyT tsrif yM";
    expect(result).toBe(expectedResult);
  });
  test("Should return true if a string is a palindrome", () => {
    const result = palindromeChecker("racecar");
    expect(result).toBe(true);
  });
  test("Should return false if a string is not a palindrome", () => {
    const result = palindromeChecker("not a palindrome");
    expect(result).toBe(false);
  });
});

describe("number katas", () => {
  test("Should add two numbers together", () => {
    const result = addNumbers(1, 2);
    expect(result).toBe(3);
  });
  test("Should subtract two numbers", () => {
    const result = subtractNumbers(10, 5);
    expect(result).toBe(5);
  });
  test("Should multiply two numbers", () => {
    const result = multiplyNumbers(10, 5);
    expect(result).toBe(50);
  });
  test("Should divide two numbers", () => {
    const result = divideNumbers(100, 20);
    expect(result).toBe(5);
  });
});

describe("Interfaces", () => {
  interface Person {
    name: string;
    age: number;
    isStudent: boolean;
  }
  test("Should create a person object with correct types", () => {
    const person: Person = createPerson("Terry", 27, false);
    expect(person).toEqual({ name: "Terry", age: 27, isStudent: false });
  });
});

describe("Arrays", () => {
  test("Should reverse an array of numbers", () => {
    expect(reverseArray<number>([1, 2, 3])).toEqual([3, 2, 1]);
  });
  test("Should reverse an array of strings", () => {
    expect(reverseArray<string>(["a", "b", "c"])).toEqual(["c", "b", "a"]);
  });
});
