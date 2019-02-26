function fullName(firstName) {
    const intro = 'Hello'
    
    function combineNames(lastName) {
      return `${intro} ${firstName} ${lastName}!`
    }
    return combineNames
  }
  const bretFullName = fullName('Bret')
  bretFullName(); //prints `Hello Bret undefined!
  bretFullName('Doucette'); //prints `Hello Bret Doucette!`