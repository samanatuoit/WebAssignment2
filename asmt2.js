console.log("Hello, world");
var openweather = "http://api.openweathermap.org/data/2.5/weather?lat=43.944847&lon=-78.891703&units=metric&APPID=cf8109e5d810d65b28498fe929e763cf";
$( document ).ready(function() {
    console.log( "ready!" );
    $('#goButton').click(function() {
       console.log("GO button pressed");
    });

});