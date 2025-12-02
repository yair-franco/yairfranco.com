$(function() {
    $("#showPoster").one("click", showPoster);
})

function showPoster() {
    const iframe = $("#posterFrame");
    if (!iframe.attr("src")) iframe.attr("src", iframe.data("src"));
    iframe.show();
    $("#showPoster")
        .html("Click to toggle poster")
        .on("click", function(){
            iframe.toggle();
        })
}