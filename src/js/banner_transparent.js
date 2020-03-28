window.onscroll = function () {
    const a = document.documentElement.scrollTop || document.body.scrollTop;     //滚动条y轴上的距离
    let b = location.href.split('/');
    b = b[b.length - 1];

    if (b.includes("index")) {
        if (a > 100) {
            document.querySelector(".banner").style.backgroundColor = "#232a34";
        } else {
            document.querySelector(".banner").style.backgroundColor = "transparent";
        }
    } else {
        document.querySelector(".banner").style.backgroundColor = "#232a34";
    }

    if (a > 200) {
        document.querySelector("#sidebar").style.visibility = "visible";
    } else {
        document.querySelector("#sidebar").style.visibility = "hidden";
    }
};

var search = document.getElementById("search");
var imgGroup = document.querySelector(".imgGroup");
var pagination = document.getElementById("pagination");

search.onclick = function () {
    event.preventDefault();
    imgGroup.style.display = "unset";
    pagination.style.display = "unset";
    var ul = document.createElement('ul');
    var ele =
        '<li class="thumbnail">' +
        '<a href="#">' +
        '<img src="../travel-images/small/5855174537.jpg" alt="图片" width="200" height="250">' +
        '</a>' +
        '<div>' + '<h3>Title</h3>' +
        '<p>四大会计利润还给我看</p>' +
        '</div>' +
        '</li>';
    ul.innerHTML += ele;
    imgGroup.appendChild(ul);
    console.log(1);
};