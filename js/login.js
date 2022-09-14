let tabs = getEleAll(".login .lg-btn span");
console.log(tabs);
let divs = getEleAll(".login .an-btn,.cs-btn");
console.log(divs );
tabs.forEach(function(item,index){
    item.onclick = function(){
        tabs.forEach(function(element,i){
            tabs[i].className = '';
            divs[i].style.display = "none"; 
        })
    this.className = "on";
    divs[index].style.display = "block";
    }
})