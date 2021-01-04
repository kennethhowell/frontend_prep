// AJAX - Asynchronous JavaScript and XML (We aren't going to worry much about the XML part for this course).

// AJAX requests will often employ the use of an API (Application Programming Interface), or JSON file and return us information using JavaScript Object Notation (JSON).

// A JSON object will often look like this:

var obj = {
    "key": "value",
    "number": 45,
    "arr": [1, 2, 3]
};

// Notice that the largest difference is the keys are strings (in quotes).

console.log(obj.key);
console.log(obj.number);
console.log(obj.arr);

// We still interact with this object just the same.