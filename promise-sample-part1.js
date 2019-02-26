
const p = new Promise(function(resolve, reject) {
 if (false) {
  resolve("okay");
  } else { 
  reject("not okay") 
 }
}); 

// Consuming the promise
p
 .then((data) => console.log(data))
 .catch((err) => console.log(err));