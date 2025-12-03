$(function() {
    $("#showPoster").one("click", showPoster);

    o.onchange = function() {
        if (isMobileDevice()){
            if (o.type.startsWith('portrait')){
                $(".topCont").show();
                $("#rec").show();
            } else {
                $(".topCont").hide();
                $("#rec").hide();
            }
        }
    }
})

const o = window.screen.orientation;

function isMobileDevice() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
}

function showPoster() {
    const iframe = $("#posterFrame");
    if (!iframe.attr("src")) iframe.attr("src", iframe.data("src"));
    iframe.show();
    $("#rec").show();
    $("#showPoster")
        .html("Click to toggle poster")
        .css({"font-size": "16px"})
        .on("click", function(){
            iframe.toggle();
        })
}