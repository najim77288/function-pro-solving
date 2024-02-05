// Defind a function named "findAddress()" Which will take an object as input.
//2. access the elements of the object.
//3. form the string as give dimple "10,154, earth perfect"
//4 replace the missing property with __

function findAddress (obj) {
    const street = obj.street || "_";
    const house = obj.house || "_";
    const society = obj.society || "_";

    const str = street +","+house+","+society;
    return str;
}
console.log(findAddress({street:10, }))



