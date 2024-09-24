$(document).ready(function() {
    $('header .nav').on('mouseenter', function() {
        $('header .nav_bg').addClass('on');
    });
    $('header .nav').on('mouseleave', function() {
        $('header .nav_bg').removeClass('on');
    });

    var menuOn = 0;
    $('.nav_mo .item_up a').click(function(){
      if(menuOn == 0){
        $('.menu_box').css("display","block");
        $(this).html('<i class="fa-solid fa-xmark"></i>');
        menuOn = 1;
      }else if(menuOn == 1){
        $('.menu_box').css("display","none");
        $(this).html('<i class="fa-solid fa-bars"></i>');
        menuOn = 0;
      }
      
    })

    var check = 0;
    $('.item_parents').click(function(){
      if(check == 0){
          $(this).children('.btn').addClass('m-rotate')
          $(this).siblings().slideDown();
          check = 1;
      }else if(check == 1){
        $(this).children('.btn').removeClass('m-rotate')
        $(this).siblings().slideUp();
          check = 0;
      }
    });
});
document.addEventListener("DOMContentLoaded", function(){
    
    var swiper = new Swiper(".mySwiper1", {
        spaceBetween: 30,
        effect: "fade",
          loop: true,
          autoplay: {
              delay: 4500, 
              disableOnInteraction: false,
          },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        
      });
      var gonggo = document.querySelector(".gonggo");
      var gonggoLi = document.querySelectorAll(".gonggo li");
      gonggoLi[0].addEventListener("mouseenter",()=>{
          gonggo.style.backgroundImage = "url(./image/main_link01.jpg)"
      })
      gonggoLi[1].addEventListener("mouseenter",()=>{
          gonggo.style.backgroundImage = "url(./image/main_link02_n.jpg)"
      })
      // gsap 스크롤효과

    gsap.registerPlugin(ScrollTrigger); // 플러그인 등록

    const hor = document.querySelector("#hor");
    const sections = gsap.utils.toArray("#hor > section");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: hor,
        start: "top top",
        end: () => "+=" + (hor.offsetWidth - innerWidth),
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (sections.length - 1),
          inertia: false,
          duration: { min: 0.1, max: 0.1 },
        },
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });

    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(".business_txt .img_box", 
      { scale: 0.5 }, // Starting scale value
      {
        scrollTrigger: {
          trigger: ".business_txt",
        //   markers: true,
          start: "0 center",
          end: "60% 45%",
          scrub: true,
        },
        scale: 1, // Ending scale value
        y: "-85%",
        duration: 1,
      }
    );
        gsap.to(".business_txt", {
        scrollTrigger: {
            trigger: ".business_txt",
            // markers: true,
            start: "0 center",
            end: "60% 45%",
            scrub: true,
        },
        color:"#fff",
        });
       
    });

