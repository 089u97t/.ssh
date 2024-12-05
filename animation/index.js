const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

$(document).ready(function() {
    $('.hero-content').fadeIn(1500); // Fade in animation for the hero content
    $('.work-experience').slideDown(1500); // Slide down animation for the work experience section
});

var ctx = document.getElementByld('circularLoader').getContext('2d');
var al = 0;
var start = 4.72;
var cw = ctx.canvas.width;
var ch = ctx.canvas.heigth;
var diff;
function progressSim(){
    diff = ((al / 100) * Math.PI*2*10).toFixed(2);
    ctx.clearRect(0, 0, cw, ch);
    ctx.lineWidth = 17;
    ctx.fillStyle = '#4285f4';
    ctx.strokeStyle = "#4285f4"
    ctx.textAlign = "center";
    ctx.font="28px monospace";
    ctx.fillText(al+'%', cw*.52, ch*.5+5, cw+12);
    ctx.beginPath();
    ctx.arc(100, 100, 75, start, diff/10+start, false);
    ctx.stroke();
    if(al >= 100){
        clearTimeout(sim);
    }
    al++;
}
var sim = setInterval(progressSim, 50);