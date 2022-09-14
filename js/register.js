// let user = getEle('#user');
// // console.log(user);
// let phone = getEle('#phone');
// let pin = getEle('#pin');
// let pwd = getEle('#pwd');
// let getPin = getEle('.getPin');
// let rgBtn = getEle('.register-btn');
// let asd = getEle('.asd');

// let warnIcon = "";
// asd.addEventListener('click',function(){
//     console.log("点击");
//     console.log(user.value);
//     if(user.value<6 || user.value>20){
//        asd.innerText = '警告警告';
//     }
// });

/*  */
let checkbox = getEle('.agree');
let registerBtn = getEle('.register-btn');
// console.log(checkbox);
// console.log(registerBtn);
// 按钮的disabled属性是自带启用禁用，disabled是禁用，当false时是启用
checkbox.onchange = function () {
    if (this.checked) {
        registerBtn.className = 'register-btn on';
        registerBtn.disabled = false;
    } else {
        registerBtn.className = 'register-btn ';
        registerBtn.disabled = true;
    }
}
//测试按钮点击
registerBtn.onclick = function () {
    console.log('点击注册按钮');
}

/* 判单输入框内是否有内容输入，如果有输入就显示X图标 */
let inputs = getEleAll('.box input')
// console.log(inputs);
inputs.forEach(function (item) {
    item.oninput = function () {
        // console.log('输入中');

        if (this.value.length > 0) {
            // console.log(this.nextElementSibling);
            this.nextElementSibling.style.display = "inline-block";
            console.log('有输入内容');
        } else {
            this.nextElementSibling.style.display = 'none';
        }
    }
})

/* 点击X图标清除输入框内内容 */
let iconClear = getEleAll('.box .icon-clear');
// console.log(clearIcon);
    iconClear.forEach(function (item) {
    item.onclick = function () {
        this.previousElementSibling.value = ''
        this.style.display = 'none'
    }
})
/* 验证码的那一个单独设置 */
let iconClearThree = getEle('.box .icon-clear-three');
    iconClear.forEach(function (item) {
    item.onclick = function () {
        this.previousElementSibling.value = ''
        this.style.display = 'none'
    }
})



// inputs.forEach(function(item){
//     item.onblur = function(){
//         if(this.value.length >=6 && this.value.length<=12){
//             //console.log('小于6或者大于12');
//             this.nextElementSibling.nextElementSibling.style.display = 'none';
//         }else {
//             this.nextElementSibling.nextElementSibling.style.display = 'inline-block'
//             //console.log('符合条件');
//         }
//     }
// })
/* 新建一个对象，用来存储每个输入框是否正确的状态 */
let obj = {
    userName: false,
    phone: false,
    pin: false,
    pwd: false,
}

/* 昵称验证 */
let userName = getEle('#user');
userName.onblur = function () {
    if (this.value.length >= 6 && this.value.length <= 12) {
        //console.log('小于6或者大于12');
        this.nextElementSibling.nextElementSibling.style.display = 'none';
        obj.userName = true;
    } else {
        this.nextElementSibling.nextElementSibling.style.display = 'inline-block'
        obj.userName = false;
        //console.log('符合条件');
    }
}

/* 手机号验证 */
let phone = getEle('#phone');
phone.onblur = function () {
    if (this.value.length === 11) {
        this.nextElementSibling.nextElementSibling.style.display = 'none';
        obj.phone = true;
    } else {
        this.nextElementSibling.nextElementSibling.style.display = 'inline-block';
        obj.phone = false;
    }
}

/* 验证码验证 */
let pin = getEle('#pin');
pin.onblur = function () {
    if (this.value.length === 4) {
        this.nextElementSibling.nextElementSibling.style.display = 'none';
        obj.pin = true;
    } else {
        this.nextElementSibling.nextElementSibling.style.display = 'inline-block'
        obj.pin = false;
    }
}

/* 密码验证 */
let pwd = getEle('#pwd');
pwd.onblur = function () {
    if (this.value.length >= 6 && this.value.length <= 12) {
        this.nextElementSibling.nextElementSibling.style.display = 'none';
        obj.pwd = true;
    } else {
        this.nextElementSibling.nextElementSibling.style.display = 'inline-block'
        obj.pwd = false;
    }
}
/* 检索前面的数据输入是否正确，当全部正确时点亮注册按钮*/
registerBtn.onclick = function () {
    for (let key in obj) {
        if (obj[key]) {
            getEle('#' + key).nextElementSibling.nextElementSibling.style.display = 'none';
        } else {
            getEle('#' + key).nextElementSibling.nextElementSibling.style.display = 'inline-block';

        }
    }
}
