console.log(x);
// gives x is not defined without line 4

var x=4;
// gives undefined

getName();
// called before its defined and also gets the output

function getName(){
    console.log("Namaste harsh");
}

// getNameArrow();
// gives not a function since memory allocation for arrow functions is done like for variables .
// undefined is assigned in getNameArrow.
// so you cannot use it like a function.

var getNameArrow=()=>{
    console.log("Namaste Arrow");
}

// console.log(getNameArrow);

// getName2();
// this is also treated like a variable

var getName2=()=>{
    console.log("namaste 2 ");
}

// console.log(getName2);
