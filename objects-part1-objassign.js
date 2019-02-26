/**
 * Object assign creates a deep copy of the given obj ,
 * which means in the memory it will create a separate referrence
 */

var obj = {a: 1 ,b: 2}
var objclone = Object.assign({},obj);

obj.a = 5;
objclone.a = 10;

console.log(obj);
console.log(objclone);

///////////////////////////////////

/**
 * following obj copying will have single referrenece,
 * therefore if you change 1 attribute , it will change in all places
 */

var objref = {a: 1 ,b: 2};

var objref2 = objref;

objref.a = 709 ;

console.log(objref);
console.log(objref2);