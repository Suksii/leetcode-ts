/*  You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself. */

//  done with array of numbers instead of linked lists

function addTwoNumbers(l1: number[], l2: number[]): number[] {
  const num1 = parseInt(l1.reverse().join(""));
  const num2 = parseInt(l2.reverse().join(""));
  const result = (num1 + num2).toString().split("").reverse().map(Number);
  return result;
}

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
