var topHeader = document.getElementById("top-header");
//
// console.log(topHeader);

// var currentOffers = document.getElementsByClassName("special-offer")
//
// console.log(currentOffers);
// console.log(currentOffers[0]);

// var hopTeader = document.getElementById("hop-teader");
//
// console.log(hopTeader);

var topSellers = document.getElementsByTagName("li");
// console.log(topSellers);
//
// for (let i = 0; i < topSellers.length; i++){
//     console.log(topSellers[i]);
// }
//
// var hatInput = document.forms.searchForm.searchHats;
//
// console.log(hatInput.value);

// for (let i = 0; i < topSellers.length; i++){
//     console.log(topSellers[i].innerHTML);
// }

for (let i = 0; i < topSellers.length; i++){
    console.log(topSellers[i].innerHTML = "<strong>Hat TBD</strong>");
}

var bestSellerHeader = document.getElementById("best-seller");
// console.log(bestSellerHeader);

bestSellerHeader.innerText = "Will update soon!";

bestSellerHeader.innerHTML = "<em>Will update soon!</em>";

var bottomLink = document.getElementById("bottom-link");

// console.log(bottomLink.hasAttribute("href"));
//
// console.log(bottomLink.hasAttribute("style"));

// console.log(bottomLink.getAttribute("href"));
//
// for (let i = 0; i < topSellers.length; i++){
//     console.log(topSellers[i].getAttribute("class"));
// }

bottomLink.setAttribute("href","https://www.duckduckgo.com")

var searchValue = document.getElementById("searchHats");

searchValue.setAttribute("value","Find hats in your area")

searchValue.removeAttribute("value");

searchValue.setAttribute("placeholder", "Find local hats!")

// var dataEx = document.getElementsByTagName("th");
//
// for (var i = 0; i < dataEx.length; i++){
//     console.log(dataEx[i].getAttribute("data-dbid"));;
// }

var bodyElement = document.getElementsByTagName("body")[0];

bodyElement.style.color = "rebeccapurple";

bodyElement.style["background-color"] = "antiquewhite";

bodyElement.style.backgroundColor = "white";

for (let i = 0; i < topSellers.length; i++){
    topSellers[i].style.color = "blue";
}

topHeader.style.color = "pink";