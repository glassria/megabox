(function($){
        //help 탭 메뉴
        var noticeBtn = $(".notice > ul > li");
        // var noticeCont = $(".");
        
        //배너 이미지 슬라이드
        var mySwiper = new Swiper('.swiper-container', {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },

          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
          },
        });

        //영화차트 이미지 슬라이드
        var mySwiper = new Swiper('.swiper-container2', {
            slidesPerView: 4,
            spaceBetween: 24,
            mousewheel: {
                invert: true,
            },
            keyboard: {
                enabled: true,
                onlyInViewport: false,
            },
            autoplay: {
                delay: 6000,
            },
            breakpoints: {
            // when window width is >= 320px
            600: {
              slidesPerView: 1.4,
              spaceBetween: 24
            },
            // when window width is >= 480px
            768: {
              slidesPerView: 2,
              spaceBetween: 24
            },
            // when window width is >= 640px
            960: {
              slidesPerView: 3,
              spaceBetween: 24
            }
          }
        });

        //영화차트 탭 메뉴
        var movBtn = $(".movie_title > ul > li");
        var movCont = $(".movie_chart > div");

        movCont.hide().eq(0).show();
        movBtn.click(function(e){
            e.preventDefault();
            var target = $(this);
            var index = target.index();
            movBtn.removeClass("active");
            target.addClass("active");
            movCont.css("display","none");
            movCont.eq(index).css("display", "block");
        });

        //공지사항 탭 메뉴
        var tabMenu = $(".notice");

        //컨텐츠 내용을 숨겨주세요!
        tabMenu.find("ul > li > ul").hide();
        tabMenu.find("li.active > ul").show();

        function tabList(e){
            e.preventDefault(); //#기능 차단
            var target = $(this);
            target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
            //버튼을 클릭하면 -ul을 보여주고
            //부모의 li태그에 클래스 추가하고
            //형제의 li태그에 클래스를 제거하고
            //제거한 자식의 ul태그를 숨겨줌
        }

        tabMenu.find("ul>li>a").click(tabList).focus(tabList);  
    
})(jQuery); 

