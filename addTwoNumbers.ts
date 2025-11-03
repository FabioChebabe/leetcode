class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// function addTwoNumbers(
//   l1: number[] | null,
//   l2: number[] | null
// ): number[] | null {
//   const numberl1 =
//     l1
//       ?.map((num, index) => Number(String(num) + "0".repeat(index)))
//       .reduce((accumulator, currentValue) => accumulator + currentValue, 0) ??
//     0;
//   const numberl2 =
//     l2
//       ?.map((num, index) => Number(String(num) + "0".repeat(index)))
//       .reduce((accumulator, currentValue) => accumulator + currentValue, 0) ??
//     0;

//   return (numberl1 + numberl2).toString().split("").map(Number).reverse();
// }

function addTwoNumbers(l1: number[], l2: number[]): number[] {
  const result: number[] = [];
  let carry = 0;
  let i = 0;

  while (i < l1.length || i < l2.length || carry > 0) {
    const val1 = l1[i] ?? 0;
    const val2 = l2[i] ?? 0;

    const sum = val1 + val2 + carry;
    result.push(sum % 10);
    carry = Math.floor(sum / 10);
    i++;
  }

  return result;
}

console.log(addTwoNumbers([0], [0]));
