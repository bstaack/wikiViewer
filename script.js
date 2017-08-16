$(document).ready(function() {

  var value = "";
  var htmls = "";

  $("#form").keydown(function(event) {
    if (event.keyCode == 13) {
      value = $(this).val();

      searchWiki(value);

      $("#randomWiki").animate({ 'margin-top': '1%'}, 1000);
      htmls = ""
    }
  });

  function searchWiki(val){
    $.getJSON("https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + val + "&utf8=&format=json&callback=?", function(json){
      createDivs(json);
    });
  }

  function createDivs(val){
    for(i = 0; i <= 10; i++){
       htmls += "<div class='box'><a href='https://en.wikipedia.org/wiki/" + val.query.search[i].title + "' target='_blank'><div class='media-content'><div class='content'><p><strong>" + val.query.search[i].title + "</strong><br>" + val.query.search[i].snippet + "</p></div></div></a></div>";
      $("#results").html(htmls);
      };
  }


});
