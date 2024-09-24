
document.addEventListener('DOMContentLoaded', () => {
    const lenis = new Lenis();

lenis.on('scroll', (e) => {
    console.log(e);
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
gsap.registerPlugin(ScrollTrigger);

// 기본 애니메이션 설정
const defaultAnimations = () => {
    gsap.to(".intro_box .txt1", {
        scrollTrigger: {
            trigger: ".intro", 
            start: "10% 10%",
            end: "80% 50%",
            scrub: 2,
        },
        x: -1000,
    });
    gsap.to(".intro_box .txt2", {
        scrollTrigger: {
            trigger: ".intro", 
            start: "10% 10%",
            end: "80% 50%",
            scrub: 2,
        },
        x: 1000,
    });
    gsap.to(".part1", {
        scrollTrigger: {
            trigger: ".blind", 
            start: "0 50%",
            end: "80% 50%",
            scrub: 1,
        },
        x: -700,
    });
    gsap.to(".part2", {
        scrollTrigger: {
            trigger: ".blind", 
            start: "0 50%",
            end: "80% 50%",
            scrub: 1,
        },
        x: -200,
    });
};

// .history 관련 애니메이션 설정
const aniA = () => {
    gsap.to(".history .academy", {
        scrollTrigger: {
            trigger: ".history ul", 
            start: "5% center",
            end: "40% center",
            scrub: 1,
        },
        x: 300,
        y: -250,
        rotation: 360,
    });
    gsap.to(".history .school", {
        scrollTrigger: {
            trigger: ".history ul", 
            start: "5% center",
            end: "40% center",
            scrub: 1,
        },
        x: -250,
        y: -300,
        rotation: 360,
    });
    gsap.to(".history .address", {
        scrollTrigger: {
            trigger: ".history ul", 
            start: "5% center",
            end: "40% center",
            scrub: 1,
        },
        x: -400,
        rotation: 360,
    });
    gsap.to(".history .name_n", {
        scrollTrigger: {
            trigger: ".history ul", 
            start: "5% center",
            end: "40% center",
            scrub: 1,
        },
        backgroundColor: '#000',
        scale: 1.5,
    });
};

// 미디어 쿼리 적용
const mm = gsap.matchMedia();

mm.add("(min-width: 1025px)", () => {
    defaultAnimations();
    aniA(); // 1025px 이상에서 애니메이션 실행
});

mm.add("(max-width: 1024px)", () => {
    defaultAnimations(); // 1024px 이하에서 기본 애니메이션만 실행
});

// 초기 애니메이션 호출 (옵션에 따라)
defaultAnimations();



});
$(document).ready(function() {
    $(window).on('scroll', function() {
        var footerPosition = $('.history').offset().top;
        var scrollTop = $(this).scrollTop();
        if (scrollTop >= footerPosition -100) {
            $('#name_line path').addClass('animate');
        }
    });
    var click = 0;
    $('.mo_gnb').click(function(){
        $('.mo_gnb li').toggleClass('on');
        
        if(click == 0){
            $('.mo_container').css({"opacity": "1", "visibility": "visible", "transform": "translateX(0)"});
            $('header .container .mo_gnb li').css("background-color","#fff");
            $('body').css("overflow", "hidden");
            click += 1;
        } else{
            $('.mo_container').css({"opacity": "0", "visibility": "hidden", "transform": "translateX(500px)"});
            $('header .container .mo_gnb li').css("background-color","#db4a2b");
            $('body').css("overflow", "auto");
            click = 0;
        }
        
    })
    $('.overlay').click(function() {
        $('.mo_container').css({"opacity": "0", "visibility": "hidden", "transform": "translateX(500px)"});
        $('.overlay').fadeOut(); // 오버레이 숨기기
        $('body').css("overflow", "auto"); // 스크롤 활성화
        click = 0;
    });
});
