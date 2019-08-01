(function($) {
  $(function() {
    $('nav ul li > a:not(:only-child)').click(function(e) {
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
  document.querySelector('#nav-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
  });
  $('#nav-toggle').click(function() {
    $('nav ul').toggle();
  });
})(jQuery);
