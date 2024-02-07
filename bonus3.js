

function najimMaker (err) {
    const [x, y] = err;

    if(x < 0 || y < 0) {
        return "Please try again with valid number :"
    } else if (x == y) {
        return "Equal"
    } else if (x > y) {
        return [x,y]
    }else {
        return [ y, x]
    }
}
console.log(najimMaker([9, 3]))

