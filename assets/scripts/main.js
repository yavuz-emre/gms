/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

if('.owl-carousel'){
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        dots: true,
        responsiveClass:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:1,
            }
        }
    })
});
}


// translate items on scroll
var item = document.querySelectorAll(".floatitem");
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

/*for (let i = 0; i < item.length; i++) {
    window.addEventListener("optimizedScroll", function () {
        item[i].style.transform = "translate( 0px, -" + window.scrollY * 0.05 + "%)";
    })
}*/

if(item) {
    window.addEventListener("optimizedScroll", function () {
        item[0].style.transform = "translate( 0px, -" + window.scrollY * 0.05 + "%)";
        item[1].style.transform = "translate( 0px, -" + window.scrollY * 0.03 + "%)";
        item[2].style.transform = "translate( 0px, -" + window.scrollY * 0.04 + "%)";
    })
}



var container = document.querySelector('#app');
var inner = document.querySelector('.home-wrapper-overlay');
var onMouseEnterHandler = function(event) {
    update(event);
};
var onMouseLeaveHandler = function() {
    inner.style = "";
};
var onMouseMoveHandler = function(event) {
    if (isTimeToUpdate()) {
        update(event);
    }
};
container.onmouseenter = onMouseEnterHandler;
container.onmouseleave = onMouseLeaveHandler;
container.onmousemove = onMouseMoveHandler;
var counter = 0;
var updateRate = 10;
var isTimeToUpdate = function() {
    return counter++ % updateRate === 0;
};
var mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
    updatePosition: function(event) {
        var e = event || window.event;
        this.x = e.clientX - this._x;
        this.y = (e.clientY - this._y) * -1;
    },
    setOrigin: function(e) {
        this._x = e.offsetLeft + Math.floor(e.offsetWidth/2);
        this._y = e.offsetTop + Math.floor(e.offsetHeight/2);
    },
    show: function() { return '(' + this.x + ', ' + this.y + ')'; }
}
// Track the mouse position relative to the center of the container.
mouse.setOrigin(container);
var update = function(event) {
    mouse.updatePosition(event);
    updateTransformStyle(
        (mouse.y / inner.offsetHeight/2).toFixed(2),
        (mouse.x / inner.offsetWidth/2).toFixed(2)
    );
};
var updateTransformStyle = function(x, y) {
    var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
    inner.style.transform = style;
    inner.style.webkitTransform = style;
    inner.style.mozTransform = style;
    inner.style.msTransform = style;
    inner.style.oTransform = style;
};