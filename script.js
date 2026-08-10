let player;
let isPlaying = false;
let progressTimer = null;
let isMuted = false;
let preMuteVolume = 80; // Default volume level

// Playlist ID
const playlistId = 'PLJRipbfj__b0'; 

// 27 Raags Master Data (Benefits & Gradients)
const raagData = [
  { name: "Raag Khamaj", bgColor: "linear-gradient(135deg, #a8ff78 0%, #78ffd6 100%)", desc: "🌿 Physical Health: Relieves Acidity & digestive issues.\n🧘 Mind: Induces soothing emotional ease." },
  { name: "Raag Pilu", bgColor: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)", desc: "🌿 Physical Health: Aids in Anemia & boosts blood vitality.\n🧘 Mind: Brings gentle joy & lightheartedness." },
  { name: "Raag Malkauns", bgColor: "linear-gradient(135deg, #200122 0%, #6f0000 100%)", desc: "🌿 Physical Health: Helps manage Asthma & respiratory issues.\n🧘 Mind: Deep meditative focus & inner strength." },
  { name: "Raag Lalit", bgColor: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)", desc: "🌿 Physical Health: Soothes Asthma & lung congestion.\n🌅 Time: Early Dawn awakening energy." },
  { name: "Raag Bhoop", bgColor: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)", desc: "🌿 Physical Health: Regulates Blood Pressure & hypertension.\n🧘 Mind: Instills tranquility and mental composure." },
  { name: "Raag Bhairavi", bgColor: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)", desc: "🌿 Health: Cures Insomnia & Blood disorders.\n💼 Wealth: Helps resolve Property-related disputes." },
  { name: "Raag Asavari", bgColor: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)", desc: "🌿 Health: Blood purification & recovery.\n💼 Career/Wealth: Solves Property issues." },
  { name: "Raag Todi", bgColor: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)", desc: "🌿 Health: Helps in blood circulation & physical recovery.\n💼 Wealth: Assists in property matters." },
  { name: "Raag Jaunpuri", bgColor: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)", desc: "🌿 Health: Fights Chronic & long-term illnesses.\n💼 Career: Enhances professional growth & career stability." },
  { name: "Raag Kirwani", bgColor: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)", desc: "🌿 Health: Relieves chronic health conditions.\n💼 Career: Supports professional success & endurance." },
  { name: "Raag Neelambri", bgColor: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)", desc: "🌿 Health: Healing from long-term sickness.\n💼 Career: Overcomes career obstacles." },
  { name: "Raag Bhairav", bgColor: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)", desc: "🌿 Health: Relieves severe Headaches & Migraines.\n🌅 Solar Energy: Sun energy & morning focus." },
  { name: "Raag Darbari", bgColor: "linear-gradient(135deg, #09203f 0%, #537895 100%)", desc: "🌿 Health: Relieves Heart Diseases & stress.\n🤝 Relations: Strengthens bond with Father & Govt matters." },
  { name: "Raag Gandharva", bgColor: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)", desc: "🌿 Health: Balances Thyroid & Hormones.\n💼 Career: Boosts Education, Business & Communication." },
  { name: "Raag Kalyan", bgColor: "linear-gradient(135deg, #ff0844 0%, #ffb199 100%)", desc: "🌿 Health: Balances Hormonal Imbalances.\n🤝 Family: Resolves sibling fights & improves communication." },
  { name: "Raag Poorvi", bgColor: "linear-gradient(135deg, #f12711 0%, #f5af19 100%)", desc: "🌿 Health: Helps with Thyroid issues.\n💼 Career: Enhances wisdom, business acumen & speech." },
  { name: "Raag Jay Jaywanti", bgColor: "linear-gradient(135deg, #b92b27 0%, #1565c0 100%)", desc: "🌿 Health: Overcomes physical weakness & fatigue.\n🧘 Mind: Revitalizes physical energy." },
  { name: "Raag Madhuwanti", bgColor: "linear-gradient(135deg, #37ecba 0%, #72aff3 100%)", desc: "🧘 Mental Peace: Relieves Depression, Anxiety & severe stress.\n✨ Vibe: Soothing dusk frequency." },
  { name: "Raag Shudh", bgColor: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)", desc: "🧘 Mind: Overcomes lack of happiness, motivation & purpose.\n🤝 Family: Enhances harmony with Mother." },
  { name: "Raag Komal", bgColor: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)", desc: "🧘 Mind: Heals emotional trauma & deep pain.\n🤝 Family: Improves family atmosphere." },
  { name: "Raag Yaman", bgColor: "linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%)", desc: "🧘 Mind: Soothes emotional grief & instills peace.\n🤝 Family: Clears negative atmosphere at home." },
  { name: "Raag Hansdhawani", bgColor: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)", desc: "🧘 Mind: Restores inner stillness & emotional joy.\n🤝 Family: Brings harmony with Mother & family." },
  { name: "Raag Shivranjani", bgColor: "linear-gradient(135deg, #ff0844 0%, #ffb199 100%)", desc: "🧠 Mind: Helps with Memory Loss & focus.\n🧘 Vibe: Melancholic healing frequency." },
  { name: "Raag Nat Bhairav", bgColor: "linear-gradient(135deg, #f12711 0%, #f5af19 100%)", desc: "💼 Wealth: Resolves money-related troubles.\n🤝 Relations: Fixes general relationship issues." },
  { name: "Raag Brindabani Sarang", bgColor: "linear-gradient(135deg, #13547a 0%, #80d0c7 100%)", desc: "💼 Wealth: Removes financial blockages.\n🤝 Relations: Promotes affection in friendships." },
  { name: "Raag Tanpura", bgColor: "linear-gradient(135deg, #2b5876 0%, #4e4376 100%)", desc: "💼 Career: Elevates social position, honor & govt work.\n🤝 Relations: Improves relationship with Father." },
  { name: "Raag Shadbhinna", bgColor: "linear-gradient(135deg, #314755 0%, #26a0da 100%)", desc: "💼 Career: Success in government & legal matters.\n🤝 Relations: Fosters mutual respect with Father." }
];

// DOM Elements
const raagName = document.getElementById('raag-name');
const raagTime = document.getElementById('raag-time');
const raagDesc = document.getElementById('raag-desc');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const playerContainer = document.querySelector('.player-container');
const body = document.getElementById('app-body');

// Seek Bar & Volume Elements
const progressContainer = document.getElementById('progress-container');
const progressBar = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const volumeSlider = document.getElementById('volume-slider');
const muteBtn = document.getElementById('mute-btn');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

// YouTube Iframe API Loading
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

function onPlayerReady() {
    if (player && player.setVolume) {
        player.setVolume(preMuteVolume);
    }
    updateTrackInfo();
}

function updateTrackInfo() {
    if (!player || !player.getPlaylistIndex) return;

    let currentIndex = player.getPlaylistIndex();
    if (currentIndex === undefined || currentIndex < 0) currentIndex = 0;

    const currentData = raagData[currentIndex % raagData.length];

    if (player.getVideoData && player.getVideoData().title) {
        raagName.innerText = player.getVideoData().title;
    } else if (currentData) {
        raagName.innerText = currentData.name;
    }

    if (raagTime) {
        raagTime.innerText = "Sound Healing Frequencies";
    }

    if (raagDesc && currentData) {
        raagDesc.innerText = currentData.desc;
    }

    if (currentData) {
        body.style.background = currentData.bgColor;
    }

    // Trigger Fade In Animation smoothly on changing text
    const textElements = [raagName, raagTime, raagDesc];
    textElements.forEach(el => {
        if (el) {
            el.classList.remove('fade-in');
            void el.offsetWidth; // Reflow to restart animation
            el.classList.add('fade-in');
        }
    });
}

// Time Formatter (Helper)
function formatTime(seconds) {
    if (isNaN(seconds) || seconds === null) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Live Progress Sync
function updateProgress() {
    if (!player || !player.getCurrentTime || !player.getDuration) return;

    const currentTime = player.getCurrentTime() || 0;
    const duration = player.getDuration() || 0;

    if (duration > 0) {
        const progressPercent = (currentTime / duration) * 100;
        progressBar.style.width = `${progressPercent}%`;
        currentTimeEl.innerText = formatTime(currentTime);
        durationEl.innerText = formatTime(duration);
    } else {
        progressBar.style.width = '0%';
        currentTimeEl.innerText = '0:00';
        durationEl.innerText = '0:00';
    }
}

function startProgressTimer() {
    stopProgressTimer();
    progressTimer = setInterval(updateProgress, 500);
}

function stopProgressTimer() {
    if (progressTimer) {
        clearInterval(progressTimer);
        progressTimer = null;
    }
}

// Seek/Click Interaction on Progress bar
if (progressContainer) {
    progressContainer.addEventListener('click', (e) => {
        if (!player || !player.getDuration) return;
        const duration = player.getDuration();
        if (!duration) return;

        const clickX = e.offsetX;
        const width = progressContainer.clientWidth;
        const seekTime = (clickX / width) * duration;

        player.seekTo(seekTime, true);
        updateProgress();
    });
}

// Play / Pause Logic
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
        startProgressTimer();
    } else if (event.data == YT.PlayerState.PAUSED || event.data == YT.PlayerState.ENDED) {
        isPlaying = false;
        playerContainer.classList.remove('play');
        playBtn.querySelector('i').className = 'fas fa-play';
        stopProgressTimer();
        updateProgress();
    }
}

nextBtn.addEventListener('click', () => {
    if (player && player.nextVideo) player.nextVideo();
});

prevBtn.addEventListener('click', () => {
    if (player && player.previousVideo) player.previousVideo();
});

// Volume Controls Interaction
if (volumeSlider) {
    volumeSlider.addEventListener('input', (e) => {
        const volumeValue = e.target.value;
        if (player && player.setVolume) player.setVolume(volumeValue);
        
        if (volumeValue == 0) {
            muteBtn.querySelector('i').className = 'fas fa-volume-mute';
            isMuted = true;
        } else {
            muteBtn.querySelector('i').className = volumeValue < 50 ? 'fas fa-volume-down' : 'fas fa-volume-up';
            isMuted = false;
        }
    });
}

if (muteBtn) {
    muteBtn.addEventListener('click', () => {
        if (!player) return;

        if (isMuted) {
            player.unMute();
            player.setVolume(preMuteVolume);
            volumeSlider.value = preMuteVolume;
            muteBtn.querySelector('i').className = preMuteVolume < 50 ? 'fas fa-volume-down' : 'fas fa-volume-up';
            isMuted = false;
        } else {
            preMuteVolume = volumeSlider.value;
            player.mute();
            volumeSlider.value = 0;
            muteBtn.querySelector('i').className = 'fas fa-volume-mute';
            isMuted = true;
        }
    });
}

// Search Bar Logic
if (searchInput && searchResults) {
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        searchResults.innerHTML = '';

        if (query === '') {
            searchResults.style.display = 'none';
            return;
        }

        const filtered = raagData
            .map((item, index) => ({ ...item, index }))
            .filter(item => 
                item.name.toLowerCase().includes(query) || 
                item.desc.toLowerCase().includes(query)
            );

        if (filtered.length === 0) {
            searchResults.innerHTML = '<li style="cursor:default; opacity:0.7;">No matching Raag found</li>';
        } else {
            filtered.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = `<strong>${item.name}</strong>${item.desc.split('\n')[0]}`;
                
                li.addEventListener('click', () => {
                    if (player && player.playVideoAt) {
                        player.playVideoAt(item.index);
                    }
                    searchInput.value = '';
                    searchResults.style.display = 'none';
                });
                searchResults.appendChild(li);
            });
        }
        searchResults.style.display = 'block';
    });

    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.style.display = 'none';
        }
    });
}
