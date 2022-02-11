$(function () {
    setTimeout(function () {
        $("#fd-in").css("opacity", "1");
    }, 500
    )
    setTimeout(function () {
        $(".circle-wh").css("transform", "scale(15)");
    }, 100
    )
    setTimeout(function () {
        $(".next").css("opacity", "1");
    }, 500
    )
    $("#next").on("click", () => {
        $(".circle-2").css({
            "height": "10px",
            "width": "10px",
            "transform": "scale(250)"
        }),
        $("body").css("overflow", "hidden")
        setTimeout(function () { window.location.href = "./Untitled-3.html"; }, 600);
    })
})