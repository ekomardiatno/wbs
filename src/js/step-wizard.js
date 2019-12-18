+function ($) {
  'use strict'
  $.fn.stepWizard = function () {
    return this.each(function () {
      $(this).find('.next').on('click', function () {
        var requiredLength = $(this).parents('.content-action.active').find('input[required]').length + $(this).parents('.content-action.active').find('select[required]').length + $(this).parents('.content-action.active').find('textarea[required]').length + $(this).parents('.step-wizard').find('.content-step.active').find('input[required]').length + $(this).parents('.step-wizard').find('.content-step.active').find('select[required]').length + $(this).parents('.step-wizard').find('.content-step.active').find('textarea[required]').length
        var filledRequired = 0
        if($(this).parents('.content-action.active').find('input[required]').length) {
          var filled = 0
          for(var i = 0;i < $(this).parents('.content-action.active').find('input[required]').length;i++) {
            var type = $(this).parents('.content-action.active').find('input[required]').eq(i).attr('type')
            switch(type) {
              case 'checkbox':
                if($(this).parents('.content-action.active').find('input[required]').eq(i).is(':checked')) {
                  $(this).parents('.content-action.active').find('input[required]').eq(i).removeClass('is-invalid')
                  filled = filled + 1
                  $(this).parents('form').removeClass('was-validated')
                } else {
                  $(this).parents('form').addClass('was-validated')
                }
                break
              case 'radio':
                if($(this).parents('.content-action.active').find('input[required]').eq(i).is(':checked')) {
                  filled = filled + 1
                  $(this).parents('form').removeClass('was-validated')
                } else {
                  $(this).parents('form').addClass('was-validated')
                }
                break
              default:
                if($(this).parents('.content-action.active').find('input[required]').eq(i).val() !== '') {
                  filled = filled + 1
                  $(this).parents('form').removeClass('was-validated')
                } else {
                  $(this).parents('form').addClass('was-validated')
                }
                break
            }
          }
          if(filled === $(this).parents('.content-action.active').find('input[required]').length) {
            filledRequired += filled
          }
        }

        if($(this).parents('.step-wizard').find('.content-step.active').find('input[required]').length) {
          var filled = 0
          for(var i = 0;i < $(this).parents('.step-wizard').find('.content-step.active').find('input[required]').length;i++) {
            var type = $(this).parents('.step-wizard').find('.content-step.active').find('input[required]').eq(i).attr('type')
            switch(type) {
              case 'checkbox':
                if($(this).parents('.step-wizard').find('.content-step.active').find('input[required]').eq(i).is(':checked')) {
                  filled = filled + 1
                  $(this).parents('form').removeClass('was-validated')
                } else {
                  $(this).parents('form').addClass('was-validated')
                }
                break
              case 'radio':
                if($(this).parents('.step-wizard').find('.content-step.active').find('input[required]').eq(i).is(':checked')) {
                  filled = filled + 1
                  $(this).parents('form').removeClass('was-validated')
                } else {
                  $(this).parents('form').addClass('was-validated')
                }
                break
              default:
                if($(this).parents('.step-wizard').find('.content-step.active').find('input[required]').eq(i).val() !== '') {
                  filled = filled + 1
                  $(this).parents('form').removeClass('was-validated')
                } else {
                  $(this).parents('form').addClass('was-validated')
                }
                break
            }
          }
          if(filled === $(this).parents('.step-wizard').find('.content-step.active').find('input[required]').length) {
            filledRequired += filled
          }
        }
        
        if ($(this).parents('.content-action.active').find('select[required]').length) {
          var filled = 0
          for(var i = 0;i < $(this).parents('.content-action.active').find('select[required]').length;i++) {
            if($(this).parents('.content-action.active').find('select[required]').eq(i).find(':selected').val() !== '') {
              filled = filled + 1
              $(this).parents('form').removeClass('was-validated')
            } else {
              $(this).parents('form').addClass('was-validated')
            }
          }
          if(filled === $(this).parents('.content-action.active').find('select[required]').length) {
            filledRequired += filled
          }
        }
        
        if ($(this).parents('.step-wizard').find('.content-step.active').find('select[required]').length) {
          var filled = 0
          for(var i = 0;i < $(this).parents('.step-wizard').find('.content-step.active').find('select[required]').length;i++) {
            if($(this).parents('.step-wizard').find('.content-step.active').find('select[required]').eq(i).find(':selected').val() !== '') {
              filled = filled + 1
              $(this).parents('form').removeClass('was-validated')
            } else {
              $(this).parents('form').addClass('was-validated')
            }
          }
          if(filled === $(this).parents('.step-wizard').find('.content-step.active').find('select[required]').length) {
            filledRequired += filled
          }
        }
        
        if ($(this).parents('.content-action.active').find('textarea[required]').length) {
          var filled = 0
          for(var i = 0;i < $(this).parents('.content-action.active').find('textarea[required]').length;i++) {
            if($(this).parents('.content-action.active').find('textarea[required]').eq(i).val() !== '') {
              filled = filled + 1
              $(this).parents('form').removeClass('was-validated')
            } else {
              $(this).parents('form').addClass('was-validated')
            }
          }
          if(filled === $(this).parents('.content-action.active').find('textarea[required]').length) {
            filledRequired += filled
          }
        }

        if ($(this).parents('.step-wizard').find('.content-step.active').find('textarea[required]').length) {
          var filled = 0
          for(var i = 0;i < $(this).parents('.step-wizard').find('.content-step.active').find('textarea[required]').length;i++) {
            if($(this).parents('.step-wizard').find('.content-step.active').find('textarea[required]').eq(i).val() !== '') {
              filled = filled + 1
              $(this).parents('form').removeClass('was-validated')
            } else {
              $(this).parents('form').addClass('was-validated')
            }
          }
          if(filled === $(this).parents('.step-wizard').find('.content-step.active').find('textarea[required]').length) {
            filledRequired += filled
          }
        }

        if(filledRequired === requiredLength) {
          var indexActive = $(this).parents('.step-wizard').find('.nav-step ul').children('li.active').index()
          var lengthEl = $(this).parents('.step-wizard').find('.nav-step ul').children('li').length
          if(indexActive + 1 < lengthEl) {
            $(this).parents('.step-wizard').find('.nav-step ul').children('li').removeClass('active')
            $(this).parents('.step-wizard').find('.nav-step ul').children('li').eq(indexActive).addClass('complete')
            $(this).parents('.step-wizard').find('.nav-step ul').children('li').eq(indexActive + 1).addClass('active')
            $(this).parents('.step-wizard').find('.container-step').children('.content-step').removeClass('active')
            $(this).parents('.step-wizard').find('.container-step').children('.content-step').eq(indexActive).addClass('complete')
            $(this).parents('.step-wizard').find('.container-step').children('.content-step').eq(indexActive + 1).addClass('active')
            $(this).parents('.step-wizard').find('.action-step').children('.content-action').removeClass('active')
            $(this).parents('.step-wizard').find('.action-step').children('.content-action').eq(indexActive).addClass('complete')
            $(this).parents('.step-wizard').find('.action-step').children('.content-action').eq(indexActive + 1).addClass('active')
          }
        }
      })

      $(this).find('.prev').on('click', function () {
        var indexActive = $(this).parents('.step-wizard').find('.nav-step ul').children('li.active').index()
        if(indexActive > 0) {
          $(this).parents('.step-wizard').find('.nav-step ul').children('li').removeClass('active')
          $(this).parents('.step-wizard').find('.nav-step ul').children('li').eq(indexActive - 1).removeClass('complete')
          $(this).parents('.step-wizard').find('.nav-step ul').children('li').eq(indexActive - 1).addClass('active')
          $(this).parents('.step-wizard').find('.container-step').children('.content-step').removeClass('active')
          $(this).parents('.step-wizard').find('.container-step').children('.content-step').eq(indexActive - 1).removeClass('complete')
          $(this).parents('.step-wizard').find('.container-step').children('.content-step').eq(indexActive - 1).addClass('active')
          $(this).parents('.step-wizard').find('.action-step').children('.content-action').removeClass('active')
          $(this).parents('.step-wizard').find('.action-step').children('.content-action').eq(indexActive - 1).removeClass('complete')
          $(this).parents('.step-wizard').find('.action-step').children('.content-action').eq(indexActive - 1).addClass('active')
        }
      })
    })
  }

  $(document).ready(function () {
    $('.step-wizard').stepWizard()
  })
}(jQuery)