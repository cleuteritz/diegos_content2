// filter.js

// Function to filter portfolio items based on category
function filterPortfolioItems(category) {
    const portfolioContainer = document.getElementById('portfolio-container');
    const projectData = []; // Replace this with the actual JSON data or fetch from server

    // Clear existing portfolio items
    portfolioContainer.innerHTML = '';

    // Filter projects based on the selected category
    const filteredProjects = category === 'all' ? projectData : projectData.filter(project => project.category === category);

    // Display filtered projects
    filteredProjects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('column');
        projectItem.innerHTML = `
            <div class="card zoom">
                <img src="${project.image}" alt="${project.title}">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </div>
        `;
        portfolioContainer.appendChild(projectItem);
    });
}

// Event listener for category filter change
document.getElementById('category-filter').addEventListener('change', function() {
    const selectedCategory = this.value;
    filterPortfolioItems(selectedCategory);
});

// Initial load of portfolio items
filterPortfolioItems('all');
