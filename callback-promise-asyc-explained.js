/* In programming languages like e.g Java or C# the “main program flow” happens 
on the main thread or process and “the occurrence of events independently of 
the main program flow” is the spawning of new threads or 
processes that runs code in parallel to the “main program flow”.

This is not the case with JavaScript. 
That is because a JavaScript program is single threaded and all code 
is executed in a sequence, not in parallel. 
In JavaScript this is handled by using what is called 
an “asynchronous non-blocking I/O model”. What that means is that while 
the execution of JavaScript is blocking, I/O operations are not. 
I/O operations can be fetching data over the internet with Ajax or over WebSocket connections, 
querying data from a database such as MongoDB or accessing the filesystem with the NodeJs “fs” module.
All these kind of operations are done in parallel to the execution of
your code and it is not JavaScript that does these operations; to put it simply, 
the underlying engine does it. */

//Callback

/* For JavaScript to know when an asynchronous operation has a result 
(a result being either returned data or an error that occurred during the operation), 
it points to a function that will be executed once that result is ready. This function is what we call a “callback function” */

//callbacks method 1

const request = require("request");
request('https://www.somepage.com', function (error, response, body) {
    if (error) {
        // Handle error.
    }
    else {
        // Successful, do something with the result.
    }
});

////////////////////////////////////////////////

//callbacks method 2 . nicer way to write

const request = require("request");
function handleResponse(error, response, body) {
    if (error) {
        // Handle error.
    }
    else {
        // Successful, do something with the result.
    }
}
request('https://www.somepage.com', handleResponse);

////////////////////////////////////////////////////////////////

//calback method 3 , get undefined value cause using before finish execution


const request = require("request");
let result;
request('http://www.somepage.com', function (error, response, body) {
    if (error) {
        // Handle error.
    }
    else {
        result = body;
    }
});
console.log(result);

/* The last line will output “undefined” to the console because at 
the time that line is being executed, the callback has not been called. 
Even if the request were somehow to complete before the result variable is 
printed to the console (highly unlikely though), 
this code will still run to completion before the callback is executed anyway 
because that is the nature of the non-blocking I/O model in JavaScript. */

//////////////////////////////////////////////////////////////

//calback method 4 AKA callback-hell

request('http://www.somepage.com', function (firstError, firstResponse, firstBody) {
    if (firstError) {
        // Handle error.
    }
    else {
        request(`http://www.somepage.com/${firstBody.someValue}`, function (secondError, secondResponse, secondBody) {
            if (secondError) {
                // Handle error.
            }
            else {
                // Use secondBody for something
            }
        });
    }
});

/* One thing to note here is the first argument in every callback function will contain an error if something went wrong,
 or will be empty if all went well. This pattern is called “error first callbacks” and is very common.
 It is the standard pattern for callback-based APIs in NodeJs. 
 This means that for every callback declared we need to check if there is an error and
  that just adds to the mess when dealing with nested callbacks. */

//////////////////////////////////////////////////////////////

//Promises

/* A promise is an object that wraps an asynchronous operation and notifies when it’s done. 
This sounds exactly like callbacks, but the important differences are in the usage of Promises. 
Instead of providing a callback, a promise has its own methods which you call to tell the promise 
what will happen when it is successful or when it fails. The methods a promise provides are 
“then(…)” for when a successful result is available and “catch(…)” for when something went wrong. */

//Promise method 1

someAsyncOperation(someParams)
    .then(function (result) {
        // Do something with the result
    })
    .catch(function (error) {
        // Handle error
    });


/////////////////////////////////////////////

//Promise mthod  , avoiding callback-hell

const axios = require('axios');
axios.get('http://www.somepage.com')
    .then(function (response) { // Reponse being the result of the first request
        // Returns another promise to the next .then(..) in the chain
        return axios.get(`http://www.somepage.com/${response.someValue}`);
    })
    .then(function (response) { // Reponse being the result of the second request
        // Handle response
    })
    .catch(function (error) {
        // Handle error.
    });

/* Another important thing to notice is that even though we are doing two different asynchronous requests 
we only have one .catch() where we handle our errors. That’s because any error that occurs 
in the Promise chain will stop further execution and an error will end up in the next .catch() in the chain. 
Also a promise call need to have atleast 1 catch block*/


///////////////////////////////////

//Promise method 2 , creating promise , promisification

function getAsyncData(someValue) {
    return new Promise(function (resolve, reject) {
        getData(someValue, function (error, result) {
            if (error) {
                reject(error);
            }
            else {
                resolve(result);
            }
        })
    });
}

getAsyncData("someValue")
    // Calling resolve in the Promise will get us here, to the first then(…)
    .then(function (result) {
        // Do stuff
    })
    // Calling reject in the Promise will get us here, to the catch(…)
    // Also if there is an error in any then(..) it will end up here
    .catch(function (error) {
        // Handle error
    });

///////////////////////////////////

//Promise method 3 , creating promise , using promosify

const { promisify } = require('util');
const getAsyncData = promisify(getData);
getAsyncData('someValue')
    .then(function (result) {
        // Do stuff
    })
    .catch(function (error) {
        // Handle error
    });


//Async / Await
/* Async / Await is a language feature that is a part of the ES7 standard.It was implemented in version 7.6 of NodeJs.
Async is for declaring that a function will handle asynchronous operations and await is used to declare that 
we want to “await” the result of an asynchronous operation inside a function that has the async keyword. */

//Asnyc-await method 1 

async function getSomeAsyncData(value){
    const result = await fetchTheData(someUrl, value);
    return result;
}

///////////////////////////////

//Asnyc-await method 2 with returning promise

function fetchTheData(someValue){
    return new Promise(function(resolve, reject){
        getData(someValue, function(error, result){
            if(error){
                reject(error);
            }
            else{
                resolve(resutl);
            }
        })
    });
}
async function getSomeAsyncData(value){
    const result = await fetchTheData(value);
    return result;
}


///////////////////////////////

//Asnyc-await method 3 with returning promise


async function getSomeData(value){
    const result = await fetchTheData(value);
    return result;
}
getSomeData('someValue')
.then(function(result){
    // Do something with the result
})
.catch(function (error){
    // Handle error
});


///////////////////////////////

//Asnyc-await method 4 error handling 

async function getSomeData(value){
    try {
        const result = await fetchTheData(value);
        return result;
    }
    catch(error){
        // Handle error
    }
}
