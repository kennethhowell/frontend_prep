// first run addOn2

function addOn2 (in1) {
    if ( isNaN(parseFloat(in1))) {
        return false
    } else {
        return in1+2;
    }
}

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