+function ($) {
  'use strict'
  $.fn.dataDinamis = function () {
    return this.each(function () {
      var html = $(this).find('tbody').children('tr').eq(0).html()
      var tbody = $(this).find('tbody')
      $(this).on('click', '.tambah-data', function () {
        $(this).parents('table.data-dinamis').find('tbody').append('<tr>' + html + '</tr>')
        sortIndex(tbody)
      })
      $(this).on('click', '.hapus-data', function () {
        var lengthEl = $(this).parents('tbody').children('tr').length
        if(lengthEl > 1) {
          $(this).parents('tr').remove()
          sortIndex(tbody)
        }
      })
    })
  }

  function sortIndex(tbody) {
    tbody.children('tr').each(function (e) {
      $(this).children('td').eq(0).text(e + 1)
    })
  }

  $(document).ready(function () {
    $('.data-dinamis').dataDinamis()
  })
}(jQuery)