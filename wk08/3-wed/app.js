console.log("Hurray i am linked")

$('button').on('click', function(){
  var $search = $('input').val();

  $.ajax({
    url: "http://www.omdbapi.com/",
    data: {s: $search}
  }).done(function(data){
    var source = $('#stuffgoeshere').html();
    var templateFunction = Handlebars.compile(source);
    data.Search.forEach(function(movie){
      var html = templateFunction(movie);
      $('.container').append(html)
    })
  })
})
