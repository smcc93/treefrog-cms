function displayData(addData) {
  var container = "<nav>";
  addData.forEach(function (doc) {
    var id = doc.id;

    var rawData = doc.data();
    container += `<a href='#' id= '${id}'>${rawData.navName}</a>`;
  });
  container += "</nav>";
  $(".showData").html(container);
}
function init() {
  $(".getData").click(function (e) {
    PRACTICE_SERVICE.getAllData(displayData);
  });

  $("#addData").click(function (e) {
    e.preventDefault();

    var inputData = $("#inputData").val().toLowerCase().trim();

    if (inputData != "") {
      console.log("add data");
      PRACTICE_SERVICE.checkPages(inputData, alertUser);
      $("#inputData").val("");
    } else {
      alert("empty");
    }
  });
  //   $("#checkPages").click(function(e) {
  //     e.preventDefault();
  //     console.log("check data");
  //     PRACTICE_SERVICE.checkPages("home");
  //   });
}

function alertUser(result) {
  alert(result);
}

$(document).ready(function () {
  PRACTICE_SERVICE.initFirebase(init);
});
