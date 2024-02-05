

        function biggestNumbers (array) {
            let smallestNumbers = array[0];

            for (let i = 0; i < array.length; i++){
                if(array[i] < smallestNumbers) {
                    smallestNumbers = array[i]
                }
            }
            return smallestNumbers;
        }

        const mainNumbers = [120,454,366,77,88,44,55,];
        const counNumbers = biggestNumbers(mainNumbers);
        console.log(counNumbers)