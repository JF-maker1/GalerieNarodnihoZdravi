(async () => {
  const apiKey = 'AIzaSyCF-gaw62KFl5VUcxE6EEjbk4UDdUb90_E';
  const videoListElement = document.getElementById('video-list');
  try {
    const videosResponse = await fetch('data/videos.json');
    const { videos } = await videosResponse.json();
    const videoIds = videos.map(v => v.id);
    const idString = videoIds.join(',');
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${idString}&key=${apiKey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    if (data.items && data.items.length > 0) {
      videoListElement.innerHTML = '';
      data.items.forEach(video => {
        const { id, snippet, statistics } = video;
        const localVideo = videos.find(v => v.id === id);
        const title = (localVideo?.czTitle && localVideo.czTitle.trim() !== '') 
          ? localVideo.czTitle 
          : snippet.title;
        const viewCount = Number(statistics.viewCount).toLocaleString('cs-CZ');
        
        // ZMĚNA: Místo odkazu na YouTube nyní směřujeme na video.html
        const videoUrl = `video.html?id=${id}`;
        
        const videoHtml = `
          <p>
            <a href="${videoUrl}">
              ${title} (${viewCount} zhlédnutí)
            </a>
          </p>
        `;
        videoListElement.innerHTML += videoHtml;
      });
    } else {
      videoListElement.innerHTML = '<p>Nepodařilo se načíst žádná videa.</p>';
    }
  } catch (error) {
    console.error('Došlo k chybě:', error);
    videoListElement.textContent = 'Chyba při komunikaci s YouTube API.';
  }
})();
