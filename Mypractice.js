

// function checkEvenOdd(x){

//     if (typeof x !== "number") {
//         return "Please enter any digit number :"
//     }else if (x < 0) {
//         return "Enter valid a number"
//     }
//   if (x % 2 === 0) {
//     return "Even"
//   }else {
//     return "Odd"
//   }
// }
// const result = checkEvenOdd (-5)
// console.log(result)



// function checkEvenOdd (number) {
//     if(number % 2 == 0) {
//         return "Even NUmber"
//     }else {
//         return "Odd Number"
//     }
// }

//  const result = checkEvenOdd (5);
//  console.log(result)


// function add (x, y) {
 
//     if (typeof x !== "number" || typeof y !== "number") {
//         return "Please enter any valid number "
//     }
//     return x * y;
// }

// const result = add ("l", 4)
// console.log(result)

// function anaToVori(ana) {
//     if (typeof ana !== "number" || ana < 0) {
//         return "Please provid a valid integer number"
//     }
//     const vori = ana * 0.0625;
//         return vori;
//     }
//     const result = anaToVori("naj")
//     console.log(result)

        
        function picnicBudget (perticipents) {

            if(typeof perticipents !== "number" || perticipents < 0) {
                return "Perticipet should be valid positive number";
            }
            let first100Cost = 0;
            let second101To200Cost = 0;
            let remainingCost = 0;
            let totalCost = 0;

            if(perticipents <= 100) {
                first100Cost = perticipents * 5000;
                return first100Cost;
            }else if(perticipents <= 200) {
                first100Cost = 5000 * 100;
                second101To200Cost = (perticipents - 100) * 4000;
                total = first100Cost + second101To200Cost;
                return total;
            } else{
                first100Cost = 5000 * 100;
                second101To200Cost = 4000 * 100;
                remainingCost = (perticipents - 200) * 3000;
                total = first100Cost + second101To200Cost + remainingCost;
                return total;
            }

        }
        const result = picnicBudget (9);
        console.log(result) 


