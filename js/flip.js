var ww = $(window).width()

$(function () {
    if (ww >= 768) {
        $(".flip-card-back").css("transform", "rotateX(180deg)");
        $(".flip-card").on("click", () => {
            $(".flip-card-inner").toggleClass("rotate-flipX");
            $(".flip-card-back").toggleClass("rotate-flipX");
            $(".nt-blc").css("opacity", "0");
        })
    } else {
        $(".flip-card-back").css("transform", "rotateY(180deg)");
        $(".flip-card").on("click", () => {
            $(".flip-card-inner").toggleClass("rotate-flipY");
            $(".flip-card-back").toggleClass("rotate-flipY");
        })
        setTimeout(function () {
            $(".nt-blc").css("opacity", "0");
        }, 3000)
    }
})