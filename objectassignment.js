var student = {
    name : "saman",
    age : 22
}

var student2 = {
    name : "nimal",
    age : 26
}

student = student2;

student2.age = 23;

console.log(student);