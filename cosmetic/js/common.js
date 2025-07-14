$(function () {

  AOS.init();
  //햄버거 메뉴 클릭
  $('.ham').click(function () {
    $('header').toggleClass('on');
  });

  const $gnbLi = $('.fix .gnb>ul>li');
  for (let i = 0; i < $gnbLi.length; i++) {
    $gnbLi.eq(i).css({
      'transition-delay': 0.2 * (i + 1) + 's',
    });
  }

  $(window).on('scroll', function () {
    let st = $(this).scrollTop();
    // console.log(st);
    if (st >= 80) {
      $('header').addClass('sc');
    } else {
      $('header').removeClass('sc');
    }
  })

});

// common.js 맨 아래에 추가
AOS.init({
  // once: true, // 한 번만 실행 (더 고급스럽게 보임)
  // duration: 800, // 기본 애니메이션 시간
  // easing: 'ease-in-out',
  duration: 1000,
  easing: 'ease-in-out',
  once: true,
  mirror: false,
  anchorPlacement: 'top-bottom'
});