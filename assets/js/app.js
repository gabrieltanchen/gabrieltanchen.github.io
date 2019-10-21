$(document).foundation();

$(document).ready(function() {
  $('.gallery-image-button').click(function() {
    $('.lightbox-image').attr('src', $(this).attr('data-image'));

    $(this).attr('data-image');
    $('.lightbox-overlay').css({
      display: 'block',
    }).animate({
      opacity: 1,
    }, {
      duration: 1000,
    });
  });

  $('.lightbox-overlay').click(function() {
    $(this).animate({
      opacity: 0,
    }, {
      complete: function() {
        $(this).css({
          'display': 'none',
        });
      },
      duration: 1000,
    });
  });
});
