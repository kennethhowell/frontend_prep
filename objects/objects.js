
//What's going on with these objects?
//Well: an OBJECT is a grouping of data + functionality
//Our data. . we call properties [in a 'key:value' pair]
//Our functions . . we call methods.

//Let's set up an object and .log it to see what we're looking at:

// var myCounty = {
//     name: "Bexar", //name: key ; value: "Bexar"
//     countySeat: "San Antonio",
//     currentPop: 2003554
// }

// var myDog = {
//     name: "Fenix",
//     age: 11,
//     breed: "Pembroke Welsh Corgi"
// }

// console.log(myCounty);

// console.log(myDog);

//.log-ing the above gets us the object 'printed' or 'viewed' in the console where we can click into the object to see its shape [properties]

/*
* * * * * * * * * * * * * * * * * * * * * * * * * *
* New Object Instance vs. Object Literal Notation *
* * * * * * * * * * * * * * * * * * * * * * * * * *
*/

// We can call the 'constructor' for an object and use it to create our objects:

// var myObject = new Object();

// console.log(myObject);

//More often, we'll use this object literal notation structure as shown above and below:

// var myObject = {};
//
// console.log(typeof myObject);

//* TODO: Create a new Object and call it 'myCar' using either way to do so shown above (object instance or object literal)



// That's great! But our car object doesn't have much going on, does it? There's no depth or meat to it - how can we fill our object in?

/*
* * * * * * * * * * * * * * * * * * * * * * * * * *
*                   Properties                    *
* * * * * * * * * * * * * * * * * * * * * * * * * *
*/

// We assign properties to objects - properties are pieces of data and fill in the guts / details of our object

//Let's take myCar. . and actually line out what my car is.

// We can use dot notation to do so:

// myCar.make = "Chevrolet";

// Or array notation:

// myCar["model"] = "Silverado";

//In general, dot notation is preferred of the two notations

//We can also set up our objects and properties during object creation
// var sigotherCar = {
//     make: "Honda",
//     model: "Fit",
//     year: 2010
// }


// TODO: Fill in your myCar object with properties of make, model, and year with the correct values. If you don't own a vehicle, fill in the details with your favorite vehicle.

//For me? I'm missing the year for myCar so. .

// myCar.year = 2017;

//Now I have a completed example of the myCar object - the model and make were added above in prior examples

/*
* * * * * * * * * * * * * * * * * * * * * * * * * *
*           Object Properties && Methods          *
* * * * * * * * * * * * * * * * * * * * * * * * * *
*/


/**/
/**/
//With our myCar objects set up, let's start utilizing them and diving into them!
//We can use dot notation or array notation in similar ways to start accessing these properties
//Let's share some information about our cars :)

// console.log("Hey, y'all! I own a " + myCar["make"] + " " + myCar.model) //Should concat from these two properties into this structure like we've been used to doing with variables

//Speaking of variables, we can tap into our prior understanding of assigning variables thus far and assign a property to a variable:

// var myCarYear = myCar.year;

// console.log("Woops - forgot to tell you what year my vehicle is, it's model year " + myCarYear)

//What if we wanted to create a more complicated piece of data? Perhaps a list of our cars FEATURES?

// myCar.features = ["Heated/ventilated seats", "leather", "towing package", "bed liner"]


//Now we could do something like this. . a list of those features in the console
// for (let i = 0; i < myCar.features.length; i++){
//     console.log("Here's one of my car's features: " + myCar.features[i])
// }

// TODO: Add an array of features that your vehicle has!

//What about who owns our car? That could be an object itself if we think it through - the owner has a firstName and a lastName at the very least, right?
//Let's try nesting this object inside of our car object we've been building out

// var carOwner = {firstName: "Kenneth", lastName: "Howell"}

// myCar.owner = carOwner;

// TODO: Nest a 'carOwner' object of your own into this growing myCar object and console.log the results!

// console.log(myCar);

//An object can also contain within itself a method (function). We can set it up similarly to our properties, but with a value that is the function expression

// myCar.turnOn = function () {
//     alert("Putting the key in the ignition - fired up the " + myCar.make + " " + myCar.model + " just fine!")
// }

/*
* * * * * * * * * * * * * * * * * * * * * * * * * *
*                 Arrays of Objects               *
* * * * * * * * * * * * * * * * * * * * * * * * * *
*/

//Let's tie some things together: Let's make a garage with another car!

// sigotherCar = {
//     make: "Honda",
//     model: "Fit",
//     year: 2010,
//     owner: {
//         firstName: "Au.",
//         lastName: "Ga."
//     },
//     turnOn: function () {
//         alert("Putting the key in the ignition - fired up the " + this.make + " " + this.model + " just fine!")
//     }
// }

// var theGarage = [
//     myCar,
//     sigotherCar
// ]

// console.log(theGarage);

//Now: loop through an ARRAY of OBJECTS, accessing our turnOn function for our vehicles
//Also note: we used the keyword *this* on the other vehicle's turnOn function, so this will be a good experiment to see the results


// theGarage.forEach(function(car){
//     car.turnOn();
// })

//One final TODO: A bigger task - set up your own garage and add at least another vehicle into it. Log your garage array to verify it contains the cars you want - once your garage has the right cars, write a loop to access some properties or a method from them!



//scratch below
var value = "banana";

var myArr = value.split("")
var myConsArr = [];

for (var i = 0; i < myArr.length; i++){

    if(myArr[i] === ("a" || "e" || "i" || "o" || "u")){
        myArr[i] = "";
    }
}

var myArr = new Array();

myArr.car1 = "test";
myArr[0] = "test1";
myArr[1] = "test2";

console.log(myArr);
console.log(myArr.car1);


var myArr2 = [];

myArr2.car2 = "2test";
// myArr2[0] = 1;
// myArr2[1] = "2";

console.log(myArr2);
console.log(myArr2.car2);

