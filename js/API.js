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
        apiHTML += ` <a class = " ${item.isBold ? 'bold' : ''}">${item.name}</a> `
    })
        console.log(apiHTML);
    let apiParent = document.querySelector(".API_fenlei .fenlei_list");
        apiParent.innerHTML = apiHTML;
        console.log(apiParent);

 
    let showChoose = document.querySelector(".fenlei_list a");
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
listDataArr.forEach(function(item){
    api_main += ` <li class="${item.isSpecial ? 'special' : ''}">  <img src="../assets/images/${item.img}"> <p>${item.name}</p>  <h4>${item.price}</h4></li> `
    })
// console.log(api_main);
/* 在网页中输出 */
let api_content = document.querySelector(".main ul"); 
    api_content.innerHTML = api_main;
  
