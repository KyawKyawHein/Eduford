let nav = $('#nav');
$("#openIcon").click(function (){
    $("#nav").css("right","0px");
})

$("#closeIcon").click(()=>{
    // $("#nav").class.right = '-200px';
    $("#nav").css("right","-300px");
});