function initButtons() {
  $("#home").click(function(e) {
    $("#addNav div").removeClass("active");
    $("#home div").addClass("active");

    $(".text-wrapper").html(SERVICE.getHomeContent());
    $(".btn-holder").html(SERVICE.getHomeStartButton());
    addGetStartedListener();
    $(".main-nav").off();
    $(".sub-nav").off();
  });
}

function addGetStartedListener() {
  $(".get-started").click(function(e) {
    $("#home div").removeClass("active");
    $("#addNav div").addClass("active");

    $(".text-wrapper").html(SERVICE.getGetStartedContent());
    $(".btn-holder").html(SERVICE.getCreateNavButtons());
    ModalButtons();
    $(".get-started").off();
  });
}

function ModalButtons() {
  $(".main-nav").click(function(e) {
    $(".alert-box").html(SERVICE.getMainNavContent());
    $(".modal").css("display", "flex");
    $(".closeModal").click(function(e) {
      $(".modal").css("display", "none");
    });
    goToMainNav();
    // $(".alert-box").css("justify-content", "space-around");
  });
  $(".sub-nav").click(function(e) {
    $(".alert-box").html(SERVICE.getSubNavContent());
    $(".modal").css("display", "flex");
    $(".closeModal").click(function(e) {
      $(".modal").css("display", "none");
    });
    goToMainNav();
  });
}
var navArray = [];
function goToMainNav() {
  $(".createMain").click(function(e) {
    if ($(".navTitle").val() !== "" && $(".navTitle").val() !== " ") {
      var navTitle = $(".navTitle").val();
      navTitle = navTitle.toLowerCase();
      console.log(navTitle);
      if (!navArray.includes(navTitle)) {
        navArray.push(navTitle);
        $(".text-wrapper").html(SERVICE.getQuillEditor());
        $(".modal").css("display", "none");
        console.log(navArray);
        $(".btn-holder").html("");
        var quill = new Quill("#editor", {
          theme: "snow"
        });
        alert(navTitle);
      } else {
        alert("This name already exists");
      }
    } else {
      alert("Input is empty");
    }
  });
}
$(document).ready(function() {
  initButtons();
  addGetStartedListener();
});
