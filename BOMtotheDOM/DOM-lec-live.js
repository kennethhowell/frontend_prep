var idSearch = document.getElementById("hat-search");
console.log(idSearch);

var badidSearch = document.getElementById("sat-hearch");
console.log("Woops - I think I got a bad id " + badidSearch)

var specialOffers = document.getElementsByClassName("special-offer");
console.log(specialOffers);

var elementCollection = document.getElementsByTagName("li");

console.log(elementCollection);

for (var i = 0; i < elementCollection.length; i++){
    console.log(elementCollection[i]);
}