import { palindromeChecker } from "../katas/palindrome";
import { reverseString } from "../katas/reverse-string";

describe("reverseString()", () => {
  test("Should successfully reverse a string", () => {
    const result = reverseString("My first TypeScript test");
    const expectedResult: String = "tset tpircSepyT tsrif yM";
    expect(result).toBe(expectedResult);
  });
});

describe("palindromeChecker()", () => {
  test("Should return true if a string is a palindrome", () => {
    const result = palindromeChecker("racecar");
    const expectedResult = true;
    expect(result).toBe(true);
  });
});
