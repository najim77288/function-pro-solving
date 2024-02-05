
      // function will be a parameter which will be number
      // 2. convert the number to cube
      //3. return the result 
      //4. return error message if we get other data types
      // instead of numbers


function cubeNumber (number) {
// return error message if we get other data typesinstead of numbers
 if (typeof number !== 'number'){
    return "Please provide a number"
 }

// convert the number to cube
const result = Math.pow(number, 3);
//return the result
return result;
}
console.log(cubeNumber(8))




