
// function definitions
// (function () {
// "use strict";
//     function someFunctionNoParameters(){
//         return alert("Hello there, Kalypso!");
//     }
//
//     function someFunctionWithParameter(name){
//         return alert("Hello there," + name);
//     }

// storing your return as a value

// for (.., .., ..) {
// }

// function increment(x) {
//     return x + 1;
// }
//
// var four = increment(3);
// var five = increment(increment(3));
// var six = increment(increment(increment(3)));

// Anonymous Functions [when passed into parent function AKA 'callback' functions]

// console.log(honkHorn());

// function honkHorn(){
//     return "beep beep is working";
// }
//

// var honkHorn = function() {
//     return "beep beep is working for sure!";
// }
//
// console.log(honkHorn());

// a function with no return value
// function shout(message) {
//      alert(message.toUpperCase() + "!!!");
//      return message;
// }
//
// var returnValue = shout('hello there');
// console.log(returnValue); // "hello there"


// default parameter

// function sayHello(name = "Casey"){
//     return alert("Hello there," + name);
// }

//scope

// var globalVar = "Look, I'm Global!"; // declare a global variable
//
// function scopeExample() {
//     // var globalVar = "Look, I'm Local!"; // declare a local variable
//     var localVar = "Look, I'm local!";
//     // alert(localVar); // localVar is accessible here
//     // alert(globalVar); // globalVar is accessible here
//     return localVar;
// }
//
//
// alert(globalVar);
// // scopeExample();
// alert(scopeExample());

// alert(globalVar);
// scopeExample();

// alert(localVar); // localVar is NOT accessible here and this will produce an error

//IIFE : a wall for your JS

//     (function (){
//         "use strict";
//         var globalVar = "Now locked behind an IFFE!";
//     console.log("Console Log: " + globalVar);
//
//         function sayHello(name = "Casey"){
//             return alert("Hello there," + name);
//         }
//
//         sayHello();
//     })();
//
// console.log("hackerz Log: " + globalVar);
//
// // })();