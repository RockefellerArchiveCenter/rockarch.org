(function($) {

  const mobileSmall = window.matchMedia("(max-width: 580px)")

  // Side navigation toggle
  $(function() {
    $('.rac-side-nav .nav-toggle').on('click', function(e) {
      if ($(this).siblings('.side-nav').is(':visible')) {
        $(this).html('Open Page Menu');
        $(this).attr("aria-expanded", "false");
      } else {
        $(this).html('Close Page Menu');
        $(this).attr("aria-expanded", "true");
      }
      $(this).siblings('.side-nav').toggle();
      e.stopPropagation();
    });
    $('html').click(function() {
      if (mobileSmall.matches) {
        $('.side-nav').hide();
        $('.side-nav').siblings('.nav-toggle').html('Open Page Menu');
      }  else  {
        // allow keyboard focus
         $('.side-nav button').attr('tabindex', '0');
      }
    })
  });

  // Main navigation toggle
  document.querySelector('#nav-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
    $(this).attr("aria-expanded", function (i, attr) {
      return attr == "true" ? "false" : "true";
    });
  });

  $('#nav-toggle').click(function() {
    $('nav .list').toggle();
    $('nav .header-social-icons').toggle();
  });

})(jQuery);