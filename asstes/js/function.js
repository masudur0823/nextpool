// menu function start
function humberger(x) {
    const hc = document.getElementById("hum_main_child");
    const img = document.getElementsByClassName("gif_img");



    if (window.matchMedia("(max-width: 992px)").matches) { // If media query matches
        if (hc.style.gap == '0px') {
            hc.style.gap = '10px';
            for (i = 0; i <= img.length; i++) {
                img[i].style.width = '30px'
            }
        } else {
            hc.style.gap = '0px';
            for (i = 0; i <= img.length; i++) {
                img[i].style.width = '0px'
            }
        }
    } else {
        if (hc.style.gap == '0px') {
            hc.style.gap = '30px';
            for (i = 0; i <= img.length; i++) {
                img[i].style.width = '50px'
            }
        } else {
            hc.style.gap = '0px';
            for (i = 0; i <= img.length; i++) {
                img[i].style.width = '0px'
            }
        }
    }
}
// menu function end

// viewAll function start
function viewAll() {
    const ov = document.getElementById('home_table_overlay');
    const va = document.getElementById('view_all');
    const vl = document.getElementById('view_less');
    const div = document.getElementById('recently_minded_table_div');
    ov.style.display = 'none'
    va.style.display = 'none'
    vl.style.display = 'block'
    div.style.height = 'auto'
    div.style.overflowY = 'initial'
}

function viewLess() {
    const ov = document.getElementById('home_table_overlay');
    const va = document.getElementById('view_all');
    const vl = document.getElementById('view_less');
    const div = document.getElementById('recently_minded_table_div');
    ov.style.display = 'block'
    va.style.display = 'block'
    vl.style.display = 'none'
    div.style.height = '500px'
    div.style.overflowY = 'hidden'
}
// viewAll function end

// faq function start
var faq = document.getElementsByClassName("faq-page");
var i;

for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}
// faq function end

// menu function start

// menu function end