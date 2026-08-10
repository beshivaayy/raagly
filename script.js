const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const raagName = document.getElementById('raag-name');
const raagTime = document.getElementById('raag-time');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const playerContainer = document.querySelector('.player-container');
const body = document.getElementById('app-body');
const currTime = document.getElementById('current-time');
const durTime = document.getElementById('duration');

// Yahan apne MP3 files, details aur background color daalo
const raags = [
    {
        title: 'Raag Bhairav',
        time: 'Morning / Sun Energy',
        file: 'raag-bhairav', // Aapki MP3 file ka naam (bina .mp3 ke)
        bgColor: '#FFDAB9' // Saffron/Morning color
    },
    {
        title: 'Raag Yaman',
        time: 'Evening / Venus Energy',
        file: 'raag-yaman',
        bgColor: '#4682B4' // Deep Blue/Evening color
    },
    {
        title: 'Raag Darbari',
        time: 'Midnight / Saturn Energy',
        file: 'raag-darbari',
        bgColor: '#2C3E50' // Dark/Midnight color
    }
];

let raagIndex = 0;

function loadRaag(raag) {
    raagName.innerText = raag.title;
    raagTime.innerText = raag.time;
    audio.src = `${raag.file}.mp3`; // Ensure aapke songs .mp3 format mein hi hon
    body.style.background = raag.bgColor;
}

loadRaag(raags[raagIndex]);

function playSong() {
    playerContainer.classList.add('play');
    playBtn.querySelector('i').classList.remove('fa-play');
    playBtn.querySelector('i').classList.add('fa-pause');
    audio.play();
}

function pauseSong() {
    playerContainer.classList.remove('play');
    playBtn.querySelector('i').classList.add('fa-play');
    playBtn.querySelector('i').classList.remove('fa-pause');
    audio.pause();
}

function prevSong() {
    raagIndex--;
    if (raagIndex < 0) { raagIndex = raags.length - 1; }
    loadRaag(raags[raagIndex]);
    playSong();
}

function nextSong() {
    raagIndex++;
    if (raagIndex > raags.length - 1) { raagIndex = 0; }
    loadRaag(raags[raagIndex]);
    playSong();
}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    // Time display format
    let min = Math.floor(currentTime / 60);
    let sec = Math.floor(currentTime % 60);
    if(sec < 10) sec = `0${sec}`;
    currTime.innerText = `${min}:${sec}`;

    if(duration) {
        let durMin = Math.floor(duration / 60);
        let durSec = Math.floor(duration % 60);
        if(durSec < 10) durSec = `0${durSec}`;
        durTime.innerText = `${durMin}:${durSec}`;
    }
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}

playBtn.addEventListener('click', () => {
    const isPlaying = playerContainer.classList.contains('play');
    if (isPlaying) { pauseSong(); } else { playSong(); }
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
audio.addEventListener('timeupdate', updateProgress);
progressContainer.addEventListener('click', setProgress);
audio.addEventListener('ended', nextSong);