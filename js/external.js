"use strict";

console.log("Hello from external JS!");

//TODO: Make an alert that says "Welcome to my website!"

    alert("Welcome to my website!");

//TODO: Make a prompt to ask the user's fav color, and add alert that says that's your fav color too

    var userInput = prompt("What's your favorite color?");
    console.log('The user entered: ' + userInput);

    alert("What a coincidence, " + userInput + " is my favorite color too!");

//TODO: Complete Ex. 3, prompt to get numbers, alert to show answer.

//Ex 3.1
    var LM = Number(prompt("How many days are you renting The Little Mermaid?"));
    var BB = Number(prompt("How many days are you renting Brother Bear?"));
    var H = Number(prompt("How many days are you renting Hercules?"));
    var finalPrice = ((LM + BB +H)*3);
    alert("Alrighty then!  That's going to cost a total of: $" + finalPrice);

//Ex 3.2
    var GBag = Number(prompt("How much is Google paying you per hour?")); //$400
    var GHours = Number(prompt("How many hours did you work for Google?")); //6hrs
    var ABag = Number(prompt("How much is Amazon paying you per hour?")); //$380
    var AHours = Number(prompt("How many hours did you work for Amazon?")); //4hrs
    var FBag = Number(prompt("How much is Facebook paying you per hour?")); //$350
    var FHours = Number(prompt("How many hours did you work for Facebook?")); //10hrs
    var TheBAG = (GBag*GHours)+(ABag*AHours)+(FBag*FHours);
    alert("Congrats!  You made $" + TheBAG + " this week!");

//Ex 3.3
    var classFullness = prompt("Is the class already full?");
    var classConflict = prompt("Does the student have a schedule conflict with this class?");
    if ((classFullness === "No") && (classConflict === "No")){
        alert("Yay!  The Student can be enrolled!");
    }
    else{
        alert("No enrollment for student! student needs to plan better.");
    }

//Ex 3.4
    var howManyItems = Number(prompt("How many items you got there?"));
    var offerStatus = prompt("Is that offer already expired?");
    var memberStatus = prompt("You look fancy, are you a premium member?");
    if (((howManyItems >= 2) && (offerStatus === "No")) || ((memberStatus === "Yes") && (offerStatus === "No"))) {
        alert("Yay!  You get the offer!")
    }
    else {
        alert("No offer for you!")
    }