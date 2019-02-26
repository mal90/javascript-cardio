function context() {
    console.log('the context is ' + this);
  }
  var someObject = {};
  context.call(someObject);   
  // Logs: 'the context is [object Object]'
  // This is explicit context. The context is explicitly defined.
  context();
  // Logs: 'the context is [object Window]'
  // This is implicit context. The context is not defined.