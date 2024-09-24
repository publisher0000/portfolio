$(document).ready(function(){
	const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
});
$(document).ready(function() {
    
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

$(document).ready(function() {
    $('.main_viusal').on("mousemove", function(e) {
        const width = $(this).width();
        const height = $(this).height();
  
        const moveX = (e.pageX - $(this).offset().left - width / 2) / width;
        const moveY = (e.pageY - $(this).offset().top - height / 2) / height;
  
        const backMoveX = -moveX * -5; // x축 이동
        const backMoveY = -moveY * -5; // y축 이동
  
        // 기존 margin을 가져오고, 이동량을 더함
        const currentMarginLeft = parseFloat($('.main_viusal_wrap .img_box img:nth-child(2)').css('margin-left')) || 0;
        const currentMarginTop = parseFloat($('.main_viusal_wrap .img_box img:nth-child(2)').css('margin-top')) || 0;

        // 이동 거리 제한 설정
        const maxMarginLeft = 10; // 최대 왼쪽 이동 거리
        const minMarginLeft = -10; // 최대 오른쪽 이동 거리
        const maxMarginTop = 10; // 최대 위쪽 이동 거리
        const minMarginTop = -10; // 최대 아래쪽 이동 거리

        // 새로운 마진 계산
        const newMarginLeft = currentMarginLeft + backMoveX;
        const newMarginTop = currentMarginTop + backMoveY;

        // 이동 거리 제한
        const limitedMarginLeft = Math.max(minMarginLeft, Math.min(maxMarginLeft, newMarginLeft));
        const limitedMarginTop = Math.max(minMarginTop, Math.min(maxMarginTop, newMarginTop));
  
        $('.main_viusal_wrap .img_box img:nth-child(2)').css({
            'margin-left': limitedMarginLeft + 'px',
            'margin-top': limitedMarginTop + 'px'
        });
    });
});


function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}

    gsap.registerPlugin(ScrollTrigger);
        gsap.to(".main_intro .list_wrap li:first-child", {
        scrollTrigger: {
            trigger: ".main_intro",
            // markers: true,
            start: "20% center",
            end: "40% center",
            scrub: 2,
        },
        y:-100,
        });
        gsap.to(".main_intro .list_wrap li:last-child", {
            scrollTrigger: {
                trigger: ".main_intro",
                // markers: true,
                start: "20% center",
                end: "40% center",
                scrub: 2,
            },
            y:150,
            });
        gsap.to(".circle", {
            scrollTrigger: {
                trigger: ".main_intro",
                // markers: true,
                start: "64% center",
                end: "85% bottom",
                scrub: 1,
            },
            y:-150,
            ease: "power3.inOut"
            });
        
    });