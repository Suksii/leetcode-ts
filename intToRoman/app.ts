function intToRoman(num: number): string {
  const romanNums = [
    { value: 1000, roman: "M" },
    { value: 900, roman: "CM" },
    { value: 500, roman: "D" },
    { value: 400, roman: "CD" },
    { value: 100, roman: "C" },
    { value: 90, roman: "XC" },
    { value: 50, roman: "L" },
    { value: 40, roman: "XL" },
    { value: 10, roman: "X" },
    { value: 9, roman: "IX" },
    { value: 5, roman: "V" },
    { value: 4, roman: "IV" },
    { value: 1, roman: "I" },
  ];
  let result: string = "";

  if (num < 0) {
    return "Number must be positive";
  }
  for (const { value, roman } of romanNums) {
    while (num >= value) {
      result += roman;
      num -= value;
    }
  }
  return result;
}
console.log(intToRoman(3749));
console.log(intToRoman(58));
console.log(intToRoman(1994));
console.log(intToRoman(400));
