(async () => {
  const apiKey = 'AIzaSyCF-gaw62KFl5VUcxE6EEjbk4UDdUb90_E';
  
  // Získání video ID z URL parametru
  const urlParams = new URLSearchParams(window.location.search);
  const videoId = urlParams.get('id');
  
  if (!videoId) {
    document.getElementById('video-title').textContent = 'Chyba: Video ID nebylo zadáno';
    document.getElementById('video-player').innerHTML = '<p>Chybí parametr video ID v URL.</p>';
    return;
  }
  
  try {
    // 1️⃣ Načtení informací z našeho JSON souboru
    const videosResponse = await fetch('data/videos.json');
    const { videos } = await videosResponse.json();
    const localVideo = videos.find(v => v.id === videoId);
    
    // 2️⃣ Načtení detailů z YouTube API
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${apiKey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    if (data.items && data.items.length > 0) {
      const video = data.items[0];
      const { snippet, statistics } = video;
      
      // Použijeme český název, pokud existuje
      const title = (localVideo?.czTitle && localVideo.czTitle.trim() !== '') 
        ? localVideo.czTitle 
        : snippet.title;
      
      // 3️⃣ Zobrazení názvu
      document.getElementById('video-title').textContent = title;
      document.title = `${title} - Přehrávač videa`;
      
      // 4️⃣ Vložení YouTube přehrávače (iframe)
      const playerHtml = `
        <iframe 
          width="100%" 
          height="100%" 
          src="https://www.youtube.com/embed/${videoId}?autoplay=1" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      `;
      document.getElementById('video-player').innerHTML = playerHtml;
      
      // 5️⃣ Zobrazení dalších informací
      const viewCount = Number(statistics.viewCount).toLocaleString('cs-CZ');
      const likeCount = statistics.likeCount 
        ? Number(statistics.likeCount).toLocaleString('cs-CZ') 
        : 'N/A';
      
      const detailsHtml = `
        <div class="video-stats">
          <p><strong>Zhlédnutí:</strong> ${viewCount}</p>
          <p><strong>Líbí se:</strong> ${likeCount}</p>
          <p><strong>Originální název:</strong> ${snippet.title}</p>
        </div>
      `;
      document.getElementById('video-details').innerHTML = detailsHtml;
      
    } else {
      document.getElementById('video-title').textContent = 'Video nebylo nalezeno';
      document.getElementById('video-player').innerHTML = '<p>Video s tímto ID neexistuje.</p>';
    }
    
  } catch (error) {
    console.error('Došlo k chybě:', error);
    document.getElementById('video-title').textContent = 'Chyba při načítání videa';
    document.getElementById('video-player').innerHTML = '<p>Nepodařilo se načíst video.</p>';
  }
})();
