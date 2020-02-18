function initButtons() {
  $(".get-started").click(function(e) {
    $("#home div").removeClass("active");
    $("#addNav div").addClass("active");

    $(".text-wrapper").html(SERVICE.getGetStartedContent());
    $(".btn-holder").html(SERVICE.getCreateNavButtons());
    ModalButtons();
  });

  $("#home").click(function(e) {
    $("#addNav div").removeClass("active");
    $("#home div").addClass("active");

    $(".text-wrapper").html(SERVICE.getHomeContent());
    $(".btn-holder").html(SERVICE.getHomeStartButton());
  });
}

function ModalButtons() {
  $(".main-nav").click(function(e) {
    $(".alert-box").html(SERVICE.getMainNavContent());
    $(".modal").css("display", "flex");
  });
  $(".sub-nav").click(function(e) {
    $(".alert-box").html(SERVICE.getSubNavContent());
    $(".modal").css("display", "flex");
    console.log("clicked");
  });
}

$(document).ready(function() {
  initButtons();
});
