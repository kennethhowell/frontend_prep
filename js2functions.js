// first run addOn2

function addOn2 (in1) {
    if ( isNaN(parseFloat(in1))) {
        return false
    } else {
        return in1+2;
    }
}

// function subtract (in1, in2) {
//     if (isNaN(parseFloat(in1) || isNaN(parseFloat(in2)) ){
//
//     }
//
// }
// caught strings concatenating WITHOUT PERMISSION >:O


function addOn2 (in1) {
    if ( isNaN(parseFloat(in1))) {
        return false
    } else {
        return parseFloat(in1)+2;
    }
}

// first run isNegative

function isNegative (input){

    if (isNaN(input)){
        return false
    } else return input < 0;


}

// sneaky strings

function isNegative (input){

    if (isNaN(parseFloat(input))){
        return false
    } else return input < 0;


}


// sneakier strings

function isNegative (input){

    if (isNaN(input) || typeof input != 'number'){
        return false
    } else return input < 0;


}
//
// Write a function named totalPets that accepts an array of objects where each object represents a person, and has a 'pets' property for their owned pets. The function should return the sum of every object's numPets property.
//
// totalPets([
//     {name: 'Fernando Mendoza', pets: 1},
//     {name: 'Douglas Hirsh', pets: 8},
//     {name: 'Kenneth Howell', pets: 2},
// ])
// //11

function totalPets(arr){

    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i].pets;
    }

    return sum;
}


// Write a function named convertAddressToObject that accepts a string that contains a street number (as a string) and street name separated by a space characters, and returns an object with properties streetNumber and streetName.
// convertAddressToObject('8626 Sunny Oaks') // {streetNumber: '8646', streetName: 'Sunny Oaks'}
// convertAddressToObject('5408 Villa Nueva') // {streetNumber: '5408', streetName: 'Villa Nueva'}

function convertAddressToObject(str){
    var streetNum = '';
    var checkstreetName = [];
    var streetName = '';

    streetNum = str.split(' ')[0];
    console.log(streetNum);

    checkstreetName = str.split(' ');
    console.log(checkstreetName);

    if (checkstreetName.length > 2){
        for (let i = 1; i < checkstreetName.length; i++){
            console.log("streetName in:" + streetName)
            streetName = streetName + ' ' + checkstreetName[i];
            console.log("streetName out:" + streetName)
        }
    } else {
        streetName = str.split(' ')[1];
    }

    streetName = streetName.trim();

    return {streetNumber: streetNum, streetName: streetName};

}

function convertAddressToObject(str){
    var streetNum = '';
    var checkstreetName = [];
    var streetName = '';

    streetNum = str.split(' ')[0];

    checkstreetName = str.split(' ');

    if (checkstreetName.length > 2){
        for (let i = 1; i < checkstreetName.length; i++){
            streetName = streetName + ' ' + checkstreetName[i];
        }
    } else {
        streetName = str.split(' ')[1];
    }

    streetName = streetName.trim();

    return {streetNumber: streetNum, streetName: streetName};

}
