(async () => {
    const videoListContainer = document.getElementById('video-list');

    if (!videoListContainer) {
        console.error("Element #video-list nebyl nalezen.");
        return;
    }

    try {
        const response = await fetch('data/videos.json');
        const { videos } = await response.json();

        // Vyčistit případný "načítací" text
        videoListContainer.innerHTML = '';

        videos.forEach(video => {
            const title = (video.czTitle && video.czTitle.trim() !== '') 
                ? video.czTitle 
                : video.title;

            const videoLink = document.createElement('a');
            videoLink.href = `video.html?id=${video.id}`;
            videoLink.textContent = title;
            // Použití tříd pro styl z původního projektu
            videoLink.className = 'block p-4 bg-gray-100 rounded hover:bg-blue-100 transition-colors';

            videoListContainer.appendChild(videoLink);
        });

    } catch (error) {
        console.error('Došlo k chybě při načítání seznamu videí:', error);
        videoListContainer.innerHTML = '<p>Nepodařilo se načíst seznam videí.</p>';
    }
})();
