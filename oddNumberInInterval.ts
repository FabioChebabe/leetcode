// function countOdds(low: number, high: number): number {
//   let counter = 0;
//   for (let i = low; i <= high; i++) {
//     if (i % 2 !== 0) {
//       counter++;
//     }
//   }

//   return counter;
// }

function countOdds(low: number, high: number): number {
  const oddsUpToHigh = Math.floor((high + 1) / 2);
  const oddsBeforeLow = Math.floor(low / 2);

  return oddsUpToHigh - oddsBeforeLow;
}

console.log(countOdds(3, 7));
