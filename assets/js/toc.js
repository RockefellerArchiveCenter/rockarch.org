// Creates a single-level table of contents based on headings

(function($){
  $.fn.toc = function(options) {
    var defaults = {
      minimumHeaders: 1,
      headers: 'h2',
      showEffect: 'none', // values: [show|slideDown|fadeIn|none]
      showSpeed: '0', // set to 0 to deactivate effect
    },
    settings = $.extend(defaults, options);

    function fixedEncodeURIComponent (str) {
      return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
        return '%' + c.charCodeAt(0).toString(16);
      });
    }

    function createLink (header) {
      var innerText = (header.textContent === undefined) ? header.innerText : header.textContent;
      return "<button href='#" + fixedEncodeURIComponent(header.id) + "' >" + innerText + "</button>";
    }

    var headers = $(settings.headers).filter(function() {
      // get all headers with an ID
      var previousSiblingName = $(this).prev().attr( "name" );
      if (!this.id && previousSiblingName) {
        this.id = $(this).attr( "id", previousSiblingName.replace(/\./g, "-") );
      }
      return this.id;
    }), output = $(this);
    if (!headers.length || headers.length < settings.minimumHeaders || !output.length) {
      $(this).hide();
      return;
    }

    if (0 === settings.showSpeed) {
      settings.showEffect = 'none';
    }

    var render = {
      show: function() { output.hide().html(html).show(settings.showSpeed); },
      slideDown: function() { output.hide().html(html).slideDown(settings.showSpeed); },
      fadeIn: function() { output.hide().html(html).fadeIn(settings.showSpeed); },
      none: function() { output.html(html); }
    };

    var get_level = function(ele) { return parseInt(ele.nodeName.replace("H", ""), 10); };

    var level = get_level(headers[0]),
      this_level,
      html = '';
    headers.addClass('clickable-header')
    .each(function(_, header) {
      html += createLink(header);
    });

    render[settings.showEffect]();

  };
})(jQuery);
