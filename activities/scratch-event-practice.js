var instructions = function(e){
    if($('#box').hasClass("toggleClass1")) {
        $('#box').toggleClass('toggleClass2')
    }
    else{
        $('#box').toggleClass('toggleClass1')
    }
}
$('#toggleClass').click(instructions)