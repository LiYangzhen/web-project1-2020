var address = ["../travel-images/1080p.jpg", "../travel-images/240123409634303026.jpg", "../travel-images/202820355921412098 (1).jpg"];
var img1 = document.getElementById("scroll-img1");
var img2 = document.getElementById("scroll-img2");
var img3 = document.getElementById("scroll-img3");
var len = address.length;               //图片地址的数量为len
var str = "";
var pp = document.getElementsByClassName("scroll");//获取的是p标签的集合
var al = document.getElementById("al");
var ar = document.getElementById("ar");
var n = 0;
var int;

for (i = 0; i < len; i++) {
    str += ' <span></span>'
}
pp[1].innerHTML = str;

var spans = pp[1].getElementsByTagName('span');  //获取p[1]里所有span标签
spans[0].className = 'active';                  //给第一个span标签添加样式 active

for (i = 0; i < len; i++) {
    spans[i].index = i;              //自定义索引值

    spans[i].onmousedown = function () {            //鼠标点击圆点时的事件
        int = clearInterval(int);
        int = setInterval(ar.onclick, 8000);
        for (i = 0; i < len; i++) {
            spans[i].className = "";               //通过循环，清除所有圆点的类名
        }
        n = this.index;
        this.className = 'active';                 //给鼠标移入的圆点添加类名
        switch (n) {
            case 0:
                img2.style.display = "none";
                img3.style.display = "none";
                img1.style.display = "unset";
                break;
            case 1:
                img1.style.display = "none";
                img3.style.display = "none";
                img2.style.display = "unset";
                break;
            case 2:
                img1.style.display = "none";
                img2.style.display = "none";
                img3.style.display = "unset";
                break;
        }
    }

}

ar.onclick = function () {            //右侧箭头，点击一次图片向右换一张
    int = clearInterval(int);
    int = setInterval(ar.onclick, 8000);
    n++;
    if (n > len - 1) {
        n = 0;
    }
    for (i = 0; i < len; i++) {
        spans[i].className = "";
    }
    spans[n].className = "active";
    switch (n) {
        case 0:
            img2.style.display = "none";
            img3.style.display = "none";
            img1.style.display = "unset";
            break;
        case 1:
            img1.style.display = "none";
            img3.style.display = "none";
            img2.style.display = "unset";
            break;
        case 2:
            img1.style.display = "none";
            img2.style.display = "none";
            img3.style.display = "unset";
            break;
    }
};

al.onclick = function () {        // //左侧箭头，点击一次图片向左换一张
    int = clearInterval(int);
    int = setInterval(ar.onclick, 8000);
    n--;
    if (n < 0) {
        n = (len - 1);
    }
    for (i = 0; i < len; i++) {
        spans[i].className = "";
    }
    spans[n].className = "active";
    switch (n) {
        case 0:
            img2.style.display = "none";
            img3.style.display = "none";
            img1.style.display = "unset";
            break;
        case 1:
            img1.style.display = "none";
            img3.style.display = "none";
            img2.style.display = "unset";
            break;
        case 2:
            img1.style.display = "none";
            img2.style.display = "none";
            img3.style.display = "unset";
            break;
    }
};

int = setInterval(ar.onclick, 8000);             //添加定时器  setInterval（函数，间隔时间单位为毫秒）
//此次添加的函数为点击右侧箭头，间隔为5秒