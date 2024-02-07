/*
 ১ টি সিংগারার দাম - ৭ টাকা।
 ১ টি সমুচার দাম - ১০ টাকা ।
 ১ টি জিলাপির দাম - ১০ টাকা ।
*/

function pandaCost (singra, samucha, jilapi) {
 if(typeof singra !== "number" ||typeof samucha !== "number" ||typeof jilapi !== "number"){
    return "Please enter valid integer number"
 } else if (singra < 0 || samucha < 0 || jilapi < 0) {
    return "All parameters should be positive numbers"
 }
    const singraPrice = 7;
    const samuchaPrice = 10;
    const jilapiPrice = 15;

    const total = (singraPrice * singra) + (samuchaPrice * samucha) + ( jilapiPrice * jilapi)
    return total
}
const result = pandaCost (5, 2, -1)
console.log(result)

