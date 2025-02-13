/* Given a string s, find the length of the longest substring without repeating characters. */

function longestSubstring(s: string): number {
  let br: number = 1;
  let arr: number[] = [];

  for (let i = 0; i < s.length; i++) {
    br = 1;
    for (let j = i + 1; j < s.length; j++) {
      if (!s.slice(i, j).includes(s[j])) {
        br++;
      } else {
        break;
      }
    }
    arr.push(br);
  }

  return arr.length > 0 ? Math.max(...arr) : 0;
}

console.log(longestSubstring("anastasija"));
