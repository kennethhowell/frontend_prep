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


// ~~ ** ~~ k e y b o a r d events ~~ ** ~~


// keydown

// recognizes all keyboard keys when they are pushed down
// repeats as key is held down
//
// $(document).keydown(function(e) {
//     console.log(e);
// });


// keypress

// recognizes the character that is typed
// only recognizes keys that can have a typed output
//
// $(document).keypress(function(e) {
//     console.log(e);
//     //we know we can access PROPERTIES in objects. . therefore:
//     console.log("Key pressed: " + e.key);
// });


// keyup

// recognizes all keyboard keys when they are pushed down
// recognizes all keyboard keys when they are released
// will fire only once per key push

// $(document).keyup(function(e) {
//     console.log(e);
// });
//

// ~~ ** ~~ .on && .off ~~ ** ~~

// .on = can target dynamically [read = created after document loads, think renderCoffee from CoffeeProject]
// LATEST BREAKING NEWS: Fourth best seller announced!! ELF HATS, we need to get this loaded up ASAP

var fourthBestSeller = "<li>Elf hats</li>";

 // $("ol").click(function(){
 //          $("ol").append(fourthBestSeller)
 // })

// $("li").click(function(){
//     alert("CHECK OUT OUR NEW BEST SELLER!")
//     }
// )

// Well that's not EXACTLY what I wanted - it's adding the fourth hat over and over and not alerting our user!
//
// $( "body" ).on( "click", "li", function() {
//     alert($(this).text() + " works!" );
// });

// Excellent - looks like using .on and being a bit specific got us rolling and rocking!
// Now how about a few less list items popping?

// $("ol").click(function(){
//     $("ol").append(fourthBestSeller);
//     // $("ol").off("click")  // specific event off
//     $("ol").off(); // all events for selector off
// })
//
// $( "body" ).on( "click", "li", function() {
//     alert($(this).text() + " works!" );
// });