// function minOperations(nums: number[]): number {
//   let ops = 0;
//   const n = nums.length;

//   while (nums.some((v) => v !== 0)) {
//     let i = 0;

//     while (i < n) {
//       // pula zeros
//       if (nums[i] === 0) {
//         i++;
//         continue;
//       }

//       // início do bloco não-nulo
//       let j = i;
//       while (j < n && nums[j] !== 0) j++;

//       // encontra o menor valor do bloco
//       let minVal = Infinity;
//       for (let k = i; k < j; k++) {
//         minVal = Math.min(minVal, nums[k]);
//       }

//       // subtrai o mínimo e conta operação
//       for (let k = i; k < j; k++) {
//         if (nums[k] !== 0) nums[k] -= minVal;
//       }

//       ops++; // cada redução de bloco é uma operação
//       i = j;
//     }
//   }

//   return ops;
// }

function minOperations(nums: number[]): number {
  let ops = 0;
  const stack: number[] = [];

  for (const x of nums) {
    if (x === 0) {
      // zero quebra o bloco atual
      stack.length = 0;
      continue;
    }

    // remove camadas maiores que x
    while (stack.length && stack[stack.length - 1] > x) {
      stack.pop();
    }

    // se não temos a camada x aberta, abrimos (conta 1 operação)
    if (stack.length === 0 || stack[stack.length - 1] < x) {
      stack.push(x);
      ops++;
    }
    // se topo == x, já existe a camada; nada a fazer
  }

  return ops;
}

console.log(minOperations([1, 2, 1, 2, 1, 2]));
