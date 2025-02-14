/*Given a signed 32-bit integer x, return x with its digits reversed.
If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.*/

function reverse(x: number): number {
  const reversedInt = parseInt(x.toString().split("").reverse().join(""));
  if (reversedInt >= Math.pow(2, 31) - 1) return 0;
  const negativeInt = x < 0;
  return negativeInt ? reversedInt * -1 : reversedInt;
}

console.log(reverse(312));
console.log(reverse(-312));
console.log(reverse(1534236469));
