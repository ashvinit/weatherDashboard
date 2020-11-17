//add event listener on button to retrieve city name
$("#searchBtn").on("click", function (event) {
    event.preventDefault();

    var cityName = $("#searchInput").val().trim();

    //query for searching city using openweather map
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=a4fafd35cdf4a780c554fb1a0788f97f";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (displayWeather) {

        //function to show weather forecast of searched city
        var card = $("<div>").addClass("card");
        var 


    });

});
