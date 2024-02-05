//we will write a function named as "matchFinder" whiche will take two input
// will try to find between the two string 
// retturn true/false based on the match
//return error message if parameters are not string

// function matchFinder (string1, string2) {
//     if (typeof string1 !== 'string' || typeof string2 !== 'string') {
//         return "Please specify string as input parameter"
//     }
//     const result = string1.includes(string2)
//     return result
// }
//      console.log(10, matchFinder(5))
     //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

     function matchFinder(string1 = "", string2 = "") {
        if (typeof string1 !== 'string' || typeof string2 !== 'string') {
            return "Please specify string as input parameter";
        }
        const result = string1.includes(string2);
        return result;
    }
    
    console.log(matchFinder("Hello World", "World"));
    
 



      