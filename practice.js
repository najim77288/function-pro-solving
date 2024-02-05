// const heights2 = [167, 190, 120, 165, 137];
// let lowestHeight = heights2[0];  // Assume the first element is the lowest

// for (let i = 1; i < heights2.length; i++) {
//     if (heights2[i] < lowestHeight) {
//         lowestHeight = heights2[i];
//     }
// }
// console.log(lowestHeight);

const heights1 = [167, 190, 120, 165, 137]
let lowestHeight1 = heights1[0];

for (let i = 0; i < heights1.length; i++) {
    if(heights1[i] < lowestHeight1) {
        lowestHeight1 = heights1[i]
    }
}
console.log(lowestHeight1)




const bigNumbers = [120, 220, 320, 55, 645, 20];
let smallestNumbers = bigNumbers[0];

for (let i = 1; i < bigNumbers.length; i++) {
    if(bigNumbers[i] < smallestNumbers) {
        smallestNumbers = bigNumbers[i]
    }
}
console.log(smallestNumbers)