$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 50) {
    $(".header-container").addClass("lightHeader");
  } else {
    $(".header-container").removeClass("lightHeader");
  }
});

$(document).ready(function () {
  if (window.innerWidth < 768) {
    $(".header__content__navigation a").click(function (event) {
      $(".header__content__burger, .header__content__navigation").toggleClass(
        "active-burger"
      );
      $("body").toggleClass("lock");
    });
  }
});

$(document).ready(function () {
  $(".header__content__burger").click(function (event) {
    $(".header__content__burger, .header__content__navigation").toggleClass(
      "active-burger"
    );
    $("body").toggleClass("lock");
  });
});
