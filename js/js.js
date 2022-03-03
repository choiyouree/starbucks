$(function(){
    // 화면이 스크롤되어서 첫번째 section 지나가면 header 에 active 설정
    $(window).scroll(function(){
        // section.s1의 높이값을 sh변수에 저장
        var sh=$('.s1').height();
        // window의 scrollTop 값을 wh 변수에 저장
        var wh=$(window).scrollTop();
        // 만약 s1의 높이값보다 window의 scrollTop값이 커지면
        if(wh > sh){
            // header에 active 설정
            $('header').addClass('active');
            $('header').css('background-color','white')

            // 메인메뉴에 마우스 오버했을때 서브메뉴와 서브메뉴 배경나옴
            $('nav').hover(function(){
                $('.sub').stop().slideDown();
                $('.sub_bg').stop().slideDown();
                // $('header').css('background-color','white')
            },
            // 메인메뉴에서 마우스 아웃했을 때 서브 메뉴와 서브메뉴배경 들어감
            function(){
                $('.sub').stop().slideUp();
                $('.sub_bg').stop().slideUp();
                // $('header').css('background-color','white')
            });
            // 헤더에 마우스 오버했을때
            $('header').hover(function(){
                // 헤어데 액팆브설정
                $(this).addClass('active');
            },
            // 헤더에 마우스 아웃했을때
            function(){
                // 헤더에 액티브 설정
                $(this).addClass('active');
            });
        // s1의 높이값보다 window의 scrollTop 값이 크지 않으면
        }else{
            // header에서 active제거
            $('header').removeClass('active');
            $('header').css('background-color','transparent');

            // 메인메뉴에 마우스 오버했을때 서브메뉴와 서브메뉴 배경나옴
            $('nav').hover(function(){
                $('.sub').stop().slideDown();
                $('.sub_bg').stop().slideDown();
                $('header').addClass('active');
                $('header').css('background-color','white')
            },
            // 메인메뉴에서 마우스 아웃했을 때 서브 메뉴와 서브메뉴배경 들어감
            function(){
                $('.sub').stop().slideUp();
                $('.sub_bg').stop().slideUp();
                // $('header').css('background-color','transparent')
            });
        }
        // header nav ul 메뉴
        $('header nav > ul > li > a').click(function(){
            if($(this).attr('class') != 'active') {
                $('header nav > ul > li > a').removeClass
                ('active');
                $(this).addClass('active');
                $('header nav .sub').slideUp();
                $(this).next().slideDown();
            }else{
                $(this).removeClass('active');
                $(this).next().slideUp();
            }
        });  
    });
    // 메인메뉴에 마우스 오버했을때 서브메뉴와 서브메뉴 배경나옴
    $('nav').hover(function(){
        $('.sub').stop().slideDown();
        $('.sub_bg').stop().slideDown();
        $('header').addClass('active');
        // $('header').css('background-color','white')
    },
    // 메인메뉴에서 마우스 아웃했을 때 서브 메뉴와 서브메뉴배경 들어감
    function(){
        $('.sub').stop().slideUp();
        $('.sub_bg').stop().slideUp();
        $('header').removeClass('active');
        // $('header').css('background-color','transparent')
    });
    // 헤더에 마우스오버했을 때 액티브 클래스 추가
    $('header').hover(function(){
        // $(this)는 header를 가리킴(hover 이벤트가 발생한 객체)
        $(this).addClass('active');
    },
    // header 에서 마우스 아웃했을대 앨티브 클래스 제거
    function(){
        $(this).removeClass('active');
    });
    // swiper slide (visual)
    var swiper = new Swiper(".mySwiper", {
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        effect:'fade',
        loop:true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
      var swiper=new Swiper(".mySwiper2",{
          slidesPerView: 3,
          spaceBetween: 0,
          slidesPerGroup: 3,
          navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
          },
          pagination: {
              el: ".swiper-pagination",
              clickable: true,
          },
          breakpoint:{
              1024:{
                slidesPerView: 3, /*pc 버전*/ 
                slidesPerGroup: 3,
              },
              768:{
                slidesPerView: 2, /* 태블릿 버전 */
                slidesPerGroup: 2,
              },
              480:{
                slidesPerView: 1, /* 모바일 버전 */
                slidesPerGroup: 1,
              }
          }
      });
    //   위로 버튼 클릭하면 화면 맨 위로 이동
    $('.fas').click(function(){
        $('html,body').animate({'scrollTop':0})
    })
});