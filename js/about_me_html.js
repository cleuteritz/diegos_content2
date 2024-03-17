$(document).ready(function(){
    // Add event listener to the button
    $("#loadDataBtn").click(function(){
        // AJAX request to fetch data from about_data.html
        $.ajax({
            url: "about_data.html",
            success: function(data){
                // Inject the fetched data into a div with the ID "dataContainer"
                $("#weatherContainer").html(data); // or you can create a separate container for this purpose
            }
        });
    });
});
