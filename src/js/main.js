$(document).ready(() => {
  $(document).on('click', '.tumbler', function (event) {
    const $elem = $(event.target).hasClass('tumbler')
      ? $(event.target)
      : $(event.target).parents('.tumbler')
    const targetClass = $elem.attr('data-target')
    const $target = $('.' + targetClass)
    const $body = $('body')

    if ($target !== undefined && !$body.hasClass('tumbler-active')) {
      $body.toggleClass('tumbler-active')
      $elem.toggleClass('pressed')
      $target.slideToggle().toggleClass('untouchable')
    }
  })

  $(document).on('click', '.untouchable', function (e) {
    e.stopImmediatePropagation()
  })

  $(document).on('click', '.tumbler-active', function (e) {
    $('.pressed').removeClass('pressed')
    $('.tumbler-active').removeClass('tumbler-active')
    $('.untouchable').slideUp().removeClass('untouchable')
    e.stopPropagation()
    e.stopImmediatePropagation()
  })


  $('.main-slider').slick({
    adaptiveHeight: true,
    prevArrow: '.main-slider_arrow-prev',
    nextArrow: '.main-slider_arrow-next',
    dots: true,
    customPaging: () => {
      return '<div class="main-slider_dot"></div>'
    },
    infinite: true
  })
})
