document.onload = conditionalPageLoading();

function conditionalPageLoading() {
  // TODO: create functions for loading head information for:
  //

  // TODO: turn the below code into a method, use reg ex string parsing to make it load the file's directory location into a var, and conditionally check each critical css file
  loadRegularCSS();

  /*
  $.ajax({
    url: 'http://localhost/javascript-conditional-page-loading/css/normalize.css',
    type: 'HEAD',
    error: function()
    {
      //file does not exist
    },
    success: function(){
      //file exists
      $('head').append('<link rel="stylesheet" href="css/normalize.css">');
    }
  });

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
  */
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


//methods
function loadRegularCSS() {
  var siteURL = document.location.origin + document.location.pathname;

  $.ajax({
    url: siteURL + 'css/normalize.css',
    type: 'HEAD',
    error: function()
    {
      //file does not exist
    },
    success: function(){
      //file exists
      $('head').append('<link rel="stylesheet" href="css/normalize.css">');
    }
  });
  
}
