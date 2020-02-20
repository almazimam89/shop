document.addEventListener("DOMContentLoaded", function() {
  $(".btn-burger").on("click", function(event) {
    if ($(this).is(event.target)) {
      $(".mobile").fadeOut("slow");
      $(this)
        .css("background", "#600")
        .find("span")
        .removeClass("active");
    } else {
      $(".mobile").fadeIn("slow");
      $(this)
        .css("background", "#fff")
        .find("span")
        .addClass("active");
    }
  });
  $(".catalog__show").on("click", function(event) {
    if ($(this).is(event.target)) {
      $(".catalog__list")
        .find("ul")
        .fadeOut("slow");
      $(this)
        .css("box-shadow", "inset 0 0 20px 10px #600")
        .find("span")
        .removeClass("open");
    } else {
      $(".catalog__list")
        .find("ul")
        .fadeIn("slow");
      $(this)
        .css("box-shadow", "0 0 20px 10px #fff")
        .find("span")
        .addClass("open");
    }
  });
});
