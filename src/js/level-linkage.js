var city = new Array;
city['中国'] = ['上海', '昆明', '北京', '烟台'];
city['日本'] = ['东京', '大阪', '镰仓'];
city['意大利'] = ['罗马', '米兰', '威尼斯', '佛罗伦萨'];
city['美国'] = ['纽约', '洛杉矶', '华盛顿']

function allCity() {
    var select1 = document.getElementById("country");
    for (var i in city) {
        select1.add(new Option(i, i), null);
    }
    addOption(); // 初始化选项
}

function addOption() {
    var select2 = document.getElementById("city");
    var select1 = document.getElementById("country").value;
    select2.length = 0; //清空一下市级菜单
    if (select1 != 'placeholder') {
        select2.add(new Option("请选择城市", "请选择城市"), null);
        for (var i in city[select1]) {
            select2.add(new Option(city[select1][i], city[select1][i]), null);
        }
    } else {
        select2.length = 0;
        select2.add(new Option("按城市筛选", "按城市筛选"), null);
    }
}

window.onload = allCity();