//UP
$(window).scroll(function () {
   var w = $(window).width()
   if ($(window).scrollTop() > 50) {
      $('#up').fadeIn(300)
   } else {
      $('#up').fadeOut(300)
   }
})
$('#up').click(function (event) {
   $('body,html').animate({ scrollTop: 0 }, 300)
})
