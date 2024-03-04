// testimonialsCarousel.js

// Function to load testimonials carousel
function loadTestimonialsCarousel(testimonials) {
    const carouselContainer = document.getElementById('testimonials-carousel');

    testimonials.querySelectorAll('testimonial').forEach(function(testimonialNode) {
        const id = testimonialNode.querySelector('id').textContent;
        const name = testimonialNode.querySelector('name').textContent;
        const company = testimonialNode.querySelector('company').textContent;
        const content = testimonialNode.querySelector('content').textContent;
        const image = testimonialNode.querySelector('image').textContent;

        const testimonialItem = document.createElement('div');
        testimonialItem.classList.add('testimonial-item');
        testimonialItem.innerHTML = `
            <img class="testimonial-image" src="${image}" alt="${name}">
            <div class="testimonial-content">
                <p>${content}</p>
                <p><strong>${name}</strong> - ${company}</p>
            </div>
        `;

        carouselContainer.appendChild(testimonialItem);
    });

    // Set the first testimonial as active
    carouselContainer.querySelector('.testimonial-item:first-child').classList.add('active');

    // Initialize the testimonials carousel
    setInterval(function() {
        const activeTestimonial = carouselContainer.querySelector('.testimonial-item.active');
        fadeOut(activeTestimonial, function() {
            activeTestimonial.classList.remove('active');
            const nextTestimonial = activeTestimonial.nextElementSibling || carouselContainer.querySelector('.testimonial-item:first-child');
            fadeIn(nextTestimonial).classList.add('active');
        });
    }, 5000); // Change testimonial every 5 seconds (adjust as needed)
}

// Load testimonials from XML file
const xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        const xmlDoc = this.responseXML;
        loadTestimonialsCarousel(xmlDoc);
    }
};
xmlhttp.open('GET', 'photo-data.xml', true);
xmlhttp.send();

// Helper function to fade out an element
function fadeOut(element, callback) {
    let opacity = 1;
    const fadeOutInterval = setInterval(function() {
        if (opacity > 0) {
            opacity -= 0.1;
            element.style.opacity = opacity;
        } else {
            clearInterval(fadeOutInterval);
            callback();
        }
    }, 50);
}

// Helper function to fade in an element
function fadeIn(element) {
    let opacity = 0;
    const fadeInInterval = setInterval(function() {
        if (opacity < 1) {
            opacity += 0.1;
            element.style.opacity = opacity;
        } else {
            clearInterval(fadeInInterval);
        }
    }, 50);

    return element;
}
