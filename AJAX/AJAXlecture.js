// AJAX - Asynchronous JavaScript and XML (We aren't going to worry much about the XML part for this course).

// AJAX requests will often employ the use of an API (Application Programming Interface), or JSON file and return us information using JavaScript Object Notation (JSON).

// A JSON object will often look like this:

var obj = {
    "key": "value",
    "number": 45,
    "arr": [1, 2, 3]
};

// ~*~ .ajax and some introductory requests ~*~

// Notice that the largest difference is the keys are strings (in quotes).
//
// console.log(obj.key);
// console.log(obj.number);
// console.log(obj.arr);

// We still interact with this object just the same.

// .ajax :: our first API request with what we've got

// // .ajax(url) - without any OPTIONS, defaults to a GET request:
// $.ajax("https://api.spoonacular.com/recipes/random?apiKey=" + apiKey).done(function(data){
//     console.log(data);
// })

// .ajax also has a wealth of options we can use in our efforts as programmers:
// This example: Send out a POST request with some DATA
// $.ajax("https://hookb.in/7ZwKPW6eodua99D3Rp6g",
//     {
//         type: "POST",
//         data: {
//             cohort: "Kalypso",
//             type: "Web Development",
//             yearStarted: 2020
//         }
//     })

// Before we move on: Let's get some CAT FACTS together :)
// https://alexwohlbruck.github.io/cat-facts/





// ~*~ working with responses ~*~


// Asynchronous - be careful presuming your data is coming back with immediacy
//
//
// console.time("catAPI");
// var randomFact = $.ajax("https://cat-fact.herokuapp.com/facts/random").done(function(data){
//     console.log(randomFact)
// });
// console.timeEnd("catAPI");

// Different MS = different response times BACK from our API

// console.log("Who wins?");

// .done - when our process is complete [done], do the following [callback function]
//
// $.ajax("https://cat-fact.herokuapp.com/facts/random").done(function(data, status, jqXhr){
//     // alert("AJAX call completed successfully!");
//     console.log("Request status: " + status);
//     console.log("Data returned from server:");
//     console.log(data);
// });

// Above, we've used two parameters in our .done callback function: status and data for different purposes


// .done is not our only option to hookup callback functions to:

// .done = when request completed successfully, do this stuff
// .fail = when request completed unsuccessfully, do this stuff
// .always = always do this stuff

// In action:
// $.ajax("https://cat-fact.herokuapp.com/facts/random").done(function(data, status, jqXhr) {
//     alert("Everything went great! Check out the server's response in the console.");
//     console.log(data);
// }).fail(function(jqXhr, status, error) {
//     alert("There was an error! Check the console for details");
//     console.log("Response status: " + status);
//     console.log("Error object: " + error);
// }).always(function() {
//     alert("This function always runs!");
// });

//Notice that .done and .fail will run one or the other dependent on the outcome, they are exclusive to each other


// Putting our ideas into some motion:
//Our user wants to CLICK A BUTTON and have a RANDOM RECIPE show to them in the view

// $("#rando").click(function(e){
//     e.preventDefault();
//     $.get("https://api.spoonacular.com/recipes/random?apiKey=" + apiKey).done(function(data, status)
//     {
//         // console.log(data.recipes[0].summary) // Stepping into our data. . data > first level ["recipes"] at the 0 index > the property I want ["summary"] from that data object
//
//         $("#recipeContainer").html("<h1>" + data.recipes[0].title + "</h1>"
//             + "<p>" + data.recipes[0].summary + "</p>"
//             + "<h4>Instructions</h4>"
//             + "<p>" + data.recipes[0].instructions + "</p>")
//
//     })
// })

//Our user wants to SEARCH IN A FIELD and have the most RELEVANT RECIPE shown to them in the view

$("#userSearch").click(function(e){
    e.preventDefault();
    let query = $("#searchValue").val();
    $.get("https://api.spoonacular.com/recipes/complexSearch?query=" + query + "&apiKey=" + apiKey + "&instructionsRequired=true").done(function(data, status)
    {
        // console.log(data.results[0]) //looks like it's working - getting an ARRAY of foods up :: notice our structure is different for this API > "results" vs "recipes" as the property to get into
        $("#recipeContainer").html("<h1>" + data.results[0].title + "</h1>"
            + "<img src='" + data.results[0].image + "'>"
        )
    })

})



