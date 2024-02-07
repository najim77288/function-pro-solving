
const bigNumbers = [120, 220, 320, 55, 645, 20];
let smallestNumbers = bigNumbers[0];

for (let i = 1; i < bigNumbers.length; i++) {
    if(bigNumbers[i] < smallestNumbers) {
        smallestNumbers = bigNumbers[i]
    }
}
console.log(smallestNumbers)

