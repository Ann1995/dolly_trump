
$(document).ready(function () {
    $(window).on('scroll', function () {
        // onVisibilityChange($('.remarkakula'), animate);
        //onVisibilityChange($('#list'), rotate)
        //onVisibilityChange($('#new'), animate2);


        onVisibilityChange($('#fish'), animate3);
        onVisibilityChange($('.section30'), animate4);
        onVisibilityChange($('.section31'), animate5);
        // onVisibilityChange($( animateshark))
        animateshark();
    });
});

CSSPlugin.defaultTransformPerspective = true;
TweenMax.to("#imgfirst", 1, { rotation: 360, transformOrigen: "centr centr" });

//function animate2() {
//    TweenLite.to("#new", 2, { width: "400px", height: "312px", opacity:"0.8" })};

function animate3() {
    TweenLite.to("#fish", 7, { right: "100%", rotation: 360, opacity: "1" });
}



function animate4() {

    TweenLite.to(".section30", 3, { left: "70%", rotation: 1, opacity: "0.4" });

}
function animate5() {
    TweenLite.to(".section31", 3, { right: "70%", rotation: 1, opacity: "0.4" });

}
function animateshark() {

        if ($("#shark").is("hidden")) {
            $("#shark").slidedown(1000);
        } else {
            $("#shark").hide(5000);
        }
    };


//    $("#shark").hide(function () { $("#shark").show("slow") });
//}


//,function (){
//$("#section41").css({
//    height: "100%",
//    pocition:"fixed",
//})

//} );


//function animate() {
//    TweenMax.to(".remarkakula", 5, { rotationY: 360, transformOrigin: "left 50% -200" });
//}


function isElementInViewport(el) {

    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}

function onVisibilityChange(el, callback) {

    var visible = isElementInViewport(el);
    if (visible && typeof callback === 'function') {
        callback();
    }
}

$(function () { // wait for document ready
    // init
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave'
        }
    });

    // get all slides
    var slides = document.querySelectorAll("section.panel");

    // create scene for every slide
    for (var i = 0; i < slides.length; i++) {
        new ScrollMagic.Scene({
            triggerElement: slides[i]
        })
            .setPin(slides[i])
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);
    }
});


