function x(){
    var a=7;
    function y(){
        console.log(a);
    }
    // Actually the function along with it lexical scope is returned and put inside z : closure
    return y;
}

// the function x() returns y();
var z = x();
console.log(z);

// after the function returns it is popped from the call stack 
// but it is able to access the function x();
z();