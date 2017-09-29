$(window).ready(function(){
  initiate_geolocation();
});

function initiate_geolocation() {
  navigator.geolocation.getCurrentPosition(handle_geolocation_query);
}

function handle_geolocation_query(position){
  var a = position.coords.latitude;
  var b = position.coords.longitude;
  // var array_loc = [Math.floor(a),Math.floor(b)];
  var array_loc = [a,b];
  console.log(array_loc)

  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather",
    data:{
      lat: array_loc[0],
      lon: array_loc[1],
      units: "metric",
      appid: "083a52df445abd12f56c3eab182de742"
    }
  }).done(function(data){
    $(".picture").append("<p>Location= "+data.name+"</p>");
    $(".picture").append("<p>Current Temp= "+data.main.temp+"C</p>");
    $(".picture").append("<p>Info= "+data.weather[0].main+"</p>");
    $(".picture").append("<p>Info= "+data.weather[0].description+"</p>")
    console.log(data)

  });

}
