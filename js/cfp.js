var collapsable = document.getElementsByClassName("collapsable");
var toggleBtns = document.getElementsByClassName("toggleBtn");
for(var i = 0; i<toggleBtns.length; i++)
    toggleBtns[i].addEventListener("click", toggle.bind(this, i));

function toggle(num){
    var el = collapsable[num];
    console.log(el);
    if(el.classList.contains("closed")){
        el.classList.remove("closed");
        el.style.maxHeight = "440px";
        toggleBtns[num].style.webkitTransform = 'rotate(90deg)';
    }
    else{
        el.classList.add("closed");
        el.style.maxHeight = "0";
        toggleBtns[num].style.webkitTransform = 'rotate(0deg)';
    }
}