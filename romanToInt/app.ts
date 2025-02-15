function romanToInt(s: string): number {
  const intNumbers = [
    { symbol: "I", value: 1 },
    { symbol: "V", value: 5 },
    { symbol: "X", value: 10 },
    { symbol: "L", value: 50 },
    { symbol: "C", value: 100 },
    { symbol: "D", value: 500 },
    { symbol: "M", value: 1000 },
  ];
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const currentValue =
      intNumbers.find((num) => num.symbol === s[i])?.value || 0;
    const nextValue =
      intNumbers.find((num) => num.symbol === s[i + 1])?.value || 0;
    if (nextValue && currentValue < nextValue) {
      result -= currentValue;
    } else {
      result += currentValue;
    }
  }
  return result;
}

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
