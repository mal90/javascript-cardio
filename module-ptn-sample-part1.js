var Module = (function () {
  
  var privateMethod = function () {
    console.log('inside private method');
  };

  return {
    privateMethod : privateMethod // exposing private method
  };

})();

Module.privateMethod();