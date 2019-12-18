document.getElementById("objSpan").addEventListener("click", showTab.bind(this, "obj"));
document.getElementById("themeSpan").addEventListener("click", showTab.bind(this, "theme"));
document.getElementById("dateSpan").addEventListener("click", showTab.bind(this, "date"));
document.getElementById("locSpan").addEventListener("click", showTab.bind(this, "loc"));

function showTab(args) {
    var tabNum = 0;
    var otherTabs = document.getElementsByClassName("details");
    var otherSpans = document.getElementsByClassName("tabSpan");
    var tab = args + "Tab";
    var span = args + "Span";
    for (i = 0; i < otherTabs.length; i++) {
        otherTabs[i].style.display = "none";
        otherSpans[i].style.color = "#B2B2B2";
        if(document.getElementById(tab) === otherTabs[i])
            tabNum = i;
    }
    document.getElementById(tab).style.display = "block";
    document.getElementById(span).style.color = "#434343";
    document.getElementById("blackbar").style.paddingLeft = tabNum * 100 + "px";
}



document.getElementById("objSpan").click();