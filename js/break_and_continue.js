"use strict";

console.log("Hey from break_and_continue.js!");


do {
    var x = (prompt("Give me an odd number between 1-50"));
}
while ((x % 2 === 0) || (isNaN(x)));

console.log("Number to skip: " + x);

for (var y = 1; y <50; y+=2) {
    if (x == y) {
        console.log("SKIPPED " + x + "!");
    }
    else {
        console.log(y);
    }
}