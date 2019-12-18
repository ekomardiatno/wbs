+function ($) {
  'use strict'
  $.fn.navbarToggler = function () {
    return this.each(function () {
      $(this).on('click', function () {
        $(this).siblings('.navbar-collapse').addClass('open')
        $(this).siblings('.navbar-collapse').prepend('<div class="overlay"></div>')
        $('body').addClass('overflow-hidden')
      })
      $(this).siblings('.navbar-collapse').on('click', '.overlay', function () {
        $(this).parent('.navbar-collapse').removeClass('open')
        $(this).remove()
        $('body').removeClass('overflow-hidden')
      })
      $(this).siblings('.navbar-collapse').on('click', '.nav-link', function() {
        $(this).parents('.navbar-collapse').removeClass('open')
        $(this).parents('.navbar-collapse').children('.overlay').remove()
        $('body').removeClass('overflow-hidden')
      })
    })
  }
  $(document).ready(function () {
    $('.toggler-custom').navbarToggler()
  })
}(jQuery)