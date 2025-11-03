function optimizedHasSameDigit(s: string): boolean {
  while (s.length > 2) {
    const operationResult = [];
    for (let i = 1; i < s.length; i++) {
      const operation = (parseInt(s[i - 1]) + parseInt(s[i])) % 10;
      operationResult.push(operation);
    }
    s = operationResult.join("");
  }

  return s[0] === s[1];
}

const input = "3902";

console.log(optimizedHasSameDigit(input));
