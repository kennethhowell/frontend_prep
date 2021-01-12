{

// ~~ ** es6 ** ~~
// let vs. const
// before:
// 'var' hoists the variable to the top, meaning the following. .

// function checkWeather(isRaining){
//     if(isRaining){
//         var umbrella = "Get an umbrella"
//         console.log(umbrella);
//     } else {
//         var sunglasses = "Grab your glasses"
//         console.log(umbrella);
//     }
// }

//Looks like this when it runs:
// function checkWeather(isRaining){
//     var umbrella, sunglasses; //hoisted to the top
//
//     if(isRaining){
//         umbrella = "Get an umbrella"
//         console.log(umbrella);
//     } else {
//         sunglasses = "Grab your glasses"
//         console.log(umbrella);
//     }
// }

// When false, what happens? an 'undefined' result
// checkWeather(false);

// "It can be said that a variable declared with var is defined throughout the program as compared to let." -geeks4geeks
// https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var


// With let || const: our variables are 'block-scoped' (within a set of curly braces = the 'block')
// We also get a 'ReferenceError' vs. undefined as a result of accessing things out of sorts
    function checkWeatherTwo(isRaining) {
        if (isRaining) {
            let umbrella = "Get an umbrella"
            console.log(umbrella);
        } else {
            let sunglasses = "Grab your glasses!"
            console.log(umbrella);
        }

    }

// checkWeatherTwo(false) //ReferenceError? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError

//  use of let and const
// where we used 'var' before, let's 'let' instead!

    let year = 2021;
    let cohort = "Kalypso";
// console.log("It's " + year + ", and we're studying as the " + cohort + " cohort!")

    cohort = "Luna";

    // console.log("The next cohort after Kalypso is " + cohort);

// const has similarities - it is block-scoped as well, but it cannot have a reassigned value and it must start off with a value

// const incorrect; //'Where's my value, Ken?!'

// const firstName = "Kenneth";
// console.log(firstName + " is my first name");

// firstName = "Casey";
//
// console.log(firstName + " is my first name?"); // can't get down here - const doesn't want to be reassigned!

// Of interest: Not true of the properties of objects!
//
const myCar = {
    make: "Jeep",
    model: "Wrangler",
    year: 2015}

// console.log(myCar);

// myCar = { //declaring it or removing the const to reassign the variable will get us two errors
//     make: "Jeep",
//     model: "Wrangler",
//     year: 2015}
//
// myCar.make = "Chevrolet";
// myCar.model = "Silverado";
// myCar.year = 2017;
// myCar.color = "Teal";
//
// console.log(myCar);


// ~~ ** template strings ** ~~
//Back in ES5 we did:
// var firstName = "Kenneth";
// var lastName = "Howell";
// var HTML = "";
//
// HTML = '<h5>' + firstName + '</h5>'
//         + '<h6>' + lastName + '</h6>'
//         + ' is my name!';
//
// // console.log(HTML);
//
// document.getElementById("printHere").innerHTML = HTML;

//Now, ES6 lets us build this out in a neat way with template strings:
let firstName = "Kenneth";
let lastName = "Howell";


let HTML = `I yelled out, "My name is ${firstName} ${lastName}!"`;

    // console.log(HTML);

    // document.getElementById("printHere").innerHTML = HTML;

//Needs a little more drama! Let's really belt out my name!
//We can run expressions inside of our template strings as well. .

// HTML = `I yelled out, "I SAID MY NAME IS ${firstName.toUpperCase()} ${lastName.toUpperCase()}!"`
// //
// document.getElementById("printHere").innerHTML = HTML;

//An example building out from an object: [imagine working with API results / JSON in this templated way]

let myCars = [{
    make: "Chevrolet",
    model: "Silverado",
    year: 2017},
    {
        make: "Honda",
        model: "Fit",
        year: 2010
    }, {
    make: "Toyota",
        model: "Yaris",
        year: 2018
    }]
//
//
// function carPrint(){
//     let HTML = "";
//     for (let i = 0; i < myCars.length; i++){
//
//         HTML = `This car is a ${myCars[i].make} ${myCars[i].model} with a model year of ${myCars[i].year}<br>`
//         $("#printHere").append(HTML);
//     }
// }
//
// carPrint();

//~~ ** for of loops ** ~~
// for (let singleElement of array){
//     // . . do some stuff with singleElement
// }
// //
// const arr = ["one", "two", "three"];
// //
// for (let ele of arr){
//     console.log(ele);
// }

//TODO:: can we build a little template string to go through the days of the week in the console?

    daysArr = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

// for (let day of daysArr){
//     console.log(`I want to talk about: ${day}`);
// }





//Remember . . : we can use expressions inside of our template strings (above example complicated to have an uppercase first letter)
//     for (let day of daysArr){
//         let HTML = `Today's day to talk about is ${day.charAt(0).toUpperCase() + day.slice(1)}`;
//         console.log(HTML);
//     }

//~~ ** Arrow Functions ** ~~

// Shorthand that sacrifices a little readability for flexibility from the rigid function expression structure we're used to

// let sayHello = function (name) {
//     return 'Hello, ' + name + '!';
// }
// same as
// let sayHello = name => 'Hello, ' + name + '!';

// console.log(sayHello("Walter"));

//TODO: Let's rewrite a SUM function that we might have written at an earlier point in class. .

function sum(a,b){
	return a + b;
}

   // let sum2 = (a,b) => a+b;
   //
   //  console.log(sum2(1, 2));


    //Remove function keyword / function name
    //(a,b){
    // return a + b}
    //Refactor body up to one line
    //(a,b){return a + b}
    //Replace function body / refactor return to arrow
    //(a,b) => a + b
    //Assign to variable for our use
    // const sum = (a, b) => a + b;
    // sum (1,2) // 3


//~~ ** default parameter values ** ~~

// old way
// function sayHello(name) {
// 	if (typeof name === 'undefined') {
// 		name = 'World';
// 	}
//
// 	return 'Hello, ' + name + '!';
// }
//
//     console.log(sayHello("Kalypso"));

function sayHello(name = 'World'){
	return `Hello, ${name}`;
}

    // console.log(sayHello("Kalypso"));
//
//
//
const sayHello2 = (name = "World") => `Hello ${name}`;

    // console.log(sayHello2("Daniel"));
//
//
// console.log(sayHello2());; // "Hello, World!"
// console.log(sayHello2('codeup'));; // "Hello, codeup!"
// }

//Object destructuring:

const person = {
    name: "Codeup",
    age: 6,
};

    //es5
// var name = person.name;
// var age = person.age;

//es6
    const {age} = person;
    const {name} = person
//
console.log(name);
console.log(age);

person.name = "Codie the Duck";
person.age = 2;

console.log(person);

console.log(age);

console.log(person.age + " is our changed age!");

}