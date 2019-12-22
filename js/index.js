document.getElementById("objSpan").addEventListener("click", showTab.bind(this, "obj"));
document.getElementById("themeSpan").addEventListener("click", showTab.bind(this, "theme"));
document.getElementById("dateSpan").addEventListener("click", showTab.bind(this, "date"));
document.getElementById("locSpan").addEventListener("click", showTab.bind(this, "loc"));
document.getElementById("bioBtn1").addEventListener("click", showBio.bind(this, 1));
document.getElementById("bioBtn2").addEventListener("click", showBio.bind(this, 2));
document.getElementById("bioBtn3").addEventListener("click", showBio.bind(this, 3));
var closeBtn = document.getElementsByClassName("closeImg");
for (i = 0; i < closeBtn.length; i++) {
    closeBtn[i].addEventListener("click", resetBio.bind(this, closeBtn[i]))
    closeBtn[i].click();
}
var parent = sC1.parentNode;

function showTab(args) {
    var tabNum = 0;
    var otherTabs = document.getElementsByClassName("details");
    var otherSpans = document.getElementsByClassName("tabSpan");
    var tab = args + "Tab";
    var span = args + "Span";
    for (i = 0; i < otherTabs.length; i++) {
        otherTabs[i].style.display = "none";
        otherSpans[i].style.color = "#B2B2B2";
        if (document.getElementById(tab) === otherTabs[i])
            tabNum = i;
    }
    document.getElementById(tab).style.display = "block";
    document.getElementById(span).style.color = "#434343";
    document.getElementById("blackbar").style.paddingLeft = tabNum * 100 + "px";
}

function showBio(i) {
    var node = "bio" + i;
    //document.getElementById(node).style.display = "inline-block";
    document.getElementById(node).style.width = "596px";
    document.getElementById(node).style.height = "auto";
    document.getElementById(node).style.borderStyle = "solid";
}

function resetBio(el) {
    //el.parentNode.style.display = "none";
    el.parentNode.style.width = "0";
    el.parentNode.style.borderStyle = "";
    el.parentNode.style.height = "0";
}

document.getElementById("objSpan").click();