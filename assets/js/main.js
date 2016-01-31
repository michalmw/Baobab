(function($) {
    "use strict"; // Start of use strict

    $(document).ready(function() {
        $('#mainNav').affix({
            offset: {
                top: 100
            }
        });




        $('ul.nav li.dropdown').hover(function() {
          $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
        }, function() {
          $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
        });

        $('.navbar-collapse ul li a').click(function() {
            $('.navbar-toggle:visible').click();
        });
        new WOW().init();
        // $('#contact').css('display','block');


    });
    // $(window).load(function() {
    //      function tt() {
    //         $('.ft').addClass('animated');
    //         $('.ft').css('animation-name','none');

    //     }

    //     setTimeout(tt, 1000);
    // });

})(jQuery); // End of use strict
