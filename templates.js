var templates = {
  article: ["<li style='background-image: url(<%= backgroundPic %>)'>",
            "<a target='_blank' href='<%= redirect %>'<h3><%= headline %></h3></a>",
            "<br /><p class='block'><%= text %></p></li>"
          ].join("")
};
