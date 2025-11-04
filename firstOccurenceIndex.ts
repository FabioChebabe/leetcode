//hard coded
// function strStr(haystack: string, needle: string): number {
//   let findIndex = 0;
//   for (let i = 0; i < haystack.length; i++) {
//     if (haystack[i] === needle[findIndex]) {
//       findIndex += 1;
//     } else {
//       findIndex = 0;
//     }
//     if (findIndex === needle.length) {
//       return i - (needle.length - 1);
//     }
//   }

//   return -1;
// }

function strStr(haystack: string, needle: string): number {
  return haystack.indexOf(needle);
}

console.log(strStr("sdbutsa", "sad"));
