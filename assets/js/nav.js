(function($) {

  const mobileSmall = window.matchMedia("(max-width: 580px)")

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
    $('nav .list').toggle();
    $('nav .header-social-icons').toggle();
  });

})(jQuery);
