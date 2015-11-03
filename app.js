$(document).ready(function() {

  // check for Geolocation support
  if (navigator.geolocation) {
    console.log('Geolocation is supported!');
  } else {
    console.log('Geolocation is not supported for this Browser/OS version yet.');
  }
  //get location of user lat/long  
  window.onload = function() {
    var startPos;
    //speed up call by allowing for cached results
    var geoOptions = {
    maximumAge: 5 * 60 * 1000,
  }
    var geoSuccess = function(position) {
      startPos = position;
      document.getElementById('startLat').innerHTML = startPos.coords.latitude;
      document.getElementById('startLon').innerHTML = startPos.coords.longitude;
    };
    //handle errors with lookup
    var geoError = function(error) {
      console.log('Error occurred. Error code: ' + error.code);
      // error.code can be:
      //   0: unknown error
      //   1: permission denied
      //   2: position unavailable (error response from location provider)
      //   3: timed out
    };
    navigator.geolocation.getCurrentPosition(geoSuccess);
  };


  $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=45&lon=122&units=imperial&appid=bd82977b86bf27fb59a04b61b657fb6f", function(json) {
        $(".message").html(JSON.stringify(json));
      });

});