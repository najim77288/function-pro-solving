
function picnicBudget (perticipents) {

    if(typeof perticipents !== "number"|| perticipents < 0) {
        return "Perticipents should be valid positive numbers"
    }else{
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
        }else {
            first100Cost = 5000 * 100;
            second101To200Cost = 4000 * 100;
            remainingCost = (perticipents - 200) * 3000;
            total = first100Cost + second101To200Cost + remainingCost;
            return total
        }
    }
}
console.log(picnicBudget(202))