let slide = $('.baseinfo > ul > li');
let current = 0;

setInterval(function(){
    let prev = slide.eq(current);
    move(prev, 0, '-100%');
    current++;
    if(current == slide.size()) current=0;
    let next = slide.eq(current);
    move(next, '100%', 0);
}, 10000);
function move(tg, start, end){
    tg.css('left', start).animate({left: end}, 500);
}