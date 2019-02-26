// This is a function declaration
function hello1() {
    console.log('Hello World function 1');
}
// This is a function expression
var hello2 = function () {
    console.log('Hello World function 2');
};
// This is also a function expression.
(function () {
    console.log('Hello World function3');
})();


hello1();

hello2();

