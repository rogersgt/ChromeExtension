$(document).ready(function(){


  var page = {
    init: function() {
      page.retrieveInfo();
    },
    retrieveInfo: function() {
      $.ajax({
        url: 'http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/7?api-key=1b49c5883656e73007430a84af82844a:6:73362387',
        method: 'GET',
        success: function(data) {
          for (i = 0; i < data.results.length; i++) {
            title = data.results[i].title;
            backgroundPic = data.results[i].media[0]['media-metadata'][0].url;
            description = data.results[i].abstract;
            redirect = data.results[i].url;

             $('.display').append("<li style='background-image: url(" +  backgroundPic + ")'>" +
                       "<a target='_blank' href='" + redirect + "'<h3>" + title + "</h3></a>" +
                       "<br /><p class='block'>" + description + "</p></li>");
          }
        }
      });
    },
  };

  page.init();
});
