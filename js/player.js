// --- Globální proměnné ---
var player;
var stopTimer = null;

// --- Inicializace skriptu ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Získání ID videa z URL adresy
    const urlParams = new URLSearchParams(window.location.search);
    const currentVideoId = urlParams.get('id');

    // 2. Nalezení dat pro správné video v našem datovém souboru
    const videoData = videos.find(video => video.id === currentVideoId);

    // 3. Pokud data najdeme, spustíme vykreslení stránky
    if (videoData) {
        renderPage(videoData);
    } else {
        document.getElementById('page-title').textContent = 'Video nebylo nalezeno.';
    }
});

/**
 * Vykreslí celý obsah stránky podle dat konkrétního videa.
 * @param {object} videoData - Objekt s informacemi o videu z videos.js.
 */
function renderPage(videoData) {
    // Nastavení titulku stránky a hlavního nadpisu
    document.title = `${videoData.title} | Galerie Národního Zdraví`;
    document.getElementById('page-title').textContent = videoData.title;

    const topicsContainer = document.getElementById('topics-container');
    topicsContainer.innerHTML = ''; // Vyčistíme kontejner pro případné staré data

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
        link.textContent = point.start === null ? point.text : `${point.text} (${formatTime(point.start)} - ${formatTime(point.end)})`;
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
    if (totalSeconds === null) return '';
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

            if(isNaN(startTime)) return;

            player.seekTo(startTime, true);
            player.playVideo();
            player.end = endTime; // Uložíme si koncový čas do vlastnosti přehrávače
        });
    });
}


// --- YOUTUBE IFRAME PLAYER API ---

// 1. Tento kód načte externí JavaScript pro YouTube IFrame Player API.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 2. Tato funkce se zavolá automaticky po načtení API.
function onYouTubeIframeAPIReady() {
    const urlParams = new URLSearchParams(window.location.search);
    const videoId = urlParams.get('id');
    if (!videoId) return;

    player = new YT.Player('player', {
        height: '315',
        width: '560',
        videoId: videoId,
        playerVars: { 'controls': 1, 'autoplay': 0 },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    // Přehrávač je připraven. Můžeme například povolit tlačítka.
}

// 3. API zavolá tuto funkci, když se změní stav přehrávače (přehrávání, pauza, atd.).
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

// 4. Funkce pro kontrolu, zda video nepřesáhlo koncový čas.
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
            player.end = null; // Vyčistíme koncový čas
        }
    }, 100);
}




