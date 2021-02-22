/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Welcome to our introduction into JavaScript Objects *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */

//What's going on with these objects?
//Well: an OBJECT is a grouping of data + functionality
//Our data. . we call properties [in a 'key:value' pair]
//Our functions . . we call methods.

//Let's set up an object and .log it to see what we're looking at:

var myCounty = {
    name: "Bexar", //name: key ; value: "Bexar"
    countySeat: "San Antonio",
    currentPop: 2003554
}

var myDog = {
    name: "Fenix",
    age: 11,
    breed: "Pembroke Welsh Corgi"
}

//.log-ing the above gets us the object 'printed' or 'viewed' in the console where we can click into the object to see its shape [properties]

/*
* * * * * * * * * * * * * * * * * * * * * * * * * *
* New Object Instance vs. Object Literal Notation *
* * * * * * * * * * * * * * * * * * * * * * * * * *
*/

// We can call the 'constructor' for an object and use it to create our objects:

var myCounty = new Object();

console.log(myCounty);

//More often, we'll use this object literal notation structure as shown above and below:

var myCounty = {};

console.log(typeof myCounty);

//* TODO: Create a new Object and call it 'myCar' using either way to do so shown above (object instance or object literal)


var myCar = {};

console.log(typeof myCar);

// That's great! But our car object doesn't have much going on, does it? There's no depth or meat to it - how can we fill our object in?

/*
* * * * * * * * * * * * * * * * * * * * * * * * * *
*                   Properties                    *
* * * * * * * * * * * * * * * * * * * * * * * * * *
*/

// We assign properties to objects - properties are pieces of data and fill in the guts / details of our object

//Let's take myCar. . and actually line out what my car is.

// We can use dot notation to do so:

myCar.make = "Chevrolet";

// Or array notation:

myCar["model"] = "Silverado";

//In general, dot notation is preferred of the two notations

//We can also set up our objects and properties during object creation
var sigotherCar = {
    model: "Honda",
    make: "Fit",
    year: 2010
}


// TODO: Fill in your myCar object with properties of make, model, and year with the correct values. If you don't own a vehicle, fill in the details with your favorite vehicle.

//For me? I'm missing the year for myCar so. .

myCar.year = 2017;

