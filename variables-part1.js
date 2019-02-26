(function(){
    var a = b = 3;
  })();
  
  console.log("a defined? " + (typeof a !== 'undefined'));
  console.log("b defined? " + (typeof b !== 'undefined'));

  /**
   * Note that in here , we are printing the console.log out side of the enclosing function
   */