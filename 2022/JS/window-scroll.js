$(function () {
    $(window).scroll(function () {
        $("#scroll-down").css("opacity", "0")
        var scrollValue = $(this).scrollTop();
        if (scrollValue > 100) {
            $("#scroll-hide").css("opacity", "0")
        } else {
            $("#scroll-hide").css("opacity", "1")
        }
    })
})