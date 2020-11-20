//if the page is reloaded, the cities in local storage should be retrieved
var recentCity = JSON.parse(localStorage.getItem("recentCity")) || [];
var lastSearched = localStorage.getItem("cityName") || "";
console.log(recentCity);

//run function searchCity with the last searched city so the weather of that city is displayed on the dashboard
searchCity(lastSearched);
getForecast(lastSearched);

//function searchCity to run query using the last searched city into the function
function searchCity (cityName) {

    //query for searching city using openweather map
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=a4fafd35cdf4a780c554fb1a0788f97f";
    
    //ajax call
    $.ajax({
        url: queryURL,
        method: "GET",
        dataType: "json"
    }).then(function (data) {
        console.log(data);

        //empty out the dashboard when a new search is made
        $("#dashboard").empty();

        //history link for search
        function saveCity() {

            //if cityName does not equal the last searched city && the city searched is not in the recentCity array, then store the cityName and the recentCity
            if (cityName !== recentCity[0] && !(recentCity.includes(cityName))) {
                //add the new cityName to the beginning of the array
                recentCity.unshift(cityName);
                //store items in localstorage
                localStorage.setItem("recentCity", JSON.stringify(recentCity));
                localStorage.setItem("cityName", cityName);
            };
            //to prevent a new list form creating
            $(".list-group").empty();
            //for loop to dynamically create list
            for (i=0; i < recentCity.length; i++) {
                var listCities = $('<a target="#" href="" class="list-group-item list-group-item-action">');
                listCities.text(recentCity[i]);
                $(".list-group").append(listCities);
            }
        };
        //run function saveCity
        saveCity();
        

        //convert Kelvin to degrees F
        var convertK = (((parseInt(data.main.temp)) - 273.15) * (9/5) + 32);

        //created card to hold weather information
        var card = $("<div>").addClass("card");
        var cardBody =$("<div>").addClass("card-body");
        var title = $("<h2>").addClass("card-title").text(data.name);
        var temp = $("<p>").addClass("card-text").text("Temperature: " + convertK.toFixed(2) + "℉");
        var humidity = $("<p>").addClass("card-text").text("Humidity: " + data.main.humidity + "%");
        var windSpeed = $("<p>").addClass("card-text").text("Wind Speed: " + data.wind.speed + "MPH");

        //append text to dashboard in html
        cardBody.append(title, temp, humidity, windSpeed);
        card.append(cardBody);
        $("#dashboard").append(card);

    });

}
//add event listener for the a tag with the searched city list
$(document).on('click', ".list-group-item", function (event) {
    event.preventDefault();
    //run searchCity function with the text on this a tag
    searchCity($(this).text());
});

//add event listener for the search button
$("#searchBtn").on("click", function (event) {
    event.preventDefault();
    //search the value of the input
    var city = $("#searchInput").val().trim();
    //run searchCity function with that value
    searchCity(city);
});


//function to get the forcast
function getForecast() {
    //queryURL for 5 day forecast
    var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + lastSearched + "&appid=a4fafd35cdf4a780c554fb1a0788f97f";

    $.ajax({
        url: queryURL2,
        method: "GET"
    }).then(function (data) {
        console.log(data);
        
        //function to loop through all the forecasts
        function fiveDayForecast() {
        //use a forloop to loop over all forecasts
        for (i = 0; i <= 32; i+=8) {
            
            var card2 = $("<div>").addClass("card col-2");
            var cardBody2 =$("<div>").addClass("card-body");
            //retrieve date and change format of the date
            var date = data.list[i].dt_txt.substring(0, 10).split('-');
            var newDate = $("<h5>").addClass("card-title").text(date[1] + '/' + date[2] + '/' + date[0]);
            //convert K to F
            var convertForecastK = (((parseInt(data.list[i].main.temp)) - 273.15) * (9/5) + 32);
            var temp2 = $("<p>").addClass("card-text").text("Temperature: " + convertForecastK.toFixed(2) + "℉");
            var humidity2 = $("<p>").addClass("card-text").text("Humidity: " + data.list[i].main.humidity + "%");

            cardBody2.append(newDate, temp2, humidity2);
            card2.append(cardBody2);
            $("#forecast").append(card2);

        }

    }


    //run fivedayForecast
    fiveDayForecast();










    })
}

    

    

    
    

//function to get UV index
