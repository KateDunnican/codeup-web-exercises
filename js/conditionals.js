"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

/* ########################################################################## */
var userNumber = confirm("Would you like to enter a number?");

if (userNumber) {
    var enteredNumber = parseFloat(prompt("please enter the number:"));
    var ISitaNumber = !isNaN(enteredNumber);
    if (typeof ISitaNumber === "number") {
        alert("Your number + 100 = " + (enteredNumber + 100));

        if (enteredNumber % 2 === 0) {
            alert("That number is even");
        } else {
            alert("That number is odd")
        }

        if (enteredNumber > 0) {
            alert("This number is positive")
        } else if (enteredNumber === 0) {
            alert("This number is 0")
        } else {
            alert("This number is negative")
        }
    }

    else {
        alert("This ain't no number man get outta here");
    }

}
else {
    alert("Well fine then")
}

//function version:

function isItNum(x) {
   return !isNaN(x);
}
function isItEven(x) {
    return (x%2 === 0);
}
function plus100(x) {
    return ("Your number + 100 = " + (x + 100));
}
function isNeg(x) {
    return (x < 0);
}
function mainFunc(x) {
    //call all functions
    if (yasNum) {
        var theNUM = prompt("Gimmie dat der number");
        if () {};
        isItNum();
        isItEven();
        plus100();
        isNeg();
    }
}
var yasNum = confirm("You give me number, yas?");
mainFunc(yasNum);



/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(x) {
    var returnPhrase;
    if (x === "red") {
        returnPhrase = "roses are red"
    }
    else if (x === "blue") {
        returnPhrase = "violets are blue"
    }
    else {
        returnPhrase = "cyan lol"
    }
    return returnPhrase;
}

console.log(analyzeColor("blue"));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

function randomColorFunc(x) {
    var returnColor;
    if (x === "red") {
        returnColor = "reeeeddddddd"
    }
    if (x === "orange") {
        returnColor = "oraaaangeeee"
    }
    if (x === "yellow") {
        returnColor = "yeeelllooowwwww"
    }
    if (x === "green") {
        returnColor = "greeeeennnn"
    }
    if (x === "blue") {
        returnColor = "bluueueeee"
    }
    if (x === "indigo") {
        returnColor = "indigoooooo"
    }
    if (x === "violet") {
        returnColor = "violeeeeetttt"
    }
    return returnColor;
}

console.log(randomColorFunc(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

function randomColorFunc2(x) {
    var returnColor2;
    switch (x) {

    case "red":
        returnColor2 = "reeeeddddddd";

    case "orange":
        returnColor2 = "oraaaangeeee";

    case "yellow":
        returnColor2 = "yeeelllooowwwww";

    case "green":
        returnColor2 = "greeeeennnn";

    case "blue" :
        returnColor2 = "bluueueeee";

    case "indigo:":
        returnColor2 = "indigoooooo";

    case "violet:":
        returnColor2 = "violeeeeetttt";

    }
    return returnColor2;
}

console.log(randomColorFunc2(randomColor));


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

var theChosenColor = prompt("Pick a color, any color");
console.log(analyzeColor(theChosenColor));

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

var discount = ['1', '2', '3', '4', '5'];
var randomDiscount = discount[Math.floor(Math.random() * colors.length)];

function calculateTotal(x , y) {
    var returnString;
    if (x === "1") {
        returnString = "Ooooh your NEW total is: $" + (y - (y * .1));
    }
    else if (x === "2"){
        returnString = "Ooooh your NEW total is: $" + (y - (y * .25));
    }
    else if (x === "3"){
        returnString = "Ooooh your NEW total is: $" + (y - (y * .35));
    }
    else if(x === "4"){
        returnString = "Ooooh your NEW total is: $" + (y - (y * .5));
    }
    else{
        returnString = "Ooooh your NEW total is: $" + (y - (y * 1));
    }
    return returnString;
}

console.log(calculateTotal(randomDiscount, 5));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);


var theBill = Number(prompt("What's yo total bill, girl?"));

console.log(calculateTotal(luckyNumber, theBill));



