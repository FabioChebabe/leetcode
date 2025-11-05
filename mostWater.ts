// function maxArea(height: number[]): number {
//   let maxValue = 0;
//   let edge = 0;

//   for (let i = 0; i < height.length - 1; i++) {
//     for (let j = i + 1; j < height.length; j++) {
//       if (height[i] > height[j]) {
//         edge = height[j];
//       } else {
//         edge = height[i];
//       }

//       const area = edge * (j - i);

//       if (area > maxValue) {
//         maxValue = area;
//       }
//     }
//   }

//   return maxValue;
// }

// function maxArea(height: number[]): number {
//     let maxValue = 0;
//     let edge = 0;
//     let currentIndex = height.length - 1;
//     let i = 0

//     while (i <= currentIndex){
//         const initialIndex = currentIndex - i
//         if(height[i] < height[currentIndex]){
//             edge = height[i]
//             i++
//         }
//         else {
//             edge = height[currentIndex]
//             currentIndex--
//         }

//         const area = edge*initialIndex
//         if(area > maxValue ){
//             maxValue = area
//         }
//     }

//     return maxValue
// };

//Math.min -- Math.max
//[1,8,6,2,5,4,8,3,7]
//

//Math.min -- Math.max

function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    const width = right - left;

    const minHeight = Math.min(height[left], height[right]);

    const area = width * minHeight;

    max = Math.max(max, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
}
