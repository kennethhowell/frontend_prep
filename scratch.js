//Create a function named showMultiplicationTable that accepts a number and console.logs
// the multiplication table for that number (just multiply by the numbers 1 through 10)

function showMultiplicationTable(num){
    for (let i =1; i <= 10; i++){
        console.log(num + " x " + i + " = " + (num*i))
    }
}

//Use a for loop and the code from the previous
// lessons to generate 10 random numbers between 20 and 200
// and output to the console whether each number is odd or even.

for(var i = 0; i < 10; i++){
    var randomNum = Math.floor(Math.random() * (200 - 20) + 20);
    if (randomNum % 2 === 0){
        console.log(randomNum + " is even")
    } else {
        console.log(randomNum + " is odd")
    }
}


// Create a for loop that uses console.log to create the output shown below.
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

for(var outer = 1; outer <= 9; outer++){
    var output = '';

    for(var inner = 1; inner <= outer; inner++ ){
        console.log("At this point our output bucket has: " + output + " and our outer counter is " + outer)
        output = output + outer;
    }
    console.log(output);
}

//Create a for loop that uses console.log to create the output shown below.

for(var i = 100; i >= 5; i-=5){
    console.log(i);
}

// break _+_ and _+_ continue

while(isNaN(userNum) || (userNum % 2 === 0) || (userNum < 1) || (userNum > 50)){
    var userNum = prompt("Please enter an odd number between 1 and 50")
}

console.log("Number to skip is:" + userNum);

for (var i = 1; i < 50; i++){
    if (i == userNum) {
        console.log("Yikes! Skipping number: " + i)
        continue;
    }
    else if (i % 2 === 0) {
        continue;
    }
    else {
        console.log("Here's an odd number: " + i)
    }
}

// WHILE and DO-WHILE

var x = 2;
while (x < 65536) {
    console.log(x);
    x = x * 2;
}


// ice cream paint job

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
console.log("I have this many cones to sell: " + allCones);

do {
    var conesPurchased = Math.floor(Math.random() * 5) + 1

    if (conesPurchased > allCones){
        console.log("Can't sell you any cones, you wanted " + conesPurchased + ", but all I've got is " + allCones);
    } else {
        allCones = allCones - conesPurchased;
        console.log(conesPurchased + " is how many you want? No problem! " + allCones + " left to sell!");
    }
} while (allCones > 0)

console.log("YEAH, I sold all of my ice cream!");

function bouncingBall(h, bounce, window) {
    let counter = 0;
    if (h > 0 && bounce > 0 && window < h) {
        while (h > window) {
            counter++
            h *= bounce;
            if (h > window) {
                counter++;
            }
        }
        return (counter);
    }else{
        counter = -1;
        return counter
    }
}



// 1. Define a function named `convertHourToSec` that takes in one input Hours. Return the conversation of the number of hours into total seconds. If the input is not numeric or a numeric string, `convertHourToSec`, should return false.
//
// convertHourToSec(0)                 // 0
// convertHourToSec(1)                 // 3600
// convertHourToSec(1.5)               // 5400
// convertHourToSec(true)              // false
// convertHourToSec(-1)                // false
// convertHourToSec(null)              // false
// convertHourToSec("2")               // 7200

// 1. Write a function named `calculateChange` that takes in two inputs, totalPaid and totalCost. If both inputs are numeric or numeric strings, `calculateChange` should return the change after subtracting the cost from the amount paid. The return should be in `$x.xx` format as a string. If either or both inputs are not numeric or numeric strings, `calculateChange` should return false.
//
// calculateChange(7.50, 1.50)         // $6.00
// calculateChange(10, 5)              // $5.00
// calculateChange("100", 50)          // $50.00
// calculateChange(10, true)           // false
// calculateChange([1, 2, 3], 10)      // false
// calculateChange("Codeup", 100)      // false
// calculateChange()                   // false