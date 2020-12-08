// window > document > element

//Event Listeners need a TARGET: [an element, a group of elements, window object, etc.]

var topHeader = document.getElementById("top-header");

// .addEventListener has two parts: the WHAT [event to look for] and the WHAT TO DO [event happened! okay, I'll do X!]

//You can use an anonymous function. .
// topHeader.addEventListener("mouseover", function(){
//     console.log("header moused over")
// })

//Or prepare a function to use. .
// function headerLog(event){
//     console.log("header moused over")
// }

//Variables as well. .
var headerLog = function headerLog(){
    console.log("header moused over")
}

topHeader.addEventListener("mouseover", headerLog)

//Remove an event listener works similarly
// var remover = function removeHeaderLog(){
// topHeader.removeEventListener("mouseover", headerLog);
// console.log("No longer tracking header mouseover.")
// }
//
// topHeader.addEventListener("click", remover);

//A more complicated structure:
//Let's access the first LI through the DOM

var topSeller1 = document.getElementsByTagName("li")[0];

// console.log(topSeller1);
topSeller1.addEventListener("mouseover", function(){
    topSeller1.style.fontSize = "2em";
    topSeller1.style.fontFamily = "arial";
    topSeller1.style.fontSize = "2em"
})

var resetBtn = document.getElementById("resetFont");

resetBtn.addEventListener("dblclick", function(){
    topSeller1.style.fontSize = "1em"
})

//PreventDefault
var btmLink = document.getElementById("bottom-link");

btmLink.addEventListener("click", function(e){
    e.preventDefault();
    alert("There's no escaping my hats. o_o")
})

document.addEventListener("keypress", function(e) {
   console.log(e.code);
   if (e.code === "Space") {
      e.preventDefault();
   }
});