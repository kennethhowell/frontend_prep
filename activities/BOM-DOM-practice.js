//TODO: When the #changeBoxSize button is clicked the box should double in size from what it was!

$("#changeBoxSize").click(function(){
    $("#box").css("height", "500px")

    $("#box").css("width", "500px")
})

//TODO: I have two CSS classes - toggleClass1 and toggleClass1 - that are currently unused. When the #toggleClass button is clicked, program a bit of JavaScript to toggle between those classes to see the background-color switch back and forth with each click. Bonus: Write your callback function in a variable and use it instead!

var instructions = function (e){
    if($("#box").hasClass("toggleClass1")){
        $("#box").toggleClass("toggleClass2")
    } else {
        $("#box").toggleClass("toggleClass1")
    }
}

$("#toggleClass").click(instructions)

//TODO: In the #boxInfo element, when the BOX is hovered over the HEIGHT and WIDTH of the box would appear in that HTML area [div]

$("#box").hover(function () {
    var printInfo = $("#box").css("width") + " " + $("#box").css("height");
    $("#boxInfo").html(printInfo);
}, function(){
    $("#boxInfo").html("");
})

//TODO: When the user types in to our #input and then clicks #inputBtn, what they typed into the box should replace what was inside of the span #userName with the input's contents

$("#inputBtn").click(function (){
    $("#userName").html($("#input").val())
})

//TODO: Refactor the above work - after 5 seconds have passed from the user clicking #inputBtn and seeing #userName change, change the entire div of #helloUser to say "Let me know if you want to play a game. ."

$("#inputBtn").click(function (){
    $("#userName").html($("#input").val())
    setTimeout(function(){
        $("#helloUser").html("Let me know if you want to play a game . .")
    }, 5000)
})






