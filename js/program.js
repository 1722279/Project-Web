
function scrollLef() {
    var cards = document.getElementsByClassName("card");
    var el;
    var parent = document.getElementsByClassName("card")[0].parentNode;
    var length = cards.length;
    for (i = 0; i < cards.length; i++) {
        if (cards[i].classList.contains('lcard')) {
            cards[i].classList.remove('lcard');
            cards[i].classList.add('mcard');

            cards[(i+1)%length].classList.remove('mcard');
            cards[(i+1)%length].classList.add('rcard');

            cards[(i+2)%length].classList.remove('rcard');
            cards[(i+2)%length].classList.add('hidden');
            
            cards[(((i-1)%length)+length)%length].classList.add('lcard');
            cards[(((i-1)%length)+length)%length].classList.remove('hidden');
            

            break;
        }
    }
    for(i=0; i < length-1; i++)
        parent.appendChild(cards[0]);
}

function scrollRight() {
    var cards = document.getElementsByClassName("card");
    var el = cards[0];
    var parent = document.getElementsByClassName("card")[0].parentNode;
    var length = cards.length;
    for (i = 0; i < cards.length; i++) {
        if (cards[i].classList.contains('lcard')) {
            cards[i].classList.remove('lcard');
            cards[i].classList.add('hidden');

            cards[(i+1)%length].classList.remove('mcard');
            cards[(i+1)%length].classList.add('lcard');

            cards[(i+2)%length].classList.remove('rcard');
            cards[(i+2)%length].classList.add('mcard');

            cards[(i+3)%length].classList.add('rcard');
            cards[(i+3)%length].classList.remove('hidden');

            break;
        }
    }
    parent.appendChild(cards[0]);
}