// --- Globální proměnné ---
var player;
var stopTimer = null;
let currentVideoId = null;

// --- Hlavní spouštěcí logika ---
document.addEventListener('DOMContentLoaded', async () => {
    // 1. Získání ID videa z URL adresy
    const urlParams = new URLSearchParams(window.location.search);
    currentVideoId = urlParams.get('id');

    if (!currentVideoId) {
        document.getElementById('page-title').textContent = 'Video nebylo nalezeno: chybí ID.';
        return;
    }

    try {
        // 2. Načtení dat z JSON souboru
        const response = await fetch('data/videos.json');
        const { videos } = await response.json();
        const videoData = videos.find(video => video.id === currentVideoId);

        // 3. Pokud data najdeme, spustíme vykreslení stránky
        if (videoData) {
            renderPage(videoData);
        } else {
            document.getElementById('page-title').textContent = 'Video nebylo nalezeno v databázi.';
        }
    } catch (error) {
        console.error("Chyba při načítání video dat:", error);
        document.getElementById('page-title').textContent = 'Chyba při načítání dat.';
    }
});


/**
 * Vykreslí celý obsah stránky podle dat konkrétního videa.
 * @param {object} videoData - Objekt s informacemi o videu.
 */
function renderPage(videoData) {
    // Použijeme český název, pokud existuje, jinak originální
    const title = (videoData.czTitle && videoData.czTitle.trim() !== '') 
        ? videoData.czTitle 
        : videoData.title;

    // Nastavení titulku stránky a hlavního nadpisu
    document.title = `${title} | Galerie videí`;
    document.getElementById('page-title').textContent = title;

    const topicsContainer = document.getElementById('topics-container');
    topicsContainer.innerHTML = ''; // Vyčistíme kontejner

    // Projdeme všechna témata a vytvoříme pro ně HTML
    videoData.topics.forEach(topic => {
        const topicHeader = document.createElement('h2');
        topicHeader.className = 'topic-header orange-line';
        topicHeader.textContent = topic.header;
        topicsContainer.appendChild(topicHeader);

        if (topic.points) {
            topicsContainer.appendChild(createPointsList(topic.points));
        }

        if (topic.subsections) {
            topic.subsections.forEach(sub => {
                const subHeader = document.createElement('div');
                subHeader.className = 'sub-section-header indent-1';
                subHeader.textContent = sub.header;
                topicsContainer.appendChild(subHeader);
                topicsContainer.appendChild(createPointsList(sub.points, true));
            });
        }
    });

    // Po vykreslení všech odkazů na ně navážeme posluchače událostí
    setupClickListeners();
}

/**
 * Vytvoří a vrátí <ul> element se seznamem časových značek.
 * @param {Array} points - Pole objektů s body tématu.
 * @param {boolean} indented - Zda má být seznam odsazený.
 * @returns {HTMLUListElement}
 */
function createPointsList(points, indented = false) {
    const list = document.createElement('ul');
    list.className = 'list-disc ml-4';
    if (indented) {
        list.classList.add('indent-1');
    }

    points.forEach(point => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = '#';
        link.dataset.start = point.start;
        link.dataset.end = point.end;
        
        const timeText = (point.start !== null && point.end !== null)
            ? `(${formatTime(point.start)} - ${formatTime(point.end)})`
            : '';

        link.textContent = `${point.text} ${timeText}`.trim();
        listItem.appendChild(link);
        list.appendChild(listItem);
    });
    return list;
}

/**
 * Pomocná funkce pro formátování sekund na formát M:SS.
 * @param {number} totalSeconds - Celkový počet sekund.
 * @returns {string}
 */
function formatTime(totalSeconds) {
    if (totalSeconds === null || typeof totalSeconds === 'undefined') return '';
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

/**
 * Najde všechny odkazy s časovými značkami a přidá jim event listener pro ovládání videa.
 */
function setupClickListeners() {
    const jumpLinks = document.querySelectorAll('a[data-start]');
    jumpLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            if (!player) return;

            const startTime = parseFloat(event.currentTarget.getAttribute('data-start'));
            const endTime = parseFloat(event.currentTarget.getAttribute('data-end'));

            if (isNaN(startTime)) return;

            player.seekTo(startTime, true);
            player.playVideo();
            // Uložíme si koncový čas do vlastní vlastnosti přehrávače
            player.end = endTime; 
        });
    });
}


// --- YOUTUBE IFRAME PLAYER API ---

/**
 * Tato funkce se zavolá automaticky po načtení YouTube API.
 * Je volána globálně, proto nesmí být uvnitř jiné funkce.
 */
function onYouTubeIframeAPIReady() {
    if (!currentVideoId) return;

    player = new YT.Player('player', {
        height: '315',
        width: '560',
        videoId: currentVideoId,
        playerVars: { 'controls': 1, 'autoplay': 0 },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

/**
 * Zavolá se, když je přehrávač připraven.
 */
function onPlayerReady(event) {
    // Zde není potřeba žádná akce, ale funkce musí existovat.
}

/**
 * API zavolá tuto funkci, když se změní stav přehrávače.
 */
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        // Pokud video hraje, začneme kontrolovat čas
        checkVideoTime();
    } else {
        // Pokud se zastaví, zrušíme časovač
        if (stopTimer) {
            clearInterval(stopTimer);
        }
    }
}

/**
 * Kontroluje, zda video nepřesáhlo koncový čas a případně ho zastaví.
 */
function checkVideoTime() {
    if (stopTimer) {
        clearInterval(stopTimer);
    }
    
    // Zkontrolujeme, zda máme nastavený koncový čas
    const endTime = player.end;
    if (typeof endTime !== 'number' || isNaN(endTime)) return;

    stopTimer = setInterval(() => {
        if (player.getCurrentTime() >= endTime) {
            player.pauseVideo();
            clearInterval(stopTimer);
            // Vyčistíme koncový čas, aby další přehrávání nebylo ovlivněno
            player.end = null; 
        }
    }, 100);
}
