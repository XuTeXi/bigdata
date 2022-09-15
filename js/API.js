//API分类数据渲染
//获取数据源（模拟服务器端数据）
let apiTypeData = [
    { name: "全部", keyword: "身份证实名", isBold: false },
    { name: "生活服务", keyword: "银行卡", isBold: false },
    { name: "金融科技", keyword: "短信", isBold: true },
    { name: "交通地理", keyword: "天气", isBold: false },
    { name: "充值缴费", keyword: "短信", isBold: false },
    { name: "数据智能", keyword: "手机归属地", isBold: false },
    { name: "企业工商", keyword: "IP", isBold: false },
    { name: "应用开发", keyword: "手机归属地", isBold: false },
    { name: "电子商务", keyword: "IP", isBold: false },
    { name: "吃喝玩乐", keyword: "视频", isBold: false },
    { name: "文娱视频", keyword: "视频", isBold: false },
    { name: "免费接口大全", keyword: "短信", isBold: true },
    { name: "短信", keyword: "身份证实名", isBold: false },
    { name: "汽车", keyword: "银行卡", isBold: false },
    { name: "核验", keyword: "银行卡", isBold: false },
    { name: "最新发布", keyword: "银行卡", isBold: true },
    { name: "API私有化部署", keyword: "身份证实名", isBold: true },
];
let apiHTML = ""
apiTypeData.forEach(function (item) {
    // apiHTML += ` <a>${item.name}</a>`
    // item.isBold ? bold : ''
    apiHTML += ` <a class = " ${item.isBold ? 'bold' : ''}" key="${item.keyword}">${item.name}</a> `
})
// console.log(apiHTML);
// let apiParent = document.querySelector(".API_fenlei .fenlei_list");
let apiParent = getEle(".API_fenlei .fenlei_list");
apiParent.innerHTML = apiHTML;
// console.log(apiParent);

let tagBtn = getEleAll(".API_fenlei a")
// console.log(tagBtn);
tagBtn.forEach(function (item, index) {
    item.addEventListener('click', function () {
        getEle('.search strong').innerText = this.innerText;
        getEle('.search input').placeholder = this.getAttribute('key');
    })
})

// let showChoose = document.querySelector(".fenlei_list a");
let showChoose = getEle(".fenlei_list a");
// showChoose.innerHTML = apiTypeData;




//API列表区域 模拟服务器返回的数据
let listDataArr = [
    //第一行
    { img: "API_01.jpg", name: "2021出行防疫政策指南", price: "免费", isSpecial: false },
    { img: "API_02.jpg", name: "身份证实名认证", price: "￥0.2000/次", isSpecial: true },
    { img: "API_03.jpg", name: "天气预报", price: "免费", isSpecial: false },
    { img: "API_04.jpg", name: "银行卡四元素校验", price: "￥0.3360/次", isSpecial: true },
    { img: "API_05.jpg", name: "短信API服务", price: "￥0.0400/次", isSpecial: true },

    //第二行
    { img: "API_01.jpg", name: "2021出行防疫政策指南", price: "免费", isSpecial: false },
    { img: "API_02.jpg", name: "身份证实名认证", price: "￥0.2000/次", isSpecial: true },
    { img: "API_03.jpg", name: "天气预报", price: "免费", isSpecial: false },
    { img: "API_04.jpg", name: "银行卡四元素校验", price: "￥0.3360/次", isSpecial: true },
    { img: "API_05.jpg", name: "短信API服务", price: "￥0.0400/次", isSpecial: true },
    //第三行
    { img: "API_01.jpg", name: "2021出行防疫政策指南", price: "免费", isSpecial: false },
    { img: "API_02.jpg", name: "身份证实名认证", price: "￥0.2000/次", isSpecial: true },
    { img: "API_03.jpg", name: "天气预报", price: "免费", isSpecial: false },
    { img: "API_04.jpg", name: "银行卡四元素校验", price: "￥0.3360/次", isSpecial: true },
    { img: "API_05.jpg", name: "短信API服务", price: "￥0.0400/次", isSpecial: true },
    //第四行
    { img: "API_01.jpg", name: "2021出行防疫政策指南", price: "免费", isSpecial: false },
    { img: "API_02.jpg", name: "身份证实名认证", price: "￥0.2000/次", isSpecial: true },
    { img: "API_03.jpg", name: "天气预报", price: "免费", isSpecial: false },
    { img: "API_04.jpg", name: "银行卡四元素校验", price: "￥0.3360/次", isSpecial: true },
    { img: "API_05.jpg", name: "短信API服务", price: "￥0.0400/次", isSpecial: true },

];
/* 获取数组，拿到数据 添加li、img、p、h4标签*/
/* 四个标签的样式在api.css文件中写好 */

let api_main = ""
listDataArr.forEach(function (item) {
    api_main += ` <li class="${item.isSpecial ? 'special' : ''}" key = "${item.keyword}">  <img src="../assets/images/${item.img}"> <p>${item.name}</p>  <h4>${item.price}</h4> <a class="apply">申请数据</a> </li> `
})
// console.log(api_main);
/* 在网页中输出 */
// let api_content = document.querySelector(".main ul"); 
let api_content = getEle(".main ul");
api_content.innerHTML = api_main;


//蒙层效果
//点击申请数据按钮，展示蒙层
let applyBtn = getEleAll('.main li .apply')
let mask = getEle('#mask');
let login = getEle('.login');
//遍历所有的数据神奇按钮，添加监听，改变蒙层状态
applyBtn.forEach(function (item, index) {
    item.addEventListener('click', function () {
        mask.style.display = "block";
    })
})
//隐藏蒙层
mask.addEventListener('click', function () {
    mask.style.display = "none"
})
//阻止事件冒泡
login.addEventListener('click', function (e) {
    e.stopPropagation();
})


//扫码登录
// let cs_btn = getEle('.login .cs-btn');
// let an_btn = getEle('.login .an-btn');
// cs_btn.addEventListener('click',function(){
//     cs_btn.style.display = 'block';
//     an_btn.style.display = 'none';
//     console.log("登录隐藏，二维码显示");
// })
// an_btn.addEventListener('click',function(){
//     cs_btn.style.display = 'none';
//     an_btn.style.display = 'block';
//     console.log("二维码隐藏，隐藏显示");
// })

/* 1.获取tab元素集合和对应的div集合 
2.遍历tabs，绑定点击事件
3. 所有div隐藏，所有高亮去掉
4.显示点击对应的div
*/




let tabs = getEleAll(".login .lg-btn span");
console.log(tabs);
let divs = getEleAll(".login .an-btn,.cs-btn");
console.log(divs);
tabs.forEach(function (item, index) {
    item.onclick = function () {
        tabs.forEach(function (element, i) {
            element.className = '';
            divs[i].style.display = "none";
        })
        this.className = "on";
        divs[index].style.display = "block";
    }
})