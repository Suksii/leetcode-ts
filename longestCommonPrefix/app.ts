function longestCommonPrefix(strs: string[]): string[] | string {
  strs.sort();
  const first = strs[0];
  const last = strs[strs.length - 1];

  console.log([first, last]);

  let i = 0;
  while (i < first.length && first[i] === last[i]) {
    i++;
  }
  if (i === 0) return "";
  return first.substring(0, i);
}

console.log(longestCommonPrefix(["flower", "flow", "fight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
