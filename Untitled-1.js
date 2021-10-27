$(function () {
    $("#index-fill").on("click", () => {
        $(".circle").css({
            "transform": "scale(12)",
            "transition": "750MS"
        }),
            $("body").css("overflow", "hidden")
        //setTimeout(function(){要執行的程式}, 毫秒);
        setTimeout(function () { window.location.href = "./Untitled-2.html"; }, 500);
    })
})