// var homeContent = ``;
// var aboutContent = ``;
// var productsContent = ``;
// var contactContent = ``;

function initListeners() {
  $("nav a").on("click", (e) => {
    let btnID = e.currentTarget.id;
    loadContent(btnID);
  });
}

function loadContent(pageName) {
  $.get(`../pages/${pageName}.html`, (data) => {
    $("#app").html(data);
  }).fail((error) => {
    alert("Page is " + error.statusText);
  });
}


$(document).ready(function () {
  loadContent("home");
  initListeners();
});
