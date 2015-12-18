answers = [ 2, 3, 1, 1, 2, 3, 1, 2, 1, 2 ];

$(function(){
  $('.results').hide();

  $('.js-check').on('click', function(){
    var userAnswers     = $('.question'),
        correctAnswers  = 0;

    for(var i = 0; i < answers.length; i++) {
      if ($(userAnswers[i]).find('.radio_' + answers[i]).is(':checked')) {
        correctAnswers++;
      }
    }

    $('input[type="radio"]').attr('checked', false);
    $('.tests').hide();
    $('.results').show();
    $('#user_results').text(correctAnswers + '/' + answers.length);
  });

  $('.js-again').on('click', function(){
    $('.results').hide();
    $('.tests').show();
  });
});
