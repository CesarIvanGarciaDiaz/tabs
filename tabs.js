$(document).ready(function () {
  // Escribe tu código aquí

  $('#tab1').show()
  $('.tabs > li').click(function(){ 
    console.log(this);
    $('.tabs > li').removeClass('active'); 
    $(this).addClass('active');  
    $('.tab').hide(); 
    id = $(this).children().attr('href');
    $(id).show();
  });

});
