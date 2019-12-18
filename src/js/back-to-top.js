+function ($) {
  'use strict'
  $.fn.backToTop = function () {
    return this.each(function () {
      $(this).on('click', function (event) {
        event.preventDefault()
        $('html, body').animate({
          scrollTop: 0
        }, 500)
      })
    })
  }
  $(document).ready(function () {
    $('.back-to-top').backToTop()
  })
}(jQuery)