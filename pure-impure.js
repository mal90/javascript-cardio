
//pure function
function changeAgePure(person) {
    var newPersonObj = JSON.parse(JSON.stringify(person));
    newPersonObj.age = 25;
    return newPersonObj;
}

function changeAgeImPure(person) {
    var newPersonObj = person;
    newPersonObj.age = 45;
    return newPersonObj;
}

var alex = {
    name: 'Alex',
    age: 30
};

var alexChangedPure = changeAgePure(alex);
var alexChangedImpure = changeAgeImPure(alex);

console.log(alex); // -> { name: 'Alex', age: 30 }
console.log(alexChangedPure); // -> { name: 'Alex', age: 25 }
console.log(alexChangedImpure); // -> { name: 'Alex', age: 25 }