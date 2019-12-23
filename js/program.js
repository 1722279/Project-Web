var pageindics = document.getElementsByClassName("indicsvg");
var slides = document.getElementsByClassName("slide");
var slideIndex = 0;
var autoplay = setInterval(nextSlide, 5000);

for(var i=0; i<pageindics.length; i++){
    pageindics[i].addEventListener("click", jumpSlide.bind(this, i));
}

function scrollLef() {
    var cards = document.getElementsByClassName("card");
    var el;
    var parent = document.getElementsByClassName("card")[0].parentNode;
    var length = cards.length;
    for (i = 0; i < cards.length; i++) {
        if (cards[i].classList.contains('lcard')) {
            cards[i].classList.remove('lcard');
            cards[i].classList.add('mcard');

            cards[(i + 1) % length].classList.remove('mcard');
            cards[(i + 1) % length].classList.add('rcard');

            cards[(i + 2) % length].classList.remove('rcard');
            cards[(i + 2) % length].classList.add('hidden');

            cards[(((i - 1) % length) + length) % length].classList.add('lcard');
            cards[(((i - 1) % length) + length) % length].classList.remove('hidden');


            break;
        }
    }
    for (var i = 0; i < length - 1; i++)
        parent.appendChild(cards[0]);
}

function scrollRight() {
    var cards = document.getElementsByClassName("card");
    var el = cards[0];
    var parent = document.getElementsByClassName("card")[0].parentNode;
    var length = cards.length;
    for (var i = 0; i < cards.length; i++) {
        if (cards[i].classList.contains('lcard')) {
            cards[i].classList.remove('lcard');
            cards[i].classList.add('hidden');

            cards[(i + 1) % length].classList.remove('mcard');
            cards[(i + 1) % length].classList.add('lcard');

            cards[(i + 2) % length].classList.remove('rcard');
            cards[(i + 2) % length].classList.add('mcard');

            cards[(i + 3) % length].classList.add('rcard');
            cards[(i + 3) % length].classList.remove('hidden');

            break;
        }
    }
    parent.appendChild(cards[0]);
}

function jumpSlide(times){
    times = ((times-slideIndex)+slides.length)%slides.length;
    for(var i=0; i<times; i++){
        changeSlide(1);
        console.log(i);
    }
    clearInterval(autoplay);
    autoplay = setInterval(nextSlide, 5000);
}

function nextSlide(){
    changeSlide(1);
}

function changeSlide(direction) {
    var length = slides.length;

    for (var i = 0; i < length; i++) {
        if (!slides[i].classList.contains("hidden"))
            if (direction == 1) {
                slides[(i + 1)%length].classList.remove("hidden");
                slides[i].classList.add("hidden");
                pageindics[i].style.fill = 'rgba(0, 0, 0, 0)';
                pageindics[(i+1)%length].style.fill = 'rgb(203, 203, 203)';
                slideIndex = (slideIndex+1)%length;
                break;
            }
            else if (direction == -1) {
                slides[((i - 1)%length)+length].classList.remove("hidden");
                slides[i].classList.add("hidden");
                pageindics[i].style.fill = 'rgba(0, 0, 0, 0)';
                pageindics[(i+1)%length].style.fill = 'rgb(203, 203, 203)';
                slideIndex = ((slideIndex-1)%length)+length;
                break;
            }
    }
}