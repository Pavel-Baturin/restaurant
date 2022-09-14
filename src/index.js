import './sass/index.scss';

$(document).ready(function () {
  $('.header__burger').click(function () {
    $('.header__burger, .header__nav').toggleClass("active");
    $('body').toggleClass("lock");
  });
  window.matchMedia('(min-width: 768px)').change(function (e) {
    if (!e.matches) return;
    $('.header__burger, .header__nav').toggleClass('active');
  });
});
