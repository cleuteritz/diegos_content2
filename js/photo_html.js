// Function to check if the user has scrolled to the bottom of the page
function isScrolledToBottom() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    return scrollTop + clientHeight >= scrollHeight;
}

// Function to load additional portfolio items or projects
function loadMoreItems() {
    if (isScrolledToBottom()) {
        // Load HTML file that contains the additional portfolio items or projects
        loadHTML('photo-data.html');
    }
}

// Function to load HTML file
function loadHTML(filePath) {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (xhr.status === 200) {
            const additionalItemsDiv = document.createElement('div');
            additionalItemsDiv.innerHTML = xhr.responseText;

            // Append the new items to the existing portfolio container
            const portfolioContainer = document.getElementById('portfolio-container');
            portfolioContainer.appendChild(additionalItemsDiv);

            // Load images after appending the HTML
            loadImages(additionalItemsDiv);
        }
    };
    xhr.open('GET', filePath, true);
    xhr.send();
}

// Function to load images in the additional portfolio items or projects
function loadImages(container) {
    const images = container.getElementsByTagName('img');
    Array.from(images).forEach(image => {
        const src = image.getAttribute('data-src');
        if (src) {
            image.setAttribute('src', src);
        }
    });
}

// Event listener for the scroll event
window.addEventListener('scroll', loadMoreItems);
