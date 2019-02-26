class Cat{
    constructor(color , gender){
        this.color = color;
        this.gender = gender;
    }

    getCatInfo(){
        console.log("cat is " + this.color + " and it is a " + this.gender + " cat.");
    }
}

// let cat1 = new Cat("white","male");
// cat1.getCatInfo();

// let cat2 = new Cat("brown" ,"female");
// cat2.getCatInfo();

///////////////////////////////////////////////////////////////////////////////////////////////

//using function constructors
function Dog(color , gender){
    this.color =  color ;
    this.gender = gender ;

    this.getDogInfo =  function(){
        console.log("dog is " + this.color + " and it is a " + this.gender + " dog.");
    }
}

// dog1 = new Dog("white", "male");
// dog1.getDogInfo();

// dog1 = new Dog("brown", "female");
// dog1.getDogInfo();

///////////////////////////////////////////////////////////////////////////////////////////////

//using object litral

function getFrogObject(color , gender){

    return {
        color : color ,
        gender : gender,
        getFrogDetails : function(){
            console.log("frog is " + this.color + " and it is a " + this.gender + " frog.");
        }
    }

}

let frog1 = getFrogObject("green","male");
frog1.getFrogDetails();

let frog2 = getFrogObject("red","female");
frog2.getFrogDetails();