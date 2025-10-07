// const $dropdown = $(".dropdown");
// const $dropdownToggle = $(".dropdown-toggle");
// const $dropdownMenu = $(".dropdown-menu");
// const showClass = "show";

// $(window).on("load resize", function () {
//   if (this.matchMedia("(min-width: 991px)").matches) {
//     $dropdown.hover(
//       function () {
//         $('>.dropdown-menu', this).stop(true, true).fadeIn("fast");
//         $(this).addClass('show');
//       },
//       function () {
//         $('>.dropdown-menu', this).stop(true, true).fadeOut("fast");
//         $(this).removeClass('show');
//       }
//     );
//   } else {
//     $dropdown.off("mouseenter mouseleave");
//   }
// });

// $(window).on("load resize", function () {
//   if (this.matchMedia("(max-width: 991px)").matches) {
//     $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
//       if (!$(this).next().hasClass('show')) {
//         $(this).parents('.dropdown-menu').first().find('.show').removeClass("show").removeAttr('style');
//       }

//       var $subMenu = $(this).next(".dropdown-menu");
//       if ($subMenu.hasClass('show')) {
//         $subMenu.removeAttr('style');
//       }

//       $subMenu.toggleClass('show');


//       $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
//         $('.dropdown-submenu .show').removeClass("show");
//       });

//       return false;
//     });
//   }

// });

// owl carousel start //
$('#owl-carousel-project').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    autoplay: true,
    autoplayTimeout: 6000,
    responsive: {
        0: {
            items: 1
        },
        // 576: {
        //   items: 2,
        //   margin: 15
        // },
        768: {
            items: 2,
            margin: 15
        },
        1000: {
            items: 3
        }
    }
})
// $('#owl-carousel-client').owlCarousel({
//   loop: true,
//   margin: 0,
//   dots: false,
//   nav: true,
//   autoplay: true,
//   autoplayTimeout: 6000,
//   navText: [
//     "<i class='fa-solid fa-arrow-left'></i>",
//     "<i class='fa-solid fa-arrow-right'></i>"
//   ],
//   responsive: {
//     0: {
//       items: 1
//     },
//     768: {
//       items: 1
//     },
//     1000: {
//       items: 1
//     }
//   }
// })

// comingsoon page countdown js
$(function () {
    if (document.getElementById("days") !== null) {
        const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;

        let today = new Date(),
            dd = String(today.getDate()).padStart(2, "0"),
            mm = String(today.getMonth() + 1).padStart(2, "0"),
            yyyy = today.getFullYear(),
            nextYear = '2025',
            dayMonth = "9/24/",
            birthday = dayMonth + yyyy;

        today = mm + "/" + dd + "/" + yyyy;
        if (today > birthday) {
            birthday = dayMonth + nextYear;
        }
        //end

        const countDown = new Date(birthday).getTime(),
            x = setInterval(function () {
                const now = new Date().getTime(),
                    distance = countDown - now;

                let days = Math.floor(distance / (day));
                let hours = Math.floor((distance % (day)) / (hour));
                let minutes = Math.floor((distance % (hour)) / (minute));
                let seconds = Math.floor((distance % (minute)) / second);

                document.getElementById("days").innerText = days,
                    document.getElementById("hours").innerText = hours,
                    document.getElementById("minutes").innerText = minutes,
                    document.getElementById("seconds").innerText = seconds;

                //do something later when date is reached
                if (distance < 0) {
                    clearInterval(x);
                    var items = document.querySelectorAll(".compaign_countdown");
                    for (var i = 0; i <= items.length; i++) {
                        if (typeof items[i] !== 'undefined') {
                            items[i].style.display = "none";
                        }
                    }
                }
                //seconds
            }, 0)
    }
}());

var owl = $("#owl-carousel-client");
owl.owlCarousel();
$(document).on('click', '.next-btn', function () {
    owl.trigger("next.owl.carousel");
});
$(document).on('click', '.prev-btn', function () {
    owl.trigger("prev.owl.carousel");
});
$(".prev-btn").addClass("disabled");
$(owl).on("translated.owl.carousel", function (event) {
    if ($(".owl-prev").hasClass("disabled")) {
        $(".prev-btn").addClass("disabled");
    } else {
        $(".prev-btn").removeClass("disabled");
    }
    if ($(".owl-next").hasClass("disabled")) {
        $(".next-btn").addClass("disabled");
    } else {
        $(".next-btn").removeClass("disabled");
    }
});
// owl carousel end //

// preloader start //
$(window).on('load', function () {
    // Preloader
    $('.loader').fadeOut();
    $('.loader-mask').delay(500).fadeOut('slow');
});
// preloader end //
new WOW().init();
//
// video script start //
window.document.onkeydown = function (e) {
    if (!e) {
        e = event;
    }
    if (e.keyCode === 27) {
        lightbox_close();
    }
}

function lightbox_open() {
    var lightBoxVideo = document.getElementById("VisaChipCardVideo");
    document.getElementById('light').style.display = 'block';
    document.getElementById('fade').style.display = 'block';
    lightBoxVideo.play();
}

function lightbox_close() {
    var lightBoxVideo = document.getElementById("VisaChipCardVideo");
    document.getElementById('light').style.display = 'none';
    document.getElementById('fade').style.display = 'none';
    lightBoxVideo.pause();
}
// video script end //
$(function () {

    var counters = $(".count");
    var countersQuantity = counters.length;
    var counter = [];

    for (i = 0; i < countersQuantity; i++) {
        counter[i] = parseInt(counters[i].innerHTML, 10);
    }

    var count = function (start, value, id) {
        var localStart = start;
        setInterval(function () {
            if (localStart < value) {
                localStart++;
                counters[id].innerHTML = localStart;
            }
        }, 40);
    }

    for (j = 0; j < countersQuantity; j++) {
        count(0, counter[j], j);
    }
});

$('.count').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 3300,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
// 
// Get the button
var backButton = document.getElementById("back-to-top-btn");

if ($('#back-to-top-btn').length) {

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backButton.style.display = "block";
        } else {
            backButton.style.display = "none";
        }
    }
    // When the user clicks on the button, scroll to the top of the document
    backButton.addEventListener("click", function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });
}