console.log("Hello, world");

function downloadWeather(latitude, longitude) {

    var openweather = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&units=metric&APPID=cf8109e5d810d65b28498fe929e763cf";
    $.getJSON(openweather, function (data) {
        var currentTemp = data.main.temp;
        var lowTemp = data.main.temp_min;
        var highTemp = data.main.temp_max;
        var outlook = data.weather[0].main;
        var windDirection = data.wind.deg;
        var windSpeed = data.wind.speed;
        var pressure = data.main.pressure;
        var humidty = data.main.humidity;


        $('#output').append('<li><h3>Temperature</h3></li>');
        $('#output').append('<li>Current: ' + currentTemp + '&deg;C</li>');
        $('#output').append('<li>Low: ' + lowTemp + '&deg;C</li>');
        $('#output').append('<li>High: ' + highTemp + '&deg;C</li>');
        $('#output').append('<li><h3>Outlook</h3></li>');
        $('#output').append('<li>' + outlook + '</li>');
        $('#output').append('<li><h3>Wind: </h3></li>');
        $('#output').append('<li>Direction: ' + windDirection + '&deg;</li>');
        $('#output').append('<li>Speed: ' + windSpeed + ' m/s</li>');
        $('#output').append('<li><h3>Pressure</h3></li>');
        $('#output').append('<li>' + pressure + ' mB </li>')
        $('#output').append('<li><h3>Humidity</h3></li>');
        $('#output').append('<li>' + humidty + '%</li>');


    })

}

function downloadForecast(latitude, longitude) {
    var rawXML = "http://api.openweathermap.org/data/2.5/forecast/daily?cnt=10&mode=xml&lat=" + latitude + "&lon=" + longitude + "&units=metric&APPID=cf8109e5d810d65b28498fe929e763cf";
    var parser = new DOMParser();
    //var xmlDoc = $.parseXML(rawXML);
    //console.log(xmlDoc);


    $.get(rawXML, function(xmlDoc) {
        $(xmlDoc).find('forecast').each(function() {
            result = $(this).find('time').attr('day');
            console.log("result = " + result);
        })



    })
    $.get(rawXML, function (xmlDoc) {
        $(xmlDoc).find('time').each(function() {
            result2 = $(this).attr('day');
            console.log(result2);
            $('tbody').append('<tr>');
            $('tbody').append('<td>' + result2 + '</td>');
            $('tbody').append('</tr>');

        })

    })

}

$(document).ready(function () {
    console.log("ready!");
    $('#goButton').click(function () {
        console.log("GO button pressed");
        var latitude = document.getElementById('lat').value;
        var longitude = document.getElementById('lon').value;

        downloadWeather(latitude, longitude);
        downloadForecast(latitude, longitude);


    })
});
