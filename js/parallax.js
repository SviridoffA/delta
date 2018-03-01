 $(window).scroll(function () {
    var st = $(this).scrollTop();
    $(".image-wrap").css({
        "transform" : "translate(0%, "+ st /15 +"%"
    });
    $(".hdimage").css({
        "transform" : "translate(0%, "+ st /20 +"%"
    });
    $(".parallax2").css({
        "transform" : "translate(0%, "+ st /20 +"%"
    });
    $(".parallax3").css({
        "transform" : "translate(0%, "+ st /20 +"%"
    });
    $(".parallax4").css({
        "transform" : "translate(0%, "+ st /7 +"%"
    });
 });
