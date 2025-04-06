const radius = [3, 1, 2, 4]; // An array of circle radii

// Logic function to calculate area of a circle
const area = function(radius) {
    return Math.PI * radius * radius;
}

// Logic function to calculate circumference of a circle
const circumference = function(radius) {
    return 2 * Math.PI * radius;
}

// Higher-Order Function: takes an array and a logic function as parameters
const calculate = function(radius, logic) {
    const output = []; // Array to store the results

    // Loop through each radius value
    for (let i = 0; i < radius.length; i++) {
        // Apply the passed-in logic function to each radius
        output.push(logic(radius[i]));
    }

    return output; // Return the final result array
}

// Call 'calculate' with 'area' logic → returns array of areas
console.log(calculate(radius, area));

// Call 'calculate' with 'circumference' logic → returns array of circumferences
console.log(calculate(radius, circumference));


// 'calculate' is a higher-order function because it takes another function as an argument
// 'area' and 'circumference' are callback functions passed into 'calculate'
// This pattern increases reusability and modularity — logic is separated from iteration
