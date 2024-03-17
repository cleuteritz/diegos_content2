// Wait for the DOM to be fully loaded
$(document).ready(function() {
    // Select the form by its ID
    $('#contactForm').submit(function(event) {
        // Prevent the default form submission
        event.preventDefault();
        
        // Load the XML file
        $.ajax({
            type: 'GET',
            url: 'submit_message.xml',
            dataType: 'xml',
            success: function(xml) {
                // Retrieve the message based on ID
                var message = $(xml).find('message[id="submitMessage"]').text();
                
                // Display a pop-up message
                alert(message);
                
                // Optionally, you can reset the form after submission
                // $('#contactForm')[0].reset();
            },
            error: function(xhr, status, error) {
                console.error('Error loading XML file:', error);
            }
        });
    });
});
