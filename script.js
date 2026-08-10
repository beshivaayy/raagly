let player;
let isPlaying = false;

// Teri Playlist ka ID
const playlistId = 'PLJRipbfj__b0'; 

// Aesthetic Background Colors (Jo gaana badalne par auto-change honge)
const backgroundColors = [
    '#f7d794', '#778ca3', '#4b6584', '#3c6382', '#2c3e50', 
    '#6A5ACD', '#84817a', '#cc8e35', '#d1ccc0', '#ffb142'
];
let colorIndex = 0;

// YouTube Iframe API Load Karna
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        height: '0',
        width: '0',
        playerVars: {
            'listType': 'playlist',
            'list': playlistId,
            'autoplay': 0
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

const raagName = document.getElementById('raag-name');
const raagTime = document.getElementById('raag-time');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const playerContainer = document.querySelector('.player-container');
const body = document.getElementById('app-body');

function onPlayerReady() {
    updateTrackInfo();
}

function updateTrackInfo() {
    if (player && player.getVideoData) {
        const videoData = player.getVideoData();
        if (videoData && videoData.title) {
            raagName.innerText = videoData.title;
        } else {
            raagName.innerText = "Vedic Raag";
        }
    }
    raagTime.innerText = "Sound Healing Frequencies";
}

playBtn.addEventListener('click', () => {
    if (!player) return;
    if (isPlaying) {
        player.pauseVideo();
    } else {
        player.playVideo();
    }
});

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        isPlaying = true;
        playerContainer.classList.add('play');
        playBtn.querySelector('i').className = 'fas fa-pause';
        updateTrackInfo();

        // Har naye gaane par background color auto-change hoga
        colorIndex++;
        body.style.background = backgroundColors[colorIndex % backgroundColors.length];
    } else if (event.data == YT.PlayerState.PAUSED || event.data == YT.PlayerState.ENDED) {
        isPlaying = false;
        playerContainer.classList.remove('play');
        playBtn.querySelector('i').className = 'fas fa-play';
    }
}

// Next Button
nextBtn.addEventListener('click', () => {
    if (player && player.nextVideo) {
        player.nextVideo();
    }
});

// Previous Button
prevBtn.addEventListener('click', () => {
    if (player && player.previousVideo) {
        player.previousVideo();
    }
});
