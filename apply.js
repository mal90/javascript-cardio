// function personContainer() {
//     var person = {  
//        name: "James Smith",
//        hello: function() {
//          console.log(this.name + " says hello " + arguments[1]);
//        }
//     }
//     person.hello.apply(person, arguments);
//   }
//   personContainer("world", "mars"); 

var person = {  
    name: "James Smith",
    hello: function() {
      console.log(this.name + " says hello " + arguments[1]);
    }
 }
 person.hello.apply(person, ["world","mars"]);