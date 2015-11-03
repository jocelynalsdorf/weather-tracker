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
    var geoSuccess = function(position) {
      startPos = position;
      document.getElementById('startLat').innerHTML = startPos.coords.latitude;
      document.getElementById('startLon').innerHTML = startPos.coords.longitude;
    };
    //handle errors with lookup
    // var geoError = function(error) {
    //   console.log('Error occurred. Error code: ' + error.code);
    //   // error.code can be:
    //   //   0: unknown error
    //   //   1: permission denied
    //   //   2: position unavailable (error response from location provider)
    //   //   3: timed out
    // };
    navigator.geolocation.getCurrentPosition(geoSuccess);
  };

});