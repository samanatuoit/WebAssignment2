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

        // cleanup the box before adding new values
        outputjquery.empty();
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
    var dateArray = [];
    var symbolArray = [];
    var highTempArray = [];
    var lowTempArray = [];
    var windArray = [];
    var cloudsArray = [];
    var tableBodySelector = $('tbody');

    // clean up the table before adding new entries
    tableBodySelector.empty();

    $.get(rawXML, function (xmlDoc) {
        $(xmlDoc).find('time').each(function () {
            var result = $(this).attr('day');
            dateArray.push(result);
        });

        $(xmlDoc).find('symbol').each(function () {
            var result = $(this).attr('number');
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


        // change all symbol codes to corresponding image links
        for (var i = 0; i < symbolArray.length; i++) {
            switch(symbolArray[i]) {
                case "200":
                    symbolArray[i] = "<img height=\'42\' src=\'.\\images\\200.png\'>";
                    break;
                case "201":
                    symbolArray[i] = "<img height=\'42\' src=\'.\\images\\201.png\'>";
                    break;
                case "203":
                    symbolArray[i] = "<img height=\'42\' src=\'.\\images\\203.png\'>";
                    break;
                case "210":
                    symbolArray[i] = "<img height=\'42\' src=\'.\\images\\210.png\'>";
                    break;
                case "211":
                    symbolArray[i] = "<img height=\'42\' src=\'.\\images\\211.png\'>";
                    break;
                case "212":
                    symbolArray[i] = "<img height=\'42\' src=\'.\\images\\212.png\'>";
                    break;
                case "300":
                    symbolArray[i] = "<img height=\'42\' src=\'.\\images\\300.png\'>";
                    break;
                case "301":
                    symbolArray[i] = "<img height=\'42\' src=\'.\\images\\301.png\'>";
                    break;
                case "302":
                    symbolArray[i] = "<img height=\'42\' src=\'.\\images\\302.png\'>";
                    break;
                case "303":
                    symbolArray[i] = "<img height=\'42\' src=\'.\\images\\303.png\'>";
                    break;
                case "304":
                    symbolArray[i] = "<img height=\'42\' src=\'.\\images\\304.png\'>";
                    break;
                case "500":
                    symbolArray[i] = "<img height=\'42\' src=\'.\\images\\500.png\'>";
                    break;
                case "501":
                    symbolArray[i] = "<img height=\'42\' src=\'.\\images\\501.png\'>";
                    break;
                case "502":
                    symbolArray[i] = "<img height=\'42\' src=\'.\\images\\502.png\'>";
                    break;
                case "503":
                    symbolArray[i] = "<img height=\'42\' src=\'.\\images\\503.png\'>";
                    break;
                case "504":
                    symbolArray[i] = "<img height=\'42\' src=\'.\\images\\504.png\'>";
                    break;
                case "600":
                    symbolArray[i] = "<img height=\'42\' src=\'.\\images\\600.png\'>";
                    break;
                case "601":
                    symbolArray[i] = "<img height=\'42\' src=\'.\\images\\601.png\'>";
                    break;
                case "602":
                    symbolArray[i] = "<img height=\'42\' src=\'.\\images\\602.png\'>";
                    break;
                case "800":
                    symbolArray[i] = "<img height=\'42\' src=\'.\\images\\800.png\'>";
                    break;
                case "801":
                    symbolArray[i] = "<img height=\'42\' src=\'.\\images\\801.png\'>";
                    break;
                case "802":
                    symbolArray[i] = "<img height=\'42\' src=\'.\\images\\802.png\'>";
                    break;
                case "803":
                    symbolArray[i] = "<img height=\'42\' src=\'.\\images\\803.png\'>";
                    break;
                case "804":
                    symbolArray[i] = "<img height=\'42\' src=\'.\\images\\804.png\'>";
                    break;
                case "NA":
                    symbolArray[i] = "<img height=\'42\' src=\'.\\images\\NA.png\'>";
                    break;

            }
        }

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

    });
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
    $('#goButton').click(function () {
        console.log("GO button pressed");
        var latitude = document.getElementById('lat').value;
        var longitude = document.getElementById('lon').value;

        downloadWeather(latitude, longitude);
        downloadForecast(latitude, longitude);
        showMap(latitude, longitude);
    })
});
