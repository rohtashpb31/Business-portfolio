var typed = new Typed('.autotype', {
    strings: [
        'Rohtash Verma',
        'Web Developer'
    ],
    loop: true,
    typeSpeed: 60,
    backSpeed: 60
});
window.
    onload
    = function () {
        Particles.
            init
            ({
                selector:
                    '.background'
            });
    };
$(window).scroll(function () {
    if ($(this).scrollTop() > 2000) {
        $('.counter').each(function () {
            var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
            $(this).prop('.Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 10000,
                step: function (func) {
                    $(this).text(parseFloat(func).toFixed(size));
                }
            });
        });
    } else {
        console.log("working")
        $('.counter').stop(true, true);
    };
});
AOS.init();
function verma() {
    AOS.init({ disable: 'mobile' });
}
function disableAOSOnMobile() {
    if (window.innerWidth < 550) {
        verma();
    } else {
        AOS.init();
    }
}
// Run on load
disableAOSOnMobile();
// Run on resize


