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
          id="youtube-iframe"
          width="100%" 
          height="100%" 
          src="https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1" 
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
      
      let detailsHtml = `
        <div class="video-stats">
          <p><strong>Zhlédnutí:</strong> ${viewCount}</p>
          <p><strong>Líbí se:</strong> ${likeCount}</p>
          <p><strong>Originální název:</strong> ${snippet.title}</p>
        </div>
      `;
      
      // 6️⃣ Zobrazení strukturovaného obsahu, pokud existuje
      if (localVideo?.topics && localVideo.topics.length > 0) {
        detailsHtml += renderTopics(localVideo.topics);
      }
      
      document.getElementById('video-details').innerHTML = detailsHtml;
      
      // 7️⃣ Přidání event listenerů pro časové odkazy
      addTimeStampListeners();
      
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

/**
 * Vykreslí strukturovaný obsah videa
 */
function renderTopics(topics) {
  let html = '<div class="video-content-structure"><h2>Obsah videa</h2>';
  
  topics.forEach((topic, topicIndex) => {
    html += `<div class="topic">`;
    html += `<h3 class="topic-header">${topic.header}</h3>`;
    
    // Pokud má topic přímé body
    if (topic.points && topic.points.length > 0) {
      html += '<ul class="topic-points">';
      topic.points.forEach((point, pointIndex) => {
        html += renderPoint(point, topicIndex, pointIndex);
      });
      html += '</ul>';
    }
    
    // Pokud má topic podsekce
    if (topic.subsections && topic.subsections.length > 0) {
      topic.subsections.forEach((subsection, subsectionIndex) => {
        html += `<div class="subsection">`;
        html += `<h4 class="subsection-header">${subsection.header}</h4>`;
        
        if (subsection.points && subsection.points.length > 0) {
          html += '<ul class="topic-points">';
          subsection.points.forEach((point, pointIndex) => {
            html += renderPoint(point, topicIndex, pointIndex, subsectionIndex);
          });
          html += '</ul>';
        }
        
        html += '</div>';
      });
    }
    
    html += '</div>';
  });
  
  html += '</div>';
  return html;
}

/**
 * Vykreslí jednotlivý bod s časovou značkou
 */
function renderPoint(point, topicIndex, pointIndex, subsectionIndex = null) {
  const hasTimestamp = point.start !== null && point.start !== undefined;
  
  let html = '<li class="topic-point">';
  
  if (hasTimestamp) {
    const timeStr = formatTime(point.start);
    html += `<span class="timestamp" data-time="${point.start}">${timeStr}</span> `;
  }
  
  html += `<span class="point-text">${point.text}</span>`;
  html += '</li>';
  
  return html;
}

/**
 * Převede sekundy na formát MM:SS
 */
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Přidá event listenery pro klikání na časové značky
 */
function addTimeStampListeners() {
  const timestamps = document.querySelectorAll('.timestamp');
  
  timestamps.forEach(timestamp => {
    timestamp.addEventListener('click', function() {
      const time = parseInt(this.getAttribute('data-time'));
      seekToTime(time);
    });
  });
}

/**
 * Přesune video na určitý čas
 */
function seekToTime(seconds) {
  const iframe = document.getElementById('youtube-iframe');
  if (iframe && iframe.contentWindow) {
    // Použití YouTube IFrame API pro přesun na čas
    iframe.contentWindow.postMessage(JSON.stringify({
      event: 'command',
      func: 'seekTo',
      args: [seconds, true]
    }), '*');
  }
}
