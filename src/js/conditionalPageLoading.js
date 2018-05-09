document.onload = conditionalPageLoading();

function conditionalPageLoading() {
  // TODO: create functions for loading head information for:
  //

  // TODO: create conditional logic to check if main/normalize.css files are present in their usual location and load them if they exist

  $.ajax({
    url: 'http://localhost/javascript-conditional-page-loading/css/main.css',
    type: 'HEAD',
    error: function()
    {
      //file does not exist
    },
    success: function(){
      //file exists
      $('head').append('<link rel="stylesheet" href="css/main.css">');
    }
  });

/*
  //universal css file appends to all pages
  $('head').append('<link rel="stylesheet" href="css/main.css">');
*/
  //get the current page name + extension
  var currentDocument = location.href.split("/").slice(-1);
  //remove the file extension
  currentDocument = currentDocument.toString().replace(/\.[^/.]+$/, "");

  if (currentDocument.toString() !== '') {
    $('head').append('<link rel="stylesheet" href="css/' + currentDocument + '.css">');
  }
}
