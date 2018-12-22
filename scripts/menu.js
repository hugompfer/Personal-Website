var menu = document.getElementById("menu");
var close = false;

window.onscroll = function () {
    if (window.pageYOffset > 10) {
        $("#menu").fadeIn(600);
    } else {
        $("#menu").fadeOut(600);
    }
}


var handleMenu = function () {
    if ($(window).width() <= 768) {
        if (close === false) {
            menu.getElementsByTagName("ul")[0].style.display = "block";
            menu.removeEventListener("click", this);
        }
        close = false;
    }
}

menu.addEventListener("click", handleMenu);

var lis = document.querySelectorAll("nav ul li");
for (var i = 0; i < lis.length; i++) {
    let li = lis[i];
    li.onclick = function () {
        if ($(window).width() <= 768) {
            close = true;
            var id = li.children["0"].hash;
            document.getElementById(id.split("#")[1]).scrollIntoView();
            menu.getElementsByTagName("ul")[0].style.display = "none";
            menu.addEventListener("click", handleMenu);
        }
    };

}

$(window).scroll(function () {
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250);
});
