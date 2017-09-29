console.log("hello i a working yay!")

var myResults = [ {name: "six pack of beer", location: {lat: 37.767182, long: -122.5}},
          {name: "whacky glasses", location: {lat: 37.767182, long: -122.51}},
          {name: "whiskey bottle", location: {lat: 37.767282, long: -122.49}},
          {name: "diving goggles", location: {lat: 37.770282, long: -122.503}},
          {name: "running shoes", location: {lat: 37.7669, long: -122.457}},
          {name: "paint brushes", location: {lat: 37.76800, long: -122.4580}}]

$(window).ready(function(){
  initiate_geolocation();
});

function initiate_geolocation() {
  navigator.geolocation.getCurrentPosition(handle_geolocation_query);
}

function handle_geolocation_query(position){
  var a = position.coords.latitude;
  var b = position.coords.longitude;
  var $lat = $('<p>').text("Latitude: " + a);
  var $long = $('<p>').text("Longitude: " + b);
  $('.location').append($lat).append($long);
  return button(a,b);
}

function distance(lat1, lon1, lat2, lon2) {
	var radlat1 = Math.PI * lat1/180
	var radlat2 = Math.PI * lat2/180
	var theta = lon1-lon2
	var radtheta = Math.PI * theta/180
	var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
	dist = Math.acos(dist)
	dist = dist * 180/Math.PI;
	dist = dist * 60 * 1.1515;
	dist = dist * 1.609344;
	return Math.round(dist);
}

function button(lat,long){
  var $ul = $('<ul>');
  for(var i=0; i<myResults.length;i++){
    $ul.append(treasures(i)).append("Your distance to this: "+ distance(lat,long,myResults[i]["location"]["lat"],myResults[i]["location"]["long"]) + "km").append("      Lat: "+ myResults[i]["location"]["lat"] +" Long: "+ myResults[i]["location"]["long"]);
  }
  return $('.container').append($ul);
}

function treasures(num){
  var $treasure = $('<li>');
  return $treasure.text(myResults[num]['name']);
}

function search(nameKey){
  for (var i=0; i < myResults.length; i++) {
    if (myResults[i].name === nameKey) {
      console.log(myResults[i]);
        return myResults[i];
    }
  }
}
// button();
//
// $('li').on('click',function(event){
//   var clickedArea = event.target.textContent;
//   search(clickedArea);
// })
