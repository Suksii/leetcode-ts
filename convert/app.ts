function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;
  let result = "";
  let br = 2 * numRows - 2;

  for (let row = 0; row < numRows; row++) {
    for (let i = row; i < s.length; i += br) {
      result += s[i];
      let s1 = i + br - 2 * row;
      if (row !== 0 && row !== numRows - 1 && s1 < s.length) {
        result += s[s1];
      }
    }
  }
  return result;
}

console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 4));
