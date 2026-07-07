// Data structure containing playlists and their respective videos
const playlistData = {
    "Home Upgrade": [
        { title: "REVEALING OUR RENOVATIONS! 🏡", id: "6UXDeVySXNM" },
        { title: "EXTREME HOME REFRESH REVEAL!", id: "6UXDeVySXNM" }
    ],
    "Laundry": [
        { title: "EXTREME SPRING ORGANIZE and DECLUTTER + LAUNDRY | Part 2", id: "ZyX-GH81P1o" }
    ],
    "How To": [
        { title: "how to remove mold from your washing machine | front load gasket mold removal", id: "your_correct_id_here" } 
    ]
};

const searchInput = document.getElementById('searchInput');
const resultsDiv = document.getElementById('results');

// Function to render videos based on category
function renderArchives(filterQuery = "") {
    resultsDiv.innerHTML = ''; // Clear existing content

    for (const [category, videos] of Object.entries(playlistData)) {
        // Filter videos within this category based on search query
        const filteredVideos = videos.filter(v => 
            v.title.toLowerCase().includes(filterQuery.toLowerCase())
        );

        if (filteredVideos.length > 0) {
            const section = document.createElement('section');
            section.innerHTML = `<h3>${category}</h3>`;
            
            filteredVideos.forEach(video => {
                const videoDiv = document.createElement('div');
                videoDiv.className = 'video-item';
                videoDiv.innerHTML = `
                    <p>${video.title}</p>
                    <div class="video-container">
                        <iframe src="https://www.youtube-nocookie.com/embed/${video.id}" 
                                frameborder="0" allowfullscreen></iframe>
                    </div>
                `;
                section.appendChild(videoDiv);
            });
            resultsDiv.appendChild(section);
        }
    }
}

// Event listener for live search
searchInput.addEventListener('input', (e) => {
    renderArchives(e.target.value);
});

// Initial render of all content
renderArchives();
