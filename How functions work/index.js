// when a javascript program is started the global execution context is created 
// Memory Allocation phase : all the variables are defined and initialized with undefined and the functions names 
// pointing to the code block in memory
// Code Execution phase : code is executed line by line and local execution context is created for the funtions 
// and moved to the call stack. when the function implementation is done then the local execution context is popped 
// from the call stack.

var x=1;
a();
b();

console.log(x);

function a(){
    var x=10;
    console.log(x);
}

function b(){
    var x=100;
    console.log(x);
}