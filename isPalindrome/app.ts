// Given an integer x, return true if x is a palindrome, and false otherwise.

function isPalindrome(x: number): boolean {
  const numArray: string[] = x.toString().split("");
  const num: string = numArray.join("");
  const reversedArray: string[] = numArray.reverse();
  const reversedNum: string = reversedArray.join("");
  return num === reversedNum;
}

console.log(isPalindrome(121));
console.log(isPalindrome(10));
console.log(isPalindrome(-121));
