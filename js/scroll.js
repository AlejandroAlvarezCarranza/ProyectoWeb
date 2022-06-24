$(document).ready(function() {
    $(".seccion1").click(function () {
        $('html,body').animate({
            scrollTop: $("#primero").offset().top-100
        }, 600);
    });

    $(".seccion2").click(function () {
        $('html,body').animate({
            scrollTop: $("#segundo").offset().top-100
        }, 600);
    });

    $(".seccion3").click(function () {
        $('html,body').animate({
            scrollTop: $("#tercero").offset().top-100
        }, 600);
    });
});