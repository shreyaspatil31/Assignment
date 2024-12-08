const blogData = [
    { 
        title: "Introduction to JavaScript", 
        category: "technology", 
        description: "A comprehensive guide to JavaScript fundamentals for beginners and intermediate developers.",
        date: "2024-01-15"
    },
    { 
        title: "Healthy Lifestyle Tips", 
        category: "lifestyle", 
        description: "Practical strategies for maintaining physical and mental well-being in a busy world.",
        date: "2024-02-20"
    },
    { 
        title: "Learning with Online Courses", 
        category: "education", 
        description: "Maximize your learning potential through effective online education platforms and techniques.",
        date: "2024-03-10"
    },
    { 
        title: "Latest Tech Trends in 2024", 
        category: "technology", 
        description: "Exploring the most significant technological innovations and their potential impact on society.",
        date: "2024-04-05"
    },
    { 
        title: "Balancing Work and Life", 
        category: "lifestyle", 
        description: "Innovative approaches to creating harmony between professional responsibilities and personal life.",
        date: "2024-05-31"
    }
];

function filterResults() {
    const searchBox = document.getElementById("search-box").value.toLowerCase();
    const filter = document.getElementById("filter").value;
    const resultsContainer = document.getElementById("results");
    
    resultsContainer.innerHTML = "";

    const filteredData = blogData.filter(blog => {
        const matchesSearch = 
            blog.title.toLowerCase().includes(searchBox) || 
            blog.description.toLowerCase().includes(searchBox);
        const matchesFilter = !filter || blog.category === filter;
        return matchesSearch && matchesFilter;
    });

    if (filteredData.length === 0) {
        resultsContainer.innerHTML = `
            <div class="result-item">
                <h3>No Results Found</h3>
                <p>Try adjusting your search or category filter.</p>
            </div>
        `;
    } else {
        filteredData.forEach(blog => {
            const blogElement = document.createElement("div");
            blogElement.classList.add("result-item");
            blogElement.innerHTML = `
                <h3>${blog.title}</h3>
                <p>${blog.description}</p>
                <small>Category: ${blog.category} | Date: ${blog.date}</small>
            `;
            resultsContainer.appendChild(blogElement);
        });
    }
}

filterResults();
