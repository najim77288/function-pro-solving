//1. make a function named as "canPay()", this will take two input parameters
//2. Make sum of all the elements of the array
//3. If the sum is greater then equal second input parameter , return true
// 4. return false

//f first input is an empty array, return error message.

function canPay (changeArray, totalDue) {
    if(changeArray.length == 0) {
        return "Your array is empty"
    }
    let sum = 0;
    for (let i= 0; i< changeArray.length;i++) {
        const element = changeArray[i];
        sum += element;
    }
  if(sum >=totalDue) {
    return true;
  }else {
    return false
  }
}
console.log(canPay([1,2,3], 10))