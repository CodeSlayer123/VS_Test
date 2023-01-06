window.onload = function(){
    videos();

  }
const og_videos = ['godsnotdead.mp4', 'keepmeinthemoment.mp4']
let myVideos = ['godsnotdead.mp4', 'keepmeinthemoment.mp4']
let test = []
let ari = 0
let james = 0


function videos() {



    $(".video-container").empty()

    $(".video-container").append(`
    <video id="example_video_by_hand" class="video-js vjs-default-skin" controls width="640" height="264" poster="http://video-js.zencoder.com/oceans-clip.jpg" preload="auto" data-setup="{}">
                        <source type="video/mp4"src="videos/${myVideos[0]}"/>
                    </video>
    `)
    myVideos.splice(0, 1);

}

function random(){
    console.log("random")
    let index = Math.floor(Math.random() * myVideos.length); // random index
    console.log(index)
    $(".video-container").empty()

    $(".video-container").append(`
    <video id="example_video_by_hand" class="video-js vjs-default-skin" controls width="640" height="264" poster="http://video-js.zencoder.com/oceans-clip.jpg" preload="auto" data-setup="{}">
                        <source type="video/mp4"src="videos/${myVideos[index]}"/>
                    </video>
    `)
    myVideos.splice(index, 1);
}

function increase(player){
    console.log(player)
    if (player == 'ari'){
        ari++
        var element;
        element = document.getElementById("ari");
        console.log(element)
        element.innerHTML = ari;

    }
    if (player == 'james'){
        james++
        var element;
        element = document.getElementById("james");
        console.log(element)
        element.innerHTML = james;
    }
}



$(function () {

    // init feather icons
    feather.replace();

    // init tooltip & popovers
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();

    //page scroll
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 20
        }, 1000);
        event.preventDefault();
    });

    // slick slider
    $('.slick-about').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false
    });

    //toggle scroll menu
    var scrollTop = 0;
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        //adjust menu background
        if (scroll > 80) {
            if (scroll > scrollTop) {
                $('.smart-scroll').addClass('scrolling').removeClass('up');
            } else {
                $('.smart-scroll').addClass('up');
            }
        } else {
            // remove if scroll = scrollTop
            $('.smart-scroll').removeClass('scrolling').removeClass('up');
        }

        scrollTop = scroll;

        // adjust scroll to top
        if (scroll >= 600) {
            $('.scroll-top').addClass('active');
        } else {
            $('.scroll-top').removeClass('active');
        }
        return false;
    });

    // scroll top top
    $('.scroll-top').click(function () {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1000);
    });

    /**Theme switcher - DEMO PURPOSE ONLY */
    $('.switcher-trigger').click(function () {
        $('.switcher-wrap').toggleClass('active');
    });
    $('.color-switcher ul li').click(function () {
        var color = $(this).attr('data-color');
        $('#theme-color').attr("href", "css/" + color + ".css");
        $('.color-switcher ul li').removeClass('active');
        $(this).addClass('active');
    });
});