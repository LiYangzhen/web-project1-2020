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
    str += " <span></span>";
}
pp[0].innerHTML = str;

var spans = pp[0].getElementsByTagName('span');  //获取p[1]里所有span标签
spans[0].className = 'active';                  //给第一个span标签添加样式 active

for (i = 0; i < len; i++) {
    spans[i].index = i;                             //定义索引值

    spans[i].onmousedown = function () {            //鼠标点击时的事件
        int = clearInterval(int);
        int = setInterval(ar.onclick, 8000);
        for (i = 0; i < len; i++) {
            spans[i].className = "";               //循环清除类名
        }
        if (n > this.index) {
            switch (n) {
                case 1:
                    img2.style.left = "100%";
                    setTimeout(function(){img2.style.opacity = "0";}, 500);
                    img1.style.right = "100%";
                    img1.style.opacity = "1";
                    img1.style.left = "0";
                    break;
                case 2:
                    switch (this.index) {
                        case 0:
                            img3.style.left = "100%";
                            setTimeout(function(){img3.style.opacity = "0";}, 500);
                            img1.style.right = "100%";
                            img1.style.opacity = "1";
                            img1.style.left = "0";
                            break;
                        case 1:
                            img3.style.left = "100%";
                            setTimeout(function(){img3.style.opacity = "0";}, 500);
                            img2.style.right = "100%";
                            img2.style.opacity = "1";
                            img2.style.left = "0";
                            break;
                    }
                    break;
            }
        } else if (n < this.index) {
            switch (n) {
                case 1:
                    img2.style.left = "-100%";
                    setTimeout(function(){img2.style.opacity = "0";}, 500);
                    img3.style.right = "-100%";
                    img3.style.opacity = "1";
                    img3.style.left = "0";
                    break;
                case 0:
                    switch (this.index) {
                        case 1:
                            img1.style.left = "-100%";
                            setTimeout(function(){img1.style.opacity = "0";}, 500);
                            img2.style.right = "-100%";
                            img2.style.opacity = "1";
                            img2.style.left = "0";
                            break;
                        case 2:
                            img1.style.left = "-100%";
                            setTimeout(function(){img1.style.opacity = "0";}, 500);
                            img3.style.right = "-100%";
                            img3.style.opacity = "1";
                            img3.style.left = "0";
                            break;
                    }
                    break;
            }
        }
        n = this.index;
        this.className = 'active';                 //给鼠标移入的圆点添加类名
    };
}
ar.onclick = function () {            //右侧箭头，点击一次图片向右换一张
    int = clearInterval(int);
    int = setInterval(ar.onclick, 8000);
    switch (n) {
        case 0:
            img1.style.left = "-100%";
            setTimeout(function(){img1.style.opacity = "0";}, 500);
            img2.style.right = "-100%";
            img2.style.opacity = "1";
            img2.style.left = "0";
            break;
        case 1:
            img2.style.left = "-100%";
            setTimeout(function(){img2.style.opacity = "0";}, 500);
            img3.style.right = "-100%";
            img3.style.opacity = "1";
            img3.style.left = "0";
            break;
        case 2:
            img3.style.left = "-100%";
            setTimeout(function(){img3.style.opacity = "0";}, 500);
            img1.style.right = "-100%";
            img1.style.opacity = "1";
            img1.style.left = "0";
            break;
    }
    n++;
    if (n > len - 1) {
        n = 0;
    }
    for (i = 0; i < len; i++) {
        spans[i].className = "";
    }
    spans[n].className = "active";
};

al.onclick = function () {        // //左侧箭头，点击一次图片向左换一张
    int = clearInterval(int);
    int = setInterval(ar.onclick, 8000);
    switch (n) {
        case 0:
            img1.style.left = "100%";
            setTimeout(function (){img1.style.opacity = "0";}, 500);
            img3.style.right = "100%";
            img3.style.opacity = "1";
            img3.style.left = "0";
            break;
        case 1:
            img2.style.left = "100%";
            setTimeout(function(){img2.style.opacity = "0";}, 500);
            img1.style.right = "100%";
            img1.style.opacity = "1";
            img1.style.left = "0";
            break;
        case 2:
            img3.style.left = "100%";
            setTimeout(function(){img3.style.opacity = "0";}, 500);
            img2.style.right = "100%";
            img2.style.opacity = "1";
            img2.style.left = "0";
            break;
    }
    n--;
    if (n < 0) {
        n = (len - 1);
    }
    for (i = 0; i < len; i++) {
        spans[i].className = "";
    }
    spans[n].className = "active";
};

int = setInterval(ar.onclick, 8000);
//添加的函数为点击右侧箭头，间隔为5秒