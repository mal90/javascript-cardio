var Module = (function () {

  var privateMethod = function (message) {
    console.log(message);
  };

  var publicMethod = function (text) {
    privateMethod(text);
  };
  
  return {
    publicMethod: publicMethod //only exposing the private method
  };

})();

// Example of passing data into a private method
// the private method will then `console.log()` 'Hello!'
Module.publicMethod('Hello!');

var ModuleTwo = (function (Module) {
    
    Module.extension = function () {

    };
    
    return Module;
    
})(Module || {});


console.log(Module);
