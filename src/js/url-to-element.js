+function ($) {
  'use strict'
  $.fn.urlToElement = function () {
    return this.each(function () {
      $(this).on('click', function (e) {
        var elementId = $(this).attr('element-id')
        if($(elementId).length > 0) {
          e.preventDefault()
          var topEl = $(elementId).offset().top
          var heightNavbar = $('.navbar').height()
          $('html, body').animate({
            scrollTop: topEl - heightNavbar
          }, 500)
        }
      })
    })
  }

  $(document).ready(function () {
    $('.url-to-element').urlToElement()
  })
}(jQuery)