$(document).ready(function () {
    
    Fancybox.bind("[data-fancybox]", {});

    $(".popup-activator").click(function (e) {

        $(this).closest(".popup-custom").children(".popup-content").css("display", "block");

    });

    $(".popup-content--close").click(function (e) { 

        e.preventDefault();
        
        $(this).closest(".popup-content").css("display", "none");
        
    });

    $('.banner__homepage').owlCarousel({
        items:1,
        loop:false,
        rewind:true,
        margin:5,
        nav:true,
        dots:true
    });

    $('.news__slider').owlCarousel({
        items:2,
        loop:false,
        rewind:true,
        margin:20,
        nav:true,
        navText:["<img src='img/arrow-right-white.png' alt='slider arrow'>","<img src='img/arrow-right-white.png' alt='slider arrow'>"],
        dots:false,
        responsive : {
            0 : {
                items : 1,
            },
            993 : {
                items : 2,
            }
        }
    });

    $('.gallery__homepage').owlCarousel({
        items:1,
        margin:35,
        loop:true,
        rewind:true,
        nav:false,
        dots:false,
        autoplay:true, 
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive : {
            0 : {
                margin:15,
                items : 1,
                stagePadding: 50,
            },
            576 : {
                items : 1,
                stagePadding: 150,
            },
            768 : {
                items : 2,
                stagePadding: 75,
            },
            993 : {
                items : 2,
                stagePadding: 100,
            },
            1200 : {
                items : 3,
                stagePadding: 100,
            },
            1600 : {
                items : 3,
                stagePadding: 150,
            }
        }
    });
    $('.brands__homepage').owlCarousel({
        items:1,
        loop:false,
        rewind:true,
        margin:30,
        nav:false,
        dots:false,
        responsive : {
            0 : {
                items : 1,
            },
            576 : {
                items : 2,
            },
            993 : {
                items : 3,
            },
            1200 : {
                items : 4,
            },
            1500 : {
                items : 5,
            }
        }
    });
});