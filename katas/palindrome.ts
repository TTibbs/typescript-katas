import { reverseString } from "./reverse-string";

export const palindromeChecker = (str: string): boolean => {
  const strReversed = reverseString(str);
  return str === strReversed ? true : false;
};
