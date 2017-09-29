$(document).ready(function(){

  $.ajax({
    url: '/api/pokedex'
  }).done(function(res){
    console.log(res)
    var shuffledPokemon = _.shuffle(res);

    shuffledPokemon.forEach(function(card){
      var source = $('#pokedex-area').html();
      var templateFunction = Handlebars.compile(source);
      var html = templateFunction(card);
      $('.wrapper').append(html);
    });
  });

});
