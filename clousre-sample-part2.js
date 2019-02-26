var makeCounter = function(){
    var privateCounter = 0; 

    function setPrivateCounter(value){
        /** This method is private to makeCounter function
         * Therefore not visible outside of the lexicol scope of makeCounter
         */
        privateCounter = privateCounter + value;
    }

    var incrementCounter = function(){
        setPrivateCounter(+1);
    };
    
    var decrementCounter = function(){
        setPrivateCounter(-1);
    };

    var getCounterValue = function(){
        console.log(privateCounter);
    };

    return {
        incrementCounter : incrementCounter,
        decrementCounter : decrementCounter,
        getCounterValue  : getCounterValue
    }
}

/** makeCounter() will creates its own lexicol environment which contains 2 private items
 *  1. privateCounter
 *  2. setPrivateCounter
  */
var counter1 = makeCounter(); // This will create counter1 , a separate scope/lexicol environment
var counter2 = makeCounter(); // This will create counter2 , a separate scope/lexicol environment

counter1.getCounterValue();
counter1.incrementCounter();//1
counter1.incrementCounter();//2
counter1.getCounterValue();//2
counter2.getCounterValue();//0



