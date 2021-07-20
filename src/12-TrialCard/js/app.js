function circleBar(elemId, percent){
    var elem = document.getElementById(elemId);
    var circles = elem.querySelectorAll('circle');
    var r = circles[0].getAttribute('r');
    var circum = 2 * Math.PI * r;
    var offset = circum - (circum * percent / 100);
    circles[1].style.setProperty('--circum', circum);
    circles[1].style.setProperty('--offset', offset);
}

circleBar('elem1', 60);
