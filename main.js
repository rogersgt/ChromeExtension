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
          articles = data.results;
          for (i = 0; i < articles.length; i++) {
            title = articles[i].title;
            pic = articles[i].media[0]["media-metadata"][0].url;
            description = articles[i].abstract;

            info = {
              headline: title,
              backgroundPic: pic,
              text: description};

              post = articleTempl(info);
             $('.display').append(post);
          }

        //console.log(articles);
        }
      });
    },
  };

  page.init();
});


//"http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/7?api-key=1b49c5883656e73007430a84af82844a:6:73362387"
