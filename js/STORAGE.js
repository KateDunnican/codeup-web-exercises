"use strict";

function divisibleByThree(x) {
    return(x % 3 === 0);
}

function isBoolean(x) {
    return (typeof x === "boolean");
}

function isString(x) {
    return(typeof x === "string");
}


// * Write some JavaScript that uses a `confirm` dialog to ask the user if they
//     * would like to enter a number. If they click 'Ok', prompt the user for a
//     * number, then use 3 separate alerts to tell the user:
//     *
// * - whether the number is even or odd
// * - what the number plus 100 is
// * - if the number is negative or positive
// *
// * if what the user enters is not a number, use an alert to tell them that, and
// * do *not* display any of the above information.
// *
// * Can you refactor your code to use functions?
// */

function idkWhatever(x) {
    var numberYas = confirm("Wanna give me a number?");
    if (numberYas === true) {
       var theNumber = parseFloat(prompt("Lay that shit down"));
    }
    else {alert("fine you lame bitch")}


    if (theNumber % 2 === 0 && theNumber) {
        alert("your shit is even")
    }
    else {alert ("your shit is odd")}

    alert("Your number plus 100 issss:" + (theNumber + 100));

    if (theNumber > 0) {
        alert("your shit is positive")
    }
    else {alert("your shit is negative")}
}

// idkWhatever();

function isPurple(x) {
    var purple = prompt("type purple");
    if (purple.toLowerCase() === "purple") {
        alert("good job, you did it");
    }
    else {
       alert("fuck you man you had ONE JOB");
    }
}
isPurple();



