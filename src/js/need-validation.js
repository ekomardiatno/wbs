+function ($) {
  'use strict'
  $.fn.needValidate = function () {
    return this.each(function () {
      var $this = this
      $this.addEventListener('submit', function (event) {
        if(!$this.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        $this.classList.add('was-validated')
      })
    })
  }

  $(document).ready(function () {
    $('.needs-validation').needValidate()
  })
}(jQuery)