// Example using a function expression
function createObject() {
    console.log('Inside `createObject`:', this.foo);
    return {
      foo: 42,
      bar: function() {
        console.log('Inside `bar`:', this.foo);
      },
    };
  }
  
  createObject.call({foo: 21}).bar(); // override `this` inside createObject
  //////////////////////////////////

  // Example using a arrow function
function createObject() {
    console.log('Inside `createObject`:', this.foo);
    return {
      foo: 42,
      bar: () => console.log('Inside `bar`:', this.foo),
    };
  }
  
  createObject.call({foo: 21}).bar(); // override `this` inside createObject

  //https://stackoverflow.com/questions/34361379/arrow-function-vs-function-declaration-expressions-are-they-equivalent-exch