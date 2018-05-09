document.onload = conditionalPageLoading();

function conditionalPageLoading() {
  //universal css file appends to all pages
  $('head').append('<link rel="stylesheet" href="css/main.css">');

  //get the current page name + extension
  var currentDocument = location.href.split("/").slice(-1);
  //remove the file extension
  currentDocument = currentDocument.toString().replace(/\.[^/.]+$/, "");

  if (!(currentDocument.isEmpty)) {
    $('head').append('<link rel="stylesheet" href="css/' + currentDocument + '.css">');
  }
}

String.prototype.isEmpty = function () {
  return (this.length === 0 || !this.trim());
};
