window.onscroll = function () {
    const a = document.documentElement.scrollTop || document.body.scrollTop;     //滚动条y轴上的距离
    let b = location.href.split('/');
    b = b[b.length - 1];

    if (b.includes("index") && a > 100) {
        document.querySelector(".banner").style.backgroundColor = "#232a34";
    } else if (b.includes("my")) {
        document.querySelector(".banner").style.backgroundColor = "#232a34";
    } else {
        document.querySelector(".banner").style.backgroundColor = "transparent";
    }

    if (a > 200) {
        document.querySelector("#sidebar").style.visibility = "visible";
    } else {
        document.querySelector("#sidebar").style.visibility = "hidden";
    }

}
;



