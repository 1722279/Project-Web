var num = 1;
var cloneCopy = document.getElementById('participant1').cloneNode(true);
var rateBox = document.getElementById("rate");
rateBox.addEventListener("change", handleSelection);

var catBox = document.getElementById("cat");
catBox.addEventListener("change", handleSelection);

function add_fields() {
  num++;
  var fieldDiv = document.createElement('div');
  fieldDiv.innerHTML += '<span class="heading3">Participant ' + num + '</span>' +
    '<div class="closeImg"><img src="images/close.svg" alt=""></div>';
  fieldDiv.innerHTML += cloneCopy.outerHTML;
  fieldDiv.id = "participant" + num;
  document.getElementById('participant1').parentNode.appendChild(fieldDiv);
  handleSelection();
  refreshDivs();
}

function refreshDivs(){
  var closeBtn = document.getElementsByClassName("closeImg");
  for(var i = 0; i < closeBtn.length; i++)
    closeBtn[i].addEventListener("click", closeDiv.bind(this, closeBtn[i]));
}

function closeDiv(el){
  el.parentNode.outerHTML = "";
  num--;
}

function handleSelection() {
  var value = rateBox.options[rateBox.selectedIndex].value;
  var cat = catBox.options[catBox.selectedIndex].value;
  var regPrice = 0;
  if (cat == "loc") {
    if (value == "cppresenter")
      regPrice = 1500;
    else if (value == "spresenter")
      regPrice = 1000;
    else if (value == "part")
      regPrice = 600;
  }
  else if (cat == "int") {
    if (value == "cppresenter")
      regPrice = 2000;
    else if (value == "spresenter")
      regPrice = 1600;
    else if (value == "part")
      regPrice = 700;
  }

  regPrice = num * regPrice;

  var q = new Date();
  var m = q.getMonth();
  var d = q.getDay();
  var y = q.getFullYear();
  var curDate = new Date(y, m, d);
  var earlyDate = new Date('2019-12-12');

  if (curDate < earlyDate) {
    var earlyDisc = regPrice * 0.20;
    regPrice = regPrice * 0.80;
    document.getElementById("earlyBox").classList.remove("hidden");
  }
  else if (!document.getElementById("earlyDisc").classList.contains("hidden"))
    document.getElementById("earlyDisc").classList.add("hidden");

  var gst = regPrice * 0.06;
  var total = regPrice - gst;

  document.getElementById("regFee").textContent = regPrice + 'RM';
  document.getElementById("earlyDisc").textContent = earlyDisc + 'RM';
  document.getElementById("gst").textContent = gst + 'RM';;
  document.getElementById("total").textContent = total + 'RM';;
}


function submit(){
  var inputs = document.getElementsByTagName("input");
  var invalid = false;
  for(var i = 0; i<inputs.length; i++){
    if(inputs[i].value === '' && inputs[i].hasAttribute('required')){
      inputs[i].style.borderColor = "#ff0000";
      invalid = true;
  }
    else {
      inputs[i].style.borderColor = "#ddddd";
      console.log("reset");
    }
}
  if(invalid)
    alert("One or more required fields are empty\/invalid!");
  else{
    document.getElementById("successModal").style.opacity = "1";
    document.getElementById("successModal").style.zIndex = "2";
  }
}


function closeModal(el){
  handleSelection();
  el.parentNode.style.opacity = "0";
  el.parentNode.style.zIndex = "-1";
}
