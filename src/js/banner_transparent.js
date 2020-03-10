window.onscroll = function () {
    const a = document.documentElement.scrollTop || document.body.scrollTop;     //滚动条y轴上的距离
    if (a > 100) {
        document.querySelector(".banner").style.backgroundColor = "#232a34";
    } else {
        document.querySelector(".banner").style.backgroundColor = "transparent";
    }
};
