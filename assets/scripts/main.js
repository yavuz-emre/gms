/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

if ('.owl-carousel') {
    $(document).ready(function () {
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            dots: true,
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                1000: {
                    items: 1,
                }
            }
        })
    });
}


// translate items on scroll
let item = document.querySelectorAll(".floatitem");
if (item) {
    (function () {
        var throttle = function (type, name, obj) {
            var obj = obj || window;
            var running = false;
            var func = function () {
                if (running) {
                    return;
                }
                running = true;
                requestAnimationFrame(function () {
                    obj.dispatchEvent(new CustomEvent(name));
                    running = false;
                });
            };
            obj.addEventListener(type, func);
        };
        throttle("scroll", "optimizedScroll");
    })();
    window.addEventListener("optimizedScroll", function () {
        if (item[0]) {
            item[0].style.transform = "translate( 0px, -" + window.scrollY * 0.09 + "%)";
        }
        if (item[1]) {
            item[1].style.transform = "translate( 0px, -" + window.scrollY * 0.02 + "%)";
        }
        if (item[2]) {
            item[2].style.transform = "translate( " + window.scrollY * 0.03 + "%, 0%)";
        }
    })
}

/* index.html GÜL efekti */
let t = document.querySelector('.home-wrapper')
if (t) {
    var container = document.querySelector('#app');
    var inner = document.querySelector('.home-wrapper-overlay1');
    var inner2 = document.querySelector('.home-wrapper-overlay2');
    var onMouseEnterHandler = function (event) {
        update(event);
    };
    var onMouseLeaveHandler = function () {
        inner.style = "";
        inner2.style = "";
    };
    var onMouseMoveHandler = function (event) {
        if (isTimeToUpdate()) {
            update(event);
        }
    };
    container.onmouseenter = onMouseEnterHandler;
    container.onmouseleave = onMouseLeaveHandler;
    container.onmousemove = onMouseMoveHandler;
    var counter = 0;
    var updateRate = 1;
    var isTimeToUpdate = function () {
        return counter++ % updateRate === 0;
    };
    var mouse = {
        _x: 0,
        _y: 0,
        x: 0,
        y: 0,
        updatePosition: function (event) {
            var e = event || window.event;
            this.x = e.clientX - this._x;
            this.y = (e.clientY - this._y) * -1;
        },
        setOrigin: function (e) {
            this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
            this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
        },
        show: function () {
            return '(' + this.x + ', ' + this.y + ')';
        }
    }
// Track the mouse position relative to the center of the container.
    mouse.setOrigin(container);
    var update = function (event) {
        mouse.updatePosition(event);
        updateTransformStyle(
            (mouse.y / inner.offsetHeight / 2).toFixed(2),
            (mouse.x / inner.offsetWidth / 2).toFixed(2),
            (mouse.y / inner2.offsetHeight / 2).toFixed(2),
            (mouse.x / inner2.offsetWidth / 2).toFixed(2)
        );
    };
    var updateTransformStyle = function (x, y) {
        var style = "rotateX(" + x * 15 + "deg) rotateY(" + y * 15 + "deg)";
        inner.style.transform = style;
        inner.style.webkitTransform = style;
        inner.style.mozTransform = style;
        inner.style.msTransform = style;
        inner.style.oTransform = style;
        var style2 = "translateX(" + x * 500 + "px) translateY(" + y * -500 + "px)";
        inner2.style.transform = style2;
        inner2.style.webkitTransform = style2;
        inner2.style.mozTransform = style2;
        inner2.style.msTransform = style2;
        inner2.style.oTransform = style2;
    };
}
/* END: index.html GÜL efekti */


/* services filter düğmelerinin active durumlarını kontrol etme */
// Get the container element

var btnContainer = document.querySelector(".services-filter-btns-wrapper");
if (btnContainer) {
    var btnContainer = document.querySelector(".services-filter-btns-wrapper");
// Get all buttons with class="btn" inside the container
    var btns = btnContainer.getElementsByClassName("filter-btn");
// Loop through the buttons and add the active class to the current/clicked button
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
}


function morebtn() {
    let more = document.querySelectorAll(".news-box2");
    for (var i = 0; i < more.length; i++) {
        more[i].classList.replace("d-none", "d-block");
    }
    document.querySelector('.morebtn').classList.replace('d-flex', 'd-none');
    document.querySelector('.lessbtn').classList.replace('d-none', 'd-flex');
}

function lessbtn() {
    let more = document.querySelectorAll(".news-box2");
    for (var i = 0; i < more.length; i++) {
        more[i].classList.replace("d-block", "d-none");
    }
    document.querySelector('.morebtn').classList.replace('d-none', 'd-flex');
    document.querySelector('.lessbtn').classList.replace('d-flex', 'd-none');
}


function moreclients() {
    let more = document.querySelectorAll(".clients");
    for (var i = 0; i < more.length; i++) {
        more[i].classList.replace("d-none", "d-block");
    }
    document.querySelector('.moreclientbtn').classList.replace('d-block', 'd-none');
    document.querySelector('.lessclientbtn').classList.replace('d-none', 'd-block');
}

function lessclients() {
    let more = document.querySelectorAll(".clients");
    for (var i = 0; i < more.length; i++) {
        more[i].classList.replace("d-block", "d-none");
    }
    document.querySelector('.moreclientbtn').classList.replace('d-none', 'd-block');
    document.querySelector('.lessclientbtn').classList.replace('d-block', 'd-none');
}
