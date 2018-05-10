document.onload = conditionalPageLoading();

function conditionalPageLoading() {
  // TODO: create functions for loading head information for:
  //

  // check for normalize.css and main.css files and load them if they exist
  loadCSSFile('normalize');
  loadCSSFile('main');

  //loads a .css file based on the specific page location
  loadPageCSS();
}

//methods
function loadCSSFile(fileName) {
  //get the site domain and current path url
  var siteURL = document.location.origin + document.location.pathname;
  siteURL = siteURL.substring(0, siteURL.lastIndexOf("/"));

  //ajax method that checks for the existence of a css file in the /css directory based on fileName string, loads it if it exists
  $.ajax({
    url: siteURL + '/css/' + fileName + '.css',
    type: 'HEAD',
    error: function()
    {
      //file does not exist
    },
    success: function(){
      //file exists
      $('head').append('<link rel="stylesheet" href="css/' + fileName + '.css">');
    }
  });
}

function loadPageCSS() {
  //get the current page name + extension
  var currentDocument = location.href.split("/").slice(-1);
  //remove the file extension
  currentDocument = currentDocument.toString().replace(/\.[^/.]+$/, "");

  if (currentDocument.toString() !== '') {
    loadCSSFile(currentDocument);

    //$('head').append('<link rel="stylesheet" href="css/' + currentDocument + '.css">');
  }
}
