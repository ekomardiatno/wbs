+function ($) {
  'use strict'

  function doAffix(width, pageY, topOffset, navbar) {
    var srcLogo = navbar.find('.navbar-brand img').attr('src')
    var srcLogoArray = srcLogo.split('/')
    srcLogoArray.splice(srcLogoArray.length - 1)
    var srcLogoUrl = ''
    for(var i = 0;i < srcLogoArray.length;i++) {
      srcLogoUrl += srcLogoArray[i] + '/' 
    }
    console.log(srcLogoUrl)
    if(pageY >= topOffset) {
      navbar.addClass('bg-white navbar-light affix').removeClass('navbar-dark')
      navbar.find('.navbar-brand img').attr('src', srcLogoUrl + 'logo-dark.png')
    } else {
      navbar.removeClass('bg-white navbar-light affix').addClass('navbar-dark')
      navbar.find('.navbar-brand img').attr('src', srcLogoUrl + 'logo-light.png')
    }
  }

  function affix(topOffset, navbar) {
    var pageY = $(window).scrollTop(),
        width = $(window).innerWidth()
    doAffix(width, pageY, topOffset, navbar)
    $(window).on('scroll', function (e) {
      var pageY = e.currentTarget.pageYOffset,
          width = e.currentTarget.innerWidth
      doAffix(width, pageY, topOffset, navbar)
    })
  }

  $.fn.navbarAffix = function () {
    return this.each(function () {
      affix(50, $(this))
    })
  }

  $(document).ready(function () {
    $('.navbar').navbarAffix()
  })
}(jQuery)