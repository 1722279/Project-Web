var navbar = document.getElementsByClassName("quicknav")[0];

function openNav(){
    navbar.classList.remove("collapsed");
    document.getElementById("burgerHeader").style.display = "none";
}

function closeNav(){
    navbar.classList.add("collapsed");
    document.getElementById("burgerHeader").style.display = "inline-block";
}