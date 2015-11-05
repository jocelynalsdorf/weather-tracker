$(document).ready(function() {
var latCord;
    var longCord;
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
      //document.getElementById('startLat').innerHTML = startPos.coords.latitude;
      //document.getElementById('startLon').innerHTML = startPos.coords.longitude;
      //use ABS to remove dash so can be used in api call as vars
      latCord = Math.abs(startPos.coords.latitude);
      longCord = startPos.coords.longitude;
      
      $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + latCord + "&lon=" + longCord + "&units=imperial&appid=db9fe2ee08823462de2d39da4ec76db2", function(json) {
        var main, icon, icon, desc, temp, id;
         main = json["weather"][0].main;
         icon = json["weather"][0].icon;
         desc = json["weather"][0].description;
         temp = json["main"].temp;
         id = json["weather"][0].id;

        var html = "<span><h4>Hey!! If the temperature is:  <span class='red'>" + temp + "</span> and it's <span class='red'> " + desc  + "</span> out <img src='http://openweathermap.org/img/w/" + icon + ".png' /> You should be grumpy!! Duh!!</h4></span>";
        
      
        $(".message").html(html);


      });
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
  
});