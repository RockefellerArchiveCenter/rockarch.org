// Creates a single-level table of contents based on headings

(function ($) {
  $.fn.toc = function (options) {
    var defaults = {
      minimumHeaders: 1,
      headers: 'h2',
      showEffect: 'none', // values: [show|slideDown|fadeIn|none]
      showSpeed: '0' // set to 0 to deactivate effect
    }
    var settings = $.extend(defaults, options)

    function fixedEncodeURIComponent (str) {
      return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
        return '%' + c.charCodeAt(0).toString(16)
      })
    }

    function createLink (header) {
      var innerText = (header.textContent === undefined) ? header.innerText : header.textContent
      return "<a href='#" + fixedEncodeURIComponent(header.id) + "' >" + innerText + '</a>'
    }

    var headers = $(settings.headers).filter(function () {
      // get all headers with an ID
      var previousSiblingName = $(this).prev().attr('name')
      if (!this.id && previousSiblingName) {
        this.id = $(this).attr('id', previousSiblingName.replace(/\./g, '-'))
      }
      return this.id
    })
    var output = $(this)
    if (!headers.length || headers.length < settings.minimumHeaders || !output.length) {
      $(this).hide()
      return
    }

    if (settings.showSpeed === 0) {
      settings.showEffect = 'none'
    }

    var render = {
      show: function () { output.hide().html(html).show(settings.showSpeed) },
      slideDown: function () { output.hide().html(html).slideDown(settings.showSpeed) },
      fadeIn: function () { output.hide().html(html).fadeIn(settings.showSpeed) },
      none: function () { output.html(html) }
    }


    var html = ''
    headers.addClass('clickable-header')
      .each(function(_, header) {
        html += createLink(header)
      })

    render[settings.showEffect]()

  }
})(jQuery)
