  $(document).ready(function() {
      swipePages();
      tableToaccordion();
  });


  // swiper for pages

  function swipePages() {
      // slick for pages

      $('.slider-for').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          asNavFor: '.slider-nav',
          infinite: false
      });

      // slick for top pagination

      $('.slider-nav').slick({
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          asNavFor: '.slider-for',
          focusOnSelect: true,
          infinite: false,
          centerMode: false,
          responsive: [{
              breakpoint: 769,
              settings: {
                  slidesToShow: 1,
                  centerPadding: '25%',
                  centerMode: true
              }
          }]
      });


      // trigger for boxes on first page

      $('.highlights-box').click(function() {
          var index = $(this).data('index');
          console.log(index);
          var sliderNav = $(this).closest('.page-content').find('.slider-for');
          sliderNav.slick('slickGoTo', index, true);
      });
  }



  // table to accordion on mobile

  function tableToaccordion() {

      var animateTime = 500,
          navLink = $('.accordion-collapse');

      navLink.click(function() {
          var nav = $(this).closest('tr').find('.accordion-content');
          if (nav.height() === 0) {
              $(this).addClass('in');
              autoHeightAnimate(nav, animateTime);
          } else {
              nav.stop().animate({ height: '0' }, animateTime);
              $(this).removeClass('in');
          }
      });


      /* Function to animate height: auto */
      function autoHeightAnimate(element, time) {
          var curHeight = element.height(), // Get Default Height
              autoHeight = element.css('height', 'auto').height(); // Get Auto Height
          element.height(curHeight); // Reset to Default Height
          element.stop().animate({ height: autoHeight }, time); // Animate to Auto Height
      }
  }