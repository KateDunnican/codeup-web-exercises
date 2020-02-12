"use strict";

console.log("Hey gurl hey from for_loops.js");
//
// function showMultiplicationTable(x) {
//     for (var y = 1; y<=10; ++y) {
//        var total = x * y;
//        console.log(x + "x" + y + "=" + total);
//     }
// }
// showMultiplicationTable(7);


// for (var x = 1; x <= 10; ++x) {
//
//     var y = Math.floor(Math.random() * 20) + 180;
//
//     if (y % 2 === 0){
//         console.log((x + " is odd"));
//     }
//     else {
//         console.log((y + " is even"));
//     }
// }

for (var x = 1; x < 10; ++x) {
    var TheNum = "";
    for (var y = 1; y <= x; ++y) {
        TheNum += x;
    }
    console.log(TheNum);
}


