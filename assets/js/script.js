//add event listener on button to retrieve city name
$("#searchBtn").on("click", function (event) {
    event.preventDefault();

    var cityName = $("#searchInput").val().trim();

    //query for searching city using openweather map
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=a4fafd35cdf4a780c554fb1a0788f97f";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (data) {
        console.log(data);

        $("#dashboard").empty();

        //convert Kelvin to degrees F
        var convertK = (((parseInt(data.main.temp)) - 273.15) * (5/9) + 32);

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

});
