function addMainNav(navName) {
  console.log("add", navName);

  let pageFakeData = {
    navName: navname,
    content: "<h1>Hello</h1>",
    subNavs: []
  };

  SERVICE.saveData(pageFakeData);
}

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
//var navArray = [];
function goToMainNav() {
  $(".createMain").click(function(e) {
    //   if ($(".navTitle").val() !== "" && $(".navTitle").val() !== " ") {
    var navTitle = $(".navTitle")
      .val()
      .toLowerCase()
      .trim();

    SERVICE.checkMainNav(navTitle, addMainNav);
    //     console.log(navTitle);
    //     if (!navArray.includes(navTitle)) {
    //       navArray.push(navTitle);
    //       $(".text-wrapper").html(SERVICE.getQuillEditor());
    //       $(".text-wrapper").css("width", "100%");
    //       $(".modal").css("display", "none");
    //       console.log(navArray);
    //       $(".btn-holder").html("");
    //       var toolbarOptions = [
    //         ["bold", "italic", "underline", "strike"], // toggled buttons
    //         ["blockquote", "code-block", "image", "link"],
    //         [{ header: 1 }, { header: 2 }], // custom button values
    //         [{ list: "ordered" }, { list: "bullet" }],
    //         [{ script: "sub" }, { script: "super" }], // superscript/subscript
    //         [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    //         [{ direction: "rtl" }], // text direction
    //         [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    //         [{ header: [1, 2, 3, 4, 5, 6, false] }],
    //         [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    //         [{ font: [] }],
    //         [{ align: [] }],
    //         ["clean"] // remove formatting button
    //       ];
    //       var quill = new Quill("#editor", {
    //         modules: { toolbar: toolbarOptions },
    //         theme: "snow"
    //       });
    //       $("#saveData").click(function(e) {
    //         console.log("click");
    //         e.preventDefault();
    //         var pageNav = $(".navTitle").val();
    //         var justHtml = quill.root.innerHTML;
    //         $("#quillContent").html(justHtml);
    //         setPages(justHtml);
    //         $(".content-wrapper").css("display", "block");
    //         $(".pageData").html(justHtml);
    //       });
    //       //alert(navTitle);
    //     } else {
    //       alert("This name already exists");
    //     }
    //   } else {
    //     alert("Input is empty");
    //   }
  });
}
// function goToMainNav() {
//   $(".createMain").click(function(e) {
//     $.each(navArray, function(idx, pageName) {});
//   });
// }
$(document).ready(function() {
  SERVICE.initFirebase();
  initButtons();
  addGetStartedListener();
});
