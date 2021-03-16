$(function () {
  var $nav = $(".nav-menu");
  var navHeight = $nav.outerHeight();
  $('a[href^="#"]').on("click", function() {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate(
      {
        scrollTop: position,
      },
      300,
      "swing"
    );
    return false;
  });
});
