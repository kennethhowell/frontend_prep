//TODO Together: That's pretty wild, eh! Wonder what else we could get up to with .reduce() - how about we make a function and use .reduce() inside of it? We'll write a function named countWords that takes a sentence in a single string. We need to split that sentence into an array and then write a .reduce() that would let us know how many times each word appeared in the string.

function countWords(sentence) {
    let words = sentence.split(' '); // transform a sentence into an array of words
    let wordCountObject = words.reduce(function(wordCounts, word) {
        if (typeof wordCounts[word] === 'undefined') {
            // if the word is not yet present in our object, set it's value to 1
            wordCounts[word] = 1;
        } else {
            // otherwise increment the existing count
            wordCounts[word] += 1;
        }
        return wordCounts;
    }, {}); // start with an empty object
    return wordCountObject;
}

let sentence = "Mary had a little lamb , little lamb , little lamb";


console.log(countWords(sentence));

//TODO Together: Pretty good, but do we want to count the number of times the comma is involved? If only we had a method that would .filter() - wait! Let's refactor the above function to do just that!

function countWords(sentence) {
    let words = sentence.split(' '); // transform a sentence into an array of words
    words = words.filter(function(word){
        return word !== ",";
    }) //get out of here, comma! as long as the word is not strictly equivalent to a comma in a string, that word is headed into the words array
    let wordCountObject = words.reduce(function(wordCounts, word) {
        if (typeof wordCounts[word] === 'undefined') {
            // if the word is not yet present in our object, set it's value to 1
            wordCounts[word] = 1;
        } else {
            // otherwise increment the existing count
            wordCounts[word] += 1;
        }
        return wordCounts;
    }, {}); // start with an empty object
    return wordCountObject;
}

let sentence = "Mary had a little lamb , little lamb , little lamb";


console.log(countWords(sentence));