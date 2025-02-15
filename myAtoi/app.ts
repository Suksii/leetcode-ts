/*  Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.

The algorithm for myAtoi(string s) is as follows:

Whitespace: Ignore any leading whitespace (" ").
Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity if neither present.
Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
Return the integer as the final result. */

function myAtoi(s: string): number {
  const sArray: string[] = s.trim().split("");
  const numArray: string[] = [];
  const operator: string | null = sArray[0] === "-" ? "-" : null;
  const firstEl: number = sArray[0] === "-" || sArray[0] === "+" ? 1 : 0;
  for (let i = firstEl; i < sArray.length; i++) {
    if (parseInt(sArray[i]) <= 9 && parseInt(sArray[i]) >= 0) {
      numArray.push(sArray[i]);
    } else break;
  }
  let int: number = Number(numArray.join(""));
  int = operator === "-" ? -int : int;
  if (int >= Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
  else if (int <= Math.pow(-2, 31)) return Math.pow(-2, 31);
  else return int;
}

console.log(myAtoi("   1231"));
console.log(myAtoi(" -12 sdad 31"));
console.log(myAtoi(" ad 31"));
console.log(myAtoi("-91283472332"));
