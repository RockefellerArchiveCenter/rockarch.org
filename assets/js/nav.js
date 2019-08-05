(function($) {
  
  const mobileSmall = window.matchMedia("(max-width: 580px)")

  $(function() {
    $('nav ul li > a:not(:only-child)').on('click', function(e) {
      $(this).siblings('.dropdown').toggle();
      $(this).toggleClass('active');
      $('nav ul li > a:not(:only-child)').not($(this)).removeClass('active')
      $('.dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    $('html').click(function() {
      $('.dropdown').hide();
      $('nav ul li > a:not(:only-child)').each(function() {
        $(this).removeClass('active')
      })
    });
  });

  $(function() {
    $('.rac-side-nav .nav-toggle').on('click', function(e) {
      if ($(this).siblings('.side-nav').is(':visible')) {
        $(this).html('Open Page Menu');
      } else {
        $(this).html('Close Page Menu');
      }
      $(this).siblings('.side-nav').toggle();
      e.stopPropagation();
    });
    $('html').click(function() {
      if (mobileSmall.matches) {
        $('.side-nav').hide();
        $('.side-nav').siblings('.nav-toggle').html('Open Page Menu');
      }
    })
  });

  document.querySelector('#nav-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
  });
  $('#nav-toggle').click(function() {
    $('nav ul').toggle();
  });

})(jQuery);
