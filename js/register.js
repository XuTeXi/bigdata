let user = getEle('#user');
// console.log(user);
let phone = getEle('#phone');
let pin = getEle('#pin');
let pwd = getEle('#pwd');
let getPin = getEle('.getPin');
let rgBtn = getEle('.register-btn');
let asd = getEle('.asd');

let warnIcon = "";
asd.addEventListener('click',function(){
    console.log("点击");
    console.log(user.value);
    if(user.value<6 || user.value>20){
       asd.innerText = '警告警告';
    }
});