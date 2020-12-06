//~*~ Locating individual elements
var topHeader = document.getElementById("top-header");

// console.log(topHeader)
// What happens if there is no result?
var hopTeader = document.getElementById("hop-teader")
// console.log(hopTeader)

//~*~ Locating lists of elements

//Element List - retrieve by CLASS or TAG
var currentOffers = document.getElementsByClassName("special-offer");
console.log(currentOffers);
console.log(currentOffers[0]);

var topSellers = document.getElementsByTagName("li");
console.log(topSellers);

//Loop through the hatList and print our nodes
//COMPARE BROWSERS: Firefox view vs Chrome view, FF a more complicated print by default?
for (let i = 0; i < topSellers.length; i++){
    console.log(topSellers[i]);
}

//~*~ Accessing form inputs
// var hatInput = document.forms.searchForm.searchHats;
//
// // log the value of the "username" input
// console.log(hatInput.value);

//Change the value live >  open console > change input value > run code

//~*~ Accessing / Modifying Element properties [so I've got a list of this stuff - what now?]
//Accessing innerHTML

//Instead of printing a list of nodes, let's print some text - What HTML is INSIDE our <li>?
for (let i = 0; i < topSellers.length; i++){
    console.log(topSellers[i].innerHTML);
}

//Modifying innerHTML
//Uh oh - these were last month's top seller, WOOPS -
//let's update our <li> to show "Hat TBD" and let's be STRONG about it!
for (let i = 0; i < topSellers.length; i++){
    topSellers[i].innerHTML = "<strong>Hat TBD</strong>";
}

//innerText vs innerHTML
//"Our Top Sellers" seems odd now as well - let's adjust!
var bestSellerHeader = document.getElementById("best-seller");

bestSellerHeader.innerText = "Will update soon!"

//Perhaps a little EMPHASIS will assist - will innerText help?
bestSellerHeader.innerText = "<em>Will update soon!</em>"


//Attribute methods: hasAttribute, getAttribute, setAttribute, removeAttribute

//hasAttribute: return a BOOLEAN if the element has this attribute
var bottomLink = document.getElementById("bottom-link");

console.log(bottomLink.hasAttribute("href")); //true
console.log(bottomLink.hasAttribute("style")); //false

//getAttribute: what's that attribute's value? [the right side of the equation]
console.log(bottomLink.getAttribute("href"));; //"https://www.google.com"

for (let i = 0; i < topSellers.length; i++){
    console.log(topSellers[i].getAttribute("class")); //no nada so we get 3 nulls
}

//setAttribute: let's change that attribute's value!
bottomLink.setAttribute("href","https://www.duckduckgo.com") //Our bottom link's now headed somewhere different

var searchValue = document.getElementById("searchHats"); //Let's change the value of this to something less demanding

searchValue.setAttribute("value", "Find local hats!"); //That sounds better! I think I actually want it to be a PLACEHOLDER though. . :/

searchValue.removeAttribute("value");

searchValue.setAttribute("placeholder", "Find hats in your area") //Excellent! That's the ticket!

//Accessing or Modifying styles

// demonstrate the BODY as a thing to manipulate - the BODY can be targeted as any other thing:

// Get the body element (notice we need to use index 0 of the array!)
var bodyElement = document.getElementsByTagName('body')[0];

// Change the body font color
bodyElement.style.color = "rebeccapurple"; // Dark grey

bodyElement.style['background-color'] = "antiquewhite";
// We had to use [] syntax since the property name has a dash

bodyElement.style.fontFamily = "Helvetica, Verdana, Sans-Serif";
// Replace dashes with camelCase to use standard . syntax