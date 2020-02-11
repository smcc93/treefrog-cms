function initButtons() {
  $(".get-started").click(function(e) {
    $("#home div").removeClass("active");
    $("#addNav div").addClass("active");

    $(".text-wrapper").html(SERVICE.getGetStartedContent());
    $(".btn-holder").html(SERVICE.getCreateButtons());
  });

  $("#home").click(function() {
    $("#addNav div").removeClass("active");
    $("#home div").addClass("active");

    $(".text-wrapper").html(SERVICE.getGetStartedContent());
    $(".btn-holder").html(SERVICE.getStartButton());
  });
}

$(document).ready(function() {
  initButtons();
});
