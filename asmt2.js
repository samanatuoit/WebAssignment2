/*

 Name: Saman Yaghini
 Student ID: 100286511

 Name: Vincent (Dai) Chan
 Student ID: 100554446

 */
console.log("Hello, world");

function downloadWeather(latitude, longitude) {

    var openweather = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&units=metric&APPID=cf8109e5d810d65b28498fe929e763cf";
    $.getJSON(openweather, function (data) {
        var outputjquery = $('#output');
        var currentTemp = data.main.temp;
        var lowTemp = data.main.temp_min;
        var highTemp = data.main.temp_max;
        var outlook = data.weather[0].main;
        var windDirection = data.wind.deg;
        var windSpeed = data.wind.speed;
        var pressure = data.main.pressure;
        var humidity = data.main.humidity;


        outputjquery.append('<li><h3>Temperature</h3></li>');
        outputjquery.append('<li>Current: ' + currentTemp + '&deg;C</li>');
        outputjquery.append('<li>Low: ' + lowTemp + '&deg;C</li>');
        outputjquery.append('<li>High: ' + highTemp + '&deg;C</li>');
        outputjquery.append('<li><h3>Outlook</h3></li>');
        outputjquery.append('<li>' + outlook + '</li>');
        outputjquery.append('<li><h3>Wind: </h3></li>');
        outputjquery.append('<li>Direction: ' + windDirection + '&deg;</li>');
        outputjquery.append('<li>Speed: ' + windSpeed + ' m/s</li>');
        outputjquery.append('<li><h3>Pressure</h3></li>');
        outputjquery.append('<li>' + pressure + ' mB </li>')
        outputjquery.append('<li><h3>Humidity</h3></li>');
        outputjquery.append('<li>' + humidity + '%</li>');


    })

}

function downloadForecast(latitude, longitude) {
    var rawXML = "http://api.openweathermap.org/data/2.5/forecast/daily?cnt=10&mode=xml&lat=" + latitude + "&lon=" + longitude + "&units=metric&APPID=cf8109e5d810d65b28498fe929e763cf";
    //var parser = new DOMParser();
    var dateArray = [];
    var symbolArray = [];
    var highTempArray = [];
    var lowTempArray = [];
    var windArray = [];
    var cloudsArray = [];
    var tableBodySelector = $('tbody');
    //var xmlDoc = $.parseXML(rawXML);
    //console.log(xmlDoc);


    /*$.get(rawXML, function (xmlDoc) {
     $(xmlDoc).find('forecast').each(function () {
     result = $(this).find('time').attr('day');
     console.log("result = " + result);
     })


     });*/
    $.get(rawXML, function (xmlDoc) {
        $(xmlDoc).find('time').each(function () {
            var result = $(this).attr('day');
            /*
             $('tbody').append('<tr>');
             $('tbody').append('<td>' + result + '</td>');
             $('tbody').append('</tr>');
             */


            // result2 = $(this).attr('day');
            //console.log("result = " + result);
            dateArray.push(result);
            //console.log("result = " + result);
            //console.log(dateArray);


        });

        $(xmlDoc).find('symbol').each(function () {
            var result = $(this).attr('number');
            //console.log("symbol result = " + result);
            symbolArray.push(result);
        });

        $(xmlDoc).find('temperature').each(function () {
            var result = $(this).attr('max');
            highTempArray.push(result);
        });

        $(xmlDoc).find('temperature').each(function () {
            var result = $(this).attr('min');
            lowTempArray.push(result);
        });

        $(xmlDoc).find('windSpeed').each(function () {
            var result = $(this).attr('name');
            windArray.push(result);
        });

        $(xmlDoc).find('clouds').each(function () {
            var result = $(this).attr('value');
            cloudsArray.push(result);
        });

        console.log("dateArray after xmlDoc = " + dateArray);
        console.log("symbolArray after xmlDoc = " + symbolArray);
        console.log("highTempArray after xmlDoc = " + highTempArray);
        console.log("lowTempArray after xmlDoc = " + lowTempArray);
        console.log("windArray after xmlDoc = " + windArray);
        console.log("cloudsArray after xmlDoc = " + cloudsArray);

        for (var i = 0; i < dateArray.length; i++) {
            tableBodySelector.append('<tr>');
            tableBodySelector.append('<td>' + dateArray[i] + '</td>');
            tableBodySelector.append('<td>' + symbolArray[i] + '</td>');
            tableBodySelector.append('<td>' + highTempArray[i] + '</td>');
            tableBodySelector.append('<td>' + lowTempArray[i] + '</td>');
            tableBodySelector.append('<td>' + windArray[i] + '</td>');
            tableBodySelector.append('<td>' + cloudsArray[i] + '</td>');
            tableBodySelector.append('</tr>');
        }

        /*$.get(rawXML, function (xmlDoc) {
         $(xmlDoc).find('symbol').each(function () {
         var result = $(this).attr('number');
         console.log("symbol result = " + result);
         symbolArray.push(result);
         })
         });
         */


    });
    /*console.log("dateArray.length = " + dateArray.length);
     console.log(Array.isArray(dateArray));
     console.log(dateArray[0]);
     console.log(dateArray);*/
    /*for (var i = 0; i < dateArray.length; i++) {
     console.log("Adding..." + i);
     $('tbody').append('<tr>');
     $('tbody').append('<td>' + result + '</td>');
     $('tbody').append('</tr>');
     }*/
    //return dateArray;

}

function showMap(latitude, longitude) {
    var map;
    initMap();
    function initMap() {
        console.log("latitude = " + latitude);
        console.log("longitude = " + longitude);
        map = new google.maps.Map(document.getElementById('map-canvas'), {
            center: {lat: parseFloat(latitude), lng: parseFloat(longitude)},
            zoom: 8
        })
    }
}
$(document).ready(function () {
    console.log("ready!");
    //jQuery.ajaxSetup({async:false});
    $('#goButton').click(function () {
        console.log("GO button pressed");
        var latitude = document.getElementById('lat').value;
        var longitude = document.getElementById('lon').value;
        var testArray;

        downloadWeather(latitude, longitude);
        downloadForecast(latitude, longitude);
        showMap(latitude, longitude);
        /*console.log("testArray.length = " + testArray.length);
         console.log(testArray);
         */


    })
});
