$(document).ready(function(){

  articleTempl = _.template(templates.article);
  articles =[];

  var page = {
    init: function() {
      page.retrieveInfo();
    },
    retrieveInfo: function() {
      $.ajax({
        url: 'http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/7?api-key=1b49c5883656e73007430a84af82844a:6:73362387',
        method: 'GET',
        success: function(data) {
          for (i = 0; i < articles.length; i++) {
            title = articles[i].title;
            pic = articles[i].media[0]['media-metadata'][0].url;
            description = articles[i].abstract;
            link = articles[i].url;
            //date = articles[i].published_date;

             $('.display').append("<li style='background-image: url(" +  backgroundPic + ")'>" +
                       "<a target='_blank' href='" + redirect + "'<h3>" + "headline" + "</h3></a>" +
                       "<br /><p class='block'>" + "text" + "</p></li>");
          }
        }
      });
    },
  };

  page.init();
});
