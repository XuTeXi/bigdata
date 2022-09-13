// let priceArr = [
//     { "one": 4000, "price": 1200, "unitPrice": "0.3000" },
//     { "two": 8000, "price": 2000, "unitPrice": "0.2500" },
//     { "three": 40000, "price": 8000, "unitPrice": "0.2000" }
// ]
// let data = [
// ];  


// let spans = '';
// data.forEach(function (item, i) {
//     spans +=
//         ` <span class="${i === 0 ? 'on' : ''}" price='${item.price}' unitPrice='${item.unitPrice}'>${item.times}次</span>
// `
// })
// getEle('.box-4').innerHTML += spans

// let fonts = getEleAll('.box-4 span')
// fonts.forEach(function (item) {
//     item.onclick = function () {
//         fonts.forEach(function (i) {
//             i.className = ''
//         })
//         this.className = 'on'
//         getEle('.price').innerText = '￥' + this.getAttribute('price')
//         getEle('.unitPrice').innerText = '￥' + this.getAttribute('unitPrice')
//     }
// })


// let qian = getEleAll(".qian div");
// console.log(price);
// console.log(qian);
// priceAee.forEach(function(element,i){
//     qian[i].onclick = function(){
//         price +=<div class="${}" ></div>
//     }
// })




window.onload = function() {
    //配置
    var config = {
        vx: 4,	//小球x轴速度,正为右，负为左
        vy: 4,	//小球y轴速度
        height: 2,	//小球高宽，其实为正方形，所以不宜太大
        width: 2,
        count: 200,		//点个数
        color: "121, 162, 185", 	//点颜色
        stroke: "255,215,0", 		//线条颜色
        dist: 6000, 	//点吸附距离
        e_dist: 20000, 	//鼠标吸附加速距离
        max_conn: 10 	//点到点最大连接数
    }

    //调用
    CanvasParticle(config);
}


let data = [
    { "times": 4000, "price": 1200, "unitPrice": "0.3000" },
    { "times": 8000, "price": 2000, "unitPrice": "0.2500" },
    { "times": 40000, "price": 8000, "unitPrice": "0.2000" }
];
let lis =getEleAll('.grade .one');
// console.log(lis);
let pc =getEle('.price_content');
// console.log(pc);
lis.forEach(function(item,i){
    // console.log(item,'1');
    item.addEventListener('click',function(){
        lis.forEach(function(item,i){
            item.classList.remove('active')
        })
        this.classList.add('active');
        pc.innerHTML = `<span>￥${data[i].price} </span> （约${data[i].unitPrice}元/次），仅限企业实名购买`
    })
})