"use strict";
console.log("Welcome to intro to arrays");
/* ***************************************************************
* 							INTRO TO ARRAYS
*************************************************************** */


// An array is a data structure that holds an ordered list of items
// Each slot in a JavaScript array can hold any type of data



/* ***************************************************************
* 					DECLARING AN ARRAY
*************************************************************** */
// We declare an array with square brackets ==> []

// an empty array ==> []

//An array with one element ==> [1]

// An array with 5 elements ==> [1, 2, 3, 4, 5]

// An array with 3 elements all of different types ==> 	["one", 42, [8, 9, 10]]
// Notice that the array above does *not* have 5 elements, rather the last element is itself an array with 3 elements in it

//TODO TOGETHER: Declare an empty array set equal to the variable `pies` - then console.log `pies`


//TODO TOGETHER: Set the following array equal to `pies` - then console.log `pies`
// ["apple", "cherry", "key lime", "huckleberry"];


// TODO TOGETHER: Set the following array equal to variable called `shapes`. Console.log the variable
//  ['square', 'rectangle', 'circle', 'triangle'];




// TODO: Set the following array equal to a variable called `instructors` - then console.log the variable
//  ["sophie", "vivian", "david", "justin", "daniel", "fernando", "trant", "casey"]

var instructors = ["sophie", "vivian", "david", "justin", "daniel", "fernando", "trant", "casey"];
console.log(instructors);

// TODO: Set the following array equal to a variable called `daysOfTheWeek` - then console.log the variable
//  ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

var daysOfTheWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
console.log(daysOfTheWeek);

// TODO: create an array of favorite foods and set to a variable called `favoriteFoods` - then console.log the variable

var favoriteFoods = ["pizza", "pumpkin pie", "nachos", "tacos", "spaghetti"];
console.log(favoriteFoods);


/* ***************************************************************
* 					COUNTING AN ARRAY
*************************************************************** */

//We can also count the length of an array by using the `.length` property

// TODO TOGETHER: Log the length of shapes array



// TODO: console.log the length of the instructors array
console.log(instructors.length);

// TODO: console.log the length of the daysOfTheWeek array
console.log(daysOfTheWeek.length);

// TODO: console.log the length of the favoriteFoods array
console.log(favoriteFoods.length);


/* ***************************************************************
* 				ACCESSING ARRAY ELEMENTS
*************************************************************** */
// ** NOTE ** Arrays are zero-indexed, which means the first slot in an array is 0.

// TODO TOGETHER: What do we expect the following to output?
// 	console.log(shapes[0]);
// 	console.log(shapes[1]);
// 	console.log(shapes[2]);
// 	console.log(shapes[3]);
// 	console.log(shapes[4]);



// TODO: console.log each element of the instructors array
console.log(instructors[0], instructors[2], instructors[3], instructors[4], instructors[5], instructors[6], instructors[7]);
// TODO: console.log the first three elements of the daysOfTheWeek array
console.log(daysOfTheWeek[0], daysOfTheWeek[1], daysOfTheWeek[2]);
// TODO: console.log the first three elements of the favoriteFoods array
console.log(favoriteFoods[0], favoriteFoods[1], favoriteFoods[2]);


// TODO: create a function called `returnLastElement` that accepts an array and returns the last element of that array

function returnLastElement(x) {
    return x[x.length - 1];
}

/* ***************************************************************
* 					ITERATING ARRAYS
*************************************************************** */
//  TODO TOGETHER: Log each element of the shapes array


// TODO TOGETHER: Using a for loop, iterate through the shapes array and log each shape


// TODO TOGETHER: Alert "that's my favorite shape!" when your favorite shape is iterated over in the loop.




// TODO: What happens if we change var i = 1? or var i = 2;
        // it skips the first 1 or 2 depending on which one you chose
// TODO: What are benefits of using loops to iterate?
        // saves a bunch of time
// TODO: How does the loop know when to stop iterating?
        // you tell it...


// TODO: Using a for loop, iterate through the instructors array and console.log each instructor

    for (var y = 0; y < instructors.length; ++y) {
        console.log(instructors[y]);
    }

// TODO: Using a for loop, iterate through the daysOfTheWeek array and console.log each day of the week

for (var z = 0; z < daysOfTheWeek.length; ++z) {
    console.log(daysOfTheWeek[z]);
}

// TODO: Using a for loop, iterate through the favoriteFoods array and console.log each favorite food

for (var a = 0; a < favoriteFoods.length; ++a) {
    console.log(favoriteFoods[a]);
}

// TODO: Refactoring the instructor loop, alert "hey, I know <INSTRUCTOR NAME HERE>" if you have had class with that instructor. If you have not had class with that instructor, alert "I haven't had class with <INSTRUCTOR NAME HERE> yet!"
//Well I forgot alert was an actual command so here's this instead

for (var b = 0; b < instructors.length; ++b) {
    if (instructors[b] === "vivian" || instructors[b] === "david" || instructors[b] === "casey") {
        console.log("Hey, I know " + instructors[b] + "!");
    }
    else {
        console.log("I haven't had class with " + instructors[b] + " yet!");
    }
}

/* ***************************************************************
* 						FOR EACH ARRAY
*************************************************************** */

// TODO TOGETHER: Using a for each loop, console.log each shape from the shapes array


// TODO TOGETHER: Using a for each loop, console.log each element from the following array:
var pies = ["apple", "cherry", "key lime", "huckleberry"];




// TODO: Using a for each loop, iterate through the instructors array and console.log each instructor

    instructors.forEach(function(x) {
        console.log(x);
    });

// TODO: Using a for each loop, iterate through the daysOfTheWeek array and console.log each day of the week

    daysOfTheWeek.forEach(function(x) {
        console.log(x);
    });


// TODO: Using a for each loop, iterate through the favoriteFoods array and console.log each favorite food

    favoriteFoods.forEach(function(x) {
        console.log(x);
    });
