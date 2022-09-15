/* 首页头部轮播图 */
var mySwiper = new Swiper('.swiper', {
  //   direction: 'vertical', // 垂直切换选项 默认是水平
  loop: true, // 循环模式选项
  autoplay: true,

  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination',
  },

  // 如果需要前进后退按钮
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // 如果需要滚动条
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})
/* 海量API下各个小方块，鼠标挪入，黑色图片切换白色图片 */
let aList = document.querySelectorAll('.field_1 li');
let aList_2 = document.querySelectorAll('.field_2 li');
// console.log(aList);
// console.log(aList_2);
//为获取子节点更方便，那么我们选择把a标签作为父元素批量获取
//dom集合批量绑定事件，一定先遍历
aList.forEach(function (item) {
  // console.log(item);
  item.addEventListener('mouseover', function () {
    // console.log(this.children[0]);
    //替换图片的src
    this.children[1].src = this.children[1].src.replace('.svg', '-c.svg')
    // console.log("鼠标移入");
  })
  item.addEventListener('mouseout', function () {
    // console.log(this.children[0]);
    //替换图片的src
    this.children[1].src = this.children[1].src.replace('-c.svg', '.svg')

  })
})
aList_2.forEach(function (item) {
  // console.log(item);
  item.addEventListener('mouseover', function () {
    // console.log(this.children[0]);
    //替换图片的src
    this.children[1].src = this.children[1].src.replace('.svg', '-c.svg')
    // console.log("鼠标移入");
  })
  item.addEventListener('mouseout', function () {
    // console.log(this.children[0]);
    //替换图片的src
    this.children[1].src = this.children[1].src.replace('-c.svg', '.svg')
  })
})
/* 返回顶部按钮 */
let backTop = document.querySelector(".backTop");
/* 滚动条拉下700个像素后次才显示出返回顶部按钮 */
window.onscroll = function () {
  if (window.scrollY > 700) {
    backTop.style.display = "block";
  } else {
    backTop.style.display = "none";
  }
}
backTop.onclick = function () {
  // document.documentElement.scrollTop = 0;
  window.scrollTo({
    top: 100,
    behavior: "smooth"  //平滑滚动
  });
}