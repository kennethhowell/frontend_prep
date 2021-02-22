//
// // function definitions
"use strict";

// name = "Douglas";

//     function someFunctionNoParameters(){
//         return alert("Hello there, Marco!");
//     }
//
//     function someFunctionWithParameter(name){
//         return alert("Hello there," + name);
//     }
//
// // A function that returns a value and assign that value to a variable
//
// function increment(num) {
//     return num + 1;
// }
//
// var four = increment(3);
// var five = increment(increment(3));
// var six = increment(increment(increment(3)));
//
// // Or: that return can be passed into another function
//
// function multiplyByTwo(num){
//     return num * 2;
// }
//
// multiplyByTwo(increment(3))
//
// // Anonymous Functions [when passed into parent function AKA 'callback' functions]
//
// console.log(honkHorn()); //hoisting example - up here, what happens when calling a FUNCTION EXPRESSION vs FUNCTION DECLARATION?
//
// function honkHorn(){
//     return "beep beep is working";
// }
//
//
// var honkHorn = function() {
//     return "beep beep";
// }
//
// console.log(honkHorn());
//
// // Without a return: we can execute this action - the return type defaults to undefined
// function shout(message) {
//      alert(message.toUpperCase() + "!!!");
// }
//
// var returnValue = shout('hello there');
// console.log(returnValue); // undefined
//
//
// // Setting a default parameter
//
// function sayHello(name = "Douglas"){
//     return alert("Hello there," + name); //With no argument passed we get "Douglas"
// }
//
// // Local && Global Scope - an issue of accessibility / visibility
//
// var globalVar = "globalVar: Look, I'm Global!"; // declare a global variable
//
// function scopeExample() {
//     var localVar = "localVar: Look, I'm local!";
//     // var globalVar = "function globalVar: I'm actually a local variable with the same name :)"
//     alert(localVar); // localVar is accessible here
//     alert(globalVar); // globalVar is accessible here
//     return "Scope example fired!";
// }
//
//
// alert(globalVar); // globalVar is accessible here
// alert(localVar); // localVar is not accessible here > check the console to find an error!
//
//
// // IIFE : a wall for your JS
//
//     (function (){
//         "use strict";
//         var globalVar = "Now locked behind an IFFE!";
//     console.log("Console Log: " + globalVar);
//
//         function sayHello(name = "Douglas"){
//             return alert("Hello there," + name);
//         }
//
//         sayHello();
//     })();
//
// console.log("hackerz Log: " + globalVar);
//
// // })();

