$(document).ready(function() {
    $('header .menu').on('click', function() {
        $('.top_gnb').slideToggle(1000);
        $('body').toggleClass('scrollLock')
        $('header .menu_bar').toggleClass('on')
        

     
    });
    $(document).ready(function() {
        var $circle = $('.circle');
    
        // 마우스포인터 이동 함수
        function moveCircle(e) {
            TweenLite.to($circle, 0.6, {
                css: {
                    left: e.pageX,
                    top: e.pageY
                }
            });
        }
        // 마우스 이동 이벤트 등록
        $(window).on('mousemove', moveCircle);
    })
gsap.registerPlugin(ScrollTrigger) 
gsap.to(".deco .img_box", {
    scrollTrigger: {
      trigger: ".deco", 
      start: "top 30%", // 애니메이션 시작시점
      end:"bottom bottom", // 애니메이션 종료시점
      scrub: 2,
    //   markers: true,
    },
    y: -100,
    scale:1.4,
  });
  gsap.to(".date .bar", {
    scrollTrigger: {
      trigger: ".t_section", 
      start: "20% top", // 애니메이션 시작시점
      end:"bottom center", // 애니메이션 종료시점
      scrub: 3,
       // markers: true 트리거 마커의 표시(boolean)
    },
    width: '30%',
  });

    ScrollTrigger.matchMedia({

        "(max-width: 960px)": function() {
            gsap.to(".deco .img_box", {
                scrollTrigger: {
                trigger: ".deco", 
                start: "top 20%", // 애니메이션 시작시점
                end:"bottom bottom", // 애니메이션 종료시점
                scrub: 2,
                //   markers: true,
                },
                y: -100,
                scale:1.2,
            });
            gsap.to(".date .bar", {
                scrollTrigger: {
                trigger: ".t_section", 
                start: "40% 15%", // 애니메이션 시작시점
                end:"bottom center", // 애니메이션 종료시점
                scrub: 3,
                // markers: true,
                },
                width: '25%',
            });
    },

    });

  
})


document.addEventListener('DOMContentLoaded', () => {
    let roller = document.querySelector('.roll');
    roller.id = 'roller1';

    let clone = roller.cloneNode(true);
    clone.id = 'roller2';
    document.querySelector('.roll_wrap').appendChild(clone);

    roller.classList.add('original');
    clone.classList.add('clone');

    
});
