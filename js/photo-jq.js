// popup.js

// Sample data for project details
const projectDetailsData = {
    1: {
        title: "Project 1",
        description: "Description for Project 1.",
    },
    2: {
        title: "Project 2",
        description: "Description for Project 2.",
    },
    // Add details for other projects as needed
};

// Function to load project details
function loadProjectDetails(projectId) {
    const detailsContainer = $('#project-details');
    const projectDetails = projectDetailsData[projectId];

    if (projectDetails) {
        detailsContainer.html(`
            <h2>${projectDetails.title}</h2>
            <p>${projectDetails.description}</p>
            <img src="${projectDetails.image}" alt="${projectDetails.title}">
        `);
    }
}

// Event listener for portfolio item click
$(document).on('click', '.card.zoom', function() {
    const projectId = $(this).data('id');
    loadProjectDetails(projectId);

    // Show the popup
    $('#pop-up-container').fadeIn();
});

// Event listener for closing the popup
$(document).on('click', '#close-popup', function() {
    // Hide the popup
    $('#pop-up-container').fadeOut();
});
