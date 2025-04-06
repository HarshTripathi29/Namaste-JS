// what is a callback function in js 

// takes a callback function and the interval after which it is to be called 
setTimeout(function(){
    console.log("timer");
},5000);

function x(y){
    console.log("x");
    y();
}

// y is a callback function 
x(function y(){
    console.log("y");
});


// javascript is asynchronous and single threaded language

// blocking the main thread : we should not block the main thread or the call stack , so we should use async operations in such cases.

// power of callback ? 

// deep about event listeners 

// closures demo with event listeners 

// scope demo with event listeners 

// garbage collection & removeEventListeners


// added an evemt with the button 
// when it would be clicked then a callback function would be called

function attachEventListeners() {
    let count = 0; // 'count' is in the outer lexical scope of the callback

    document.getElementById("clickMe").addEventListener("click", function xyz() {
        // 'xyz' forms a closure — it remembers 'count' even after attachEventListeners is done
        console.log("button clicked", ++count);
    });
}

attachEventListeners(); // attaches one event listener with its own 'count'


// Lexical Scope: 'xyz' can access 'count' because it's defined inside the same scope
// Closure: 'xyz' keeps 'count' alive even after 'attachEventListeners' is finished
