window.onload = function() {
    //配置
    var config = {
        vx: 4,	//小球x轴速度,正为右，负为左
        vy: 4,	//小球y轴速度
        height: 2,	//小球高宽，其实为正方形，所以不宜太大
        width: 2,
        count: 200,		//点个数
        color: "121, 162, 185", 	//点颜色
        stroke: "112,128,105", 		//线条颜色
        dist: 6000, 	//点吸附距离
        e_dist: 20000, 	//鼠标吸附加速距离
        max_conn: 10 	//点到点最大连接数
    }

    //调用
    CanvasParticle(config);
}

let dataList = [
    // 重构数据结构
    {
        title: '金融案例',
        enTitle: 'Financial Case',
        data: [
            {
                img: 'szyh.png',
                name: '苏州银行数据API服务系统',
                desc: '苏州银行的前身是江苏东吴农村商业银行股份有限公司，2011年经监管批准，由农村中小金融机构监管序列调整为中小商业银行监管序列。2019年8月2日，苏州银行登陆A股，为全国第33家、江苏省第9家上市银行。2020年3月9日，“2019年中国银行业100强榜单”发布，苏州银行排名第51位。',
                url: './customerDetails.html'
            },
            {
                img: 'hcfc2.png',
                name: '河北幸福消金三方数据管理平台',
                desc: '苏州银行的前身是江苏东吴农村商业银行股份有限公司，2011年经监管批准，由农村中小金融机构监管序列调整为中小商业银行监管序列。2019年8月2日，苏州银行登陆A股，为全国第33家、江苏省第9家上市银行。2020年3月9日，“2019年中国银行业100强榜单”发布，苏州银行排名第51位。',
                url: './customerDetails.html'
            },
            {
                img: 'sznsyh.png',
                name: '苏州农商行数据敏捷共享平台',
                desc: '苏州银行的前身是江苏东吴农村商业银行股份有限公司，2011年经监管批准，由农村中小金融机构监管序列调整为中小商业银行监管序列。2019年8月2日，苏州银行登陆A股，为全国第33家、江苏省第9家上市银行。2020年3月9日，“2019年中国银行业100强榜单”发布，苏州银行排名第51位。',
                url: './customerDetails.html'
            },
        ]
    },
    {
    title:'企业案例',
    enTitle:'business Case',
    data:[
        {
            img:'szyh.png',
            name:'苏州银行数据API服务系统',
            desc:'苏州银行的前身是江苏东吴农村商业银行股份有限公司，2011年经监管批准，由农村中小金融机构监管序列调整为中小商业银行监管序列。2019年8月2日，苏州银行登陆A股，为全国第33家、江苏省第9家上市银行。2020年3月9日，“2019年中国银行业100强榜单”发布，苏州银行排名第51位。',
            url:'./customerDetails.html'
        },
        {
            img:'hcfc2.png',
            name:'河北幸福消金三方数据管理平台',
            desc:'苏州银行的前身是江苏东吴农村商业银行股份有限公司，2011年经监管批准，由农村中小金融机构监管序列调整为中小商业银行监管序列。2019年8月2日，苏州银行登陆A股，为全国第33家、江苏省第9家上市银行。2020年3月9日，“2019年中国银行业100强榜单”发布，苏州银行排名第51位。',
            url:'./customerDetails.html'
        },
        {
            img:'sznsyh.png',
            name:'苏州农商行数据敏捷共享平台',
            desc:'苏州银行的前身是江苏东吴农村商业银行股份有限公司，2011年经监管批准，由农村中小金融机构监管序列调整为中小商业银行监管序列。2019年8月2日，苏州银行登陆A股，为全国第33家、江苏省第9家上市银行。2020年3月9日，“2019年中国银行业100强榜单”发布，苏州银行排名第51位。',
            url:'./customerDetails.html'
        },
    ]
},
{
    title:'政府案例',
    enTitle:'Government Case',
    data:[
        {
            img:'szyh.png',
            name:'苏州银行数据API服务系统',
            desc:'苏州银行的前身是江苏东吴农村商业银行股份有限公司，2011年经监管批准，由农村中小金融机构监管序列调整为中小商业银行监管序列。2019年8月2日，苏州银行登陆A股，为全国第33家、江苏省第9家上市银行。2020年3月9日，“2019年中国银行业100强榜单”发布，苏州银行排名第51位。',
            url:'./customerDetails.html'
        },
        {
            img:'hcfc2.png',
            name:'河北幸福消金三方数据管理平台',
            desc:'苏州银行的前身是江苏东吴农村商业银行股份有限公司，2011年经监管批准，由农村中小金融机构监管序列调整为中小商业银行监管序列。2019年8月2日，苏州银行登陆A股，为全国第33家、江苏省第9家上市银行。2020年3月9日，“2019年中国银行业100强榜单”发布，苏州银行排名第51位。',
            url:'./customerDetails.html'
        },
        {
            img:'sznsyh.png',
            name:'苏州农商行数据敏捷共享平台',
            desc:'苏州银行的前身是江苏东吴农村商业银行股份有限公司，2011年经监管批准，由农村中小金融机构监管序列调整为中小商业银行监管序列。2019年8月2日，苏州银行登陆A股，为全国第33家、江苏省第9家上市银行。2020年3月9日，“2019年中国银行业100强榜单”发布，苏州银行排名第51位。',
            url:'./customerDetails.html'
        },
    ]
}
];


let HtmlStr = ""  //先定义一个字符串
dataList.forEach(function (v) {
    HtmlStr += `
    <div class="frist">
        
            <h2>${v.title}
                <span class="entitle">${v.enTitle}</span>
            </h2>
      
        <ul class="hang">
    `;
    //内循环开始
    v.data.forEach(function(v){
        HtmlStr+=`
        <li>
            <img class="img" src="../assets/images/${v.img}" alt="">
            <h3 class="sy-name">${v.name}</h3>
            <p class="sy-content">${v.desc}</p>
            <a href="${v.url}">详情链接</a> 
        </li>  
        `
    })
    // 内循环结束
    //此外循环对应的内循环全部执行完毕，用ul和div的反标签完成闭环
    HtmlStr += '</ul></div>';
})
//当外循环结束，即所有的外循环都结束，将HTMLStr接收到的所有数据赋值给big标签进行渲染
getEle('.big').innerHTML = HtmlStr;

/* 楼层跳转 */
let floorBtn = getEleAll('.floor div');
let moudle = getEleAll('.frist h2');
console.log(floorBtn);
console.log(moudle);

floorBtn.forEach(function(item,index){
    item.onclick = function(){
        console.log('点击');
        window.scrollTo({
            top:moudle[index].offsetTop,    //offsetTop属性是当前值距离顶部的距离
            behavior:'smooth',
        });
    }
})