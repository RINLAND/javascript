
addEventListener('click', function(event){
    console.log(`page : ${event.pageX}, ${event.pageY}`);
});

$(document).mousemove(function(event){
    $("#target").css({left:event.pageX, top:event.pageY});
});