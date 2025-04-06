// ✅ Function Statement (aka Function Declaration)
// Definition: A function declared using the 'function' keyword at the top level.
// It is hoisted, meaning it can be called before it is defined.
function a() {
    console.log("function statement");
}
a(); // Output: function statement

// ✅ Function Expression
// Definition: A function assigned to a variable. Not hoisted.
// Can be anonymous or named.
var b = function(param1) {
    // This is a named function expression (the returned function is named 'xyz')
    return function xyz() {
        console.log("function expression");
    }
}

b()(); // Output: function expression

// ❌ Anonymous Function (Incorrect Usage)
// Definition: A function without a name. Must be used as part of a function expression or callback.
// The below code will throw an error if uncommented:
/*
function () {
    console.log("anonymous function");
}
*/

// ✅ Correct Usage of Anonymous Function:
var anon = function() {
    console.log("anonymous function used as value");
}
anon(); // Output: anonymous function used as value

// Or used directly as a callback:
setTimeout(function() {
    console.log("anonymous function used as callback");
}, 1000);

// ✅ Named Function Expression
// Definition: A function expression with an internal name.
// Useful for recursion or better stack traces during debugging.
var c = function abc() {
    console.log("named function expression");
}

c(); // Output: named function expression
// abc(); // ❌ ReferenceError: abc is not defined (not accessible outside)

// ✅ Parameters vs Arguments
// Parameters: The named variables in the function definition.
// Arguments: The actual values passed to the function when invoked.
function p(param1, param2) {
    console.log("Parameters are param1 and param2.");
    console.log("Arguments passed are: " + param1 + " and " + param2);
}

p(1, 2); // Output: Parameters are..., Arguments passed are...

// ✅ First-Class Functions / First-Class Citizens
// Definition: In JavaScript, functions are treated like variables.
// They can be passed as arguments, returned from other functions, and assigned to variables.

function greet(fn) {
    fn();
}

greet(function() {
    console.log("First-class function passed as argument");
});

function returnFn() {
    return function() {
        console.log("First-class function returned from another function");
    }
}

returnFn()(); // Output: First-class function returned from another function

// ✅ Arrow Functions
// Definition: A shorter syntax for writing function expressions.
// Does NOT have its own 'this', 'arguments', or 'prototype'.
const arrow = () => {
    console.log("arrow function");
}

arrow(); // Output: arrow function

// Shorter one-liner
const add = (x, y) => x + y;
console.log(add(2, 3)); // Output: 5

// ✅ Summary of Key Concepts:

// 1. Function Declaration is hoisted; Function Expression is not.
// 2. Anonymous functions must be assigned or used directly (e.g., in callbacks).
// 3. Named function expressions help with debugging and recursion.
// 4. Parameters = placeholders in definition, Arguments = actual values passed.
// 5. First-class functions = functions treated as values.
// 6. Arrow functions provide concise syntax, but lack their own 'this' and 'arguments'.

