// Function to fetch weather data
function fetchWeatherData(apiKey, location) {
    var apiUrl = "https://api.weatherapi.com/v1/current.json?key=" + apiKey + "&q=" + location;
    return $.ajax({
        url: apiUrl,
        method: "GET",
        success: function(data) {
            // Handle the successful response here
            console.log("Weather data fetched successfully:", data);
        },
        error: function(xhr, status, error) {
            // Handle errors gracefully
            console.error("Error fetching weather data:", error);
        }
    });
}
