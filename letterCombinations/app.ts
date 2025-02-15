function letterCombinations(digits: string): string[] {
  const types: Record<string, string[]> = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["q", "p", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
  };

  if (!digits.length) return [];

  let arr: string[] = [""];
  for (const digit of digits) {
    const letters: string[] = types[digit];

    arr = arr.flatMap((combination) =>
      letters.map((letter) => combination + letter)
    );
  }

  return arr;
}

console.log(letterCombinations("232"));
console.log(letterCombinations("32"));
