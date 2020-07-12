$(function(){
    $(".navbar-toggler").blur(function (event){
        var size = window.innerWidth;
        if(size < 768) {
            $("#collapsibleNavbar").collapse('hide');
        }
        console.log("lel")
    });
});
