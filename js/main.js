// js/main.js
document.addEventListener('DOMContentLoaded', () => {
    const videoListContainer = document.getElementById('video-list');

    videos.forEach(video => {
        const videoLink = document.createElement('a');
        videoLink.href = `video.html?id=${video.id}`; // Klíčový krok: předáváme ID v URL
        videoLink.textContent = video.title;
        videoLink.className = 'block p-4 bg-gray-100 rounded hover:bg-blue-100'; // Příklad stylingu

        videoListContainer.appendChild(videoLink);
    });
});
