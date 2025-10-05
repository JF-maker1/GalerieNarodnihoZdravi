(async () => {
  const apiKey = 'AIzaSyCF-gaw62KFl5VUcxE6EEjbk4UDdUb90_E'; // <-- Vložte svůj API klíč
  const videoListElement = document.getElementById('video-list');

  try {
    // 1️⃣ Načtení seznamu videí z JSON souboru
    const videosResponse = await fetch('data/videos.json');
    const { videos } = await videosResponse.json();

    // Extrakce pouze ID pro API volání
    const videoIds = videos.map(v => v.id);
    const idString = videoIds.join(',');

    // 2️⃣ Sestavení URL pro YouTube API
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${idString}&key=${apiKey}`;

    // 3️⃣ Načtení dat o videích
    const response = await fetch(apiUrl);
    const data = await response.json();

    // 4️⃣ Zobrazení výsledků
    if (data.items && data.items.length > 0) {
      videoListElement.innerHTML = '';

      data.items.forEach(video => {
        const { id, snippet, statistics } = video;
        
        // Najdeme odpovídající záznam v našem JSON
        const localVideo = videos.find(v => v.id === id);
        
        // Použijeme český název, pokud existuje, jinak původní z YouTube
        const title = (localVideo?.czTitle && localVideo.czTitle.trim() !== '') 
          ? localVideo.czTitle 
          : snippet.title;
        
        const viewCount = Number(statistics.viewCount).toLocaleString('cs-CZ');
        const videoUrl = `https://www.youtube.com/watch?v=${id}`;

        const videoHtml = `
          <p>
            <a href="${videoUrl}" target="_blank">
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
