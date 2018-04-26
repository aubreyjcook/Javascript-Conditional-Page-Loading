document.onload = conditionalPageLoading();

function conditionalPageLoading(){
  //appends to all pages
  $('head').append('<link rel="stylesheet" href="css/main.css">');

  //get the current page
  var currentDocument = location.href.split("/").slice(-1);

  if (currentDocument === "index.html"){
    $('head').append('<link rel="stylesheet" href="css/index.css">');
  }
}
