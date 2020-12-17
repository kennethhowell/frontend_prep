"use strict";

// Where we were before:

 var searchInput = document.getElementById("searchHats");
//
// searchInput.addEventListener("input", function(){
//     console.log(searchInput.value)
// })

 function logSearch(){
    console.log(searchInput.value)
 }

 // searchInput.addEventListener("input", logSearch)


 // jQuery: not top to bottom different, but it helps to understand similar logic / methods in vanilla JavaScript

 // $(searchInput).on("input", function(){
 //     console.log(searchInput.value)
 // })

// $(searchInput).on("input", logSearch);

 //Still have a target [an ID, a class, an element, a variable] chained to an event w/ a callback function
 // $(selector).event(function)

 // .click() - let's use jQuery to add a little December color

// $("#best-seller").click(function(){
//     $(this).css("background-color", "red");
//     $(this).css("color", "lawngreen");
//     $(this).css("width", "max-content");
//
//     $( "ol li:nth-child(even)" ).css( "background-color", "red" );
//     $( "ol li:nth-child(even)" ).css( "color", "antiquewhite" );
//     $( "ol li:nth-child(even)" ).css("width", "max-content");;
//
//     $("ol li:nth-child(odd)").css("background-color", "forestgreen");
//     $("ol li:nth-child(odd)").css("color", "antiquewhite");
//     $("ol li:nth-child(odd)").css("width", "max-content");;
// })

 // .dblclick() + event.target
// similar to click, look for a dbl click on element
// look too: we can see and use event.target to see WHO triggered that event
//
// $( "body" ).dblclick(function( event ) {
//     console.log("User clicked: " + event.target.nodeName);
// });

// Got an idea here: Let's make our DBL CLICKS make our font larger [this vs. event.target]

// function bigFont(){
//     $(this).css("font-size", "200%");
// // }

// $( "body" ).dblclick(bigFont);

 // WOOPS. That made the whole body's font increase!! [make THIS (referring to the body) font-size size double once]

// function bigFont(e){
//     $(e.target).css("font-size", "200%");
// }
//
//
// $( "body" ).dblclick(bigFont);

 // There we go - that's more like it [make the TARGET of this event's font-size double once]


 // .hover() - we've received reports that our Cyberpunk hats might have some bugs in them :| let's use HOVER to show our #bugReport!

// $(".hat-sold:last").hover(function(){
//      $("#bugReport").toggle(500);
//      $(".hat-sold:last").css("text-decoration", "line-through")
// })




