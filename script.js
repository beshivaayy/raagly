let player;
let isPlaying = false;

// Teri Playlist ka ID
const playlistId = 'PLJRipbfj__b0'; 

// 27 Raags Master Data (Benefits & Gradients)
const raagData = [
  {
    name: "Raag Khamaj",
    bgColor: "linear-gradient(135deg, #a8ff78 0%, #78ffd6 100%)",
    desc: "🌿 Physical Health: Relieves Acidity & digestive issues.\n🧘 Mind: Induces soothing emotional ease."
  },
  {
    name: "Raag Pilu",
    bgColor: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
    desc: "🌿 Physical Health: Aids in Anemia & boosts blood vitality.\n🧘 Mind: Brings gentle joy & lightheartedness."
  },
  {
    name: "Raag Malkauns",
    bgColor: "linear-gradient(135deg, #200122 0%, #6f0000 100%)",
    desc: "🌿 Physical Health: Helps manage Asthma & respiratory issues.\n🧘 Mind: Deep meditative focus & inner strength."
  },
  {
    name: "Raag Lalit",
    bgColor: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
    desc: "🌿 Physical Health: Soothes Asthma & lung congestion.\n🌅 Time: Early Dawn awakening energy."
  },
  {
    name: "Raag Bhoop",
    bgColor: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
    desc: "🌿 Physical Health: Regulates Blood Pressure & hypertension.\n🧘 Mind: Instills tranquility and mental composure."
  },
  {
    name: "Raag Bhairavi",
    bgColor: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
    desc: "🌿 Health: Cures Insomnia & Blood disorders.\n💼 Wealth: Helps resolve Property-related disputes."
  },
  {
    name: "Raag Asavari",
    bgColor: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
    desc: "🌿 Health: Blood purification & recovery.\n💼 Career/Wealth: Solves Property issues."
  },
  {
    name: "Raag Todi",
    bgColor: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
    desc: "🌿 Health: Helps in blood circulation & physical recovery.\n💼 Wealth: Assists in property matters."
  },
  {
    name: "Raag Jaunpuri",
    bgColor: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    desc: "🌿 Health: Fights Chronic & long-term illnesses.\n💼 Career: Enhances professional growth & career stability."
  },
  {
    name: "Raag Kirwani",
    bgColor: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    desc: "🌿 Health: Relieves chronic health conditions.\n💼 Career: Supports professional success & endurance."
  },
  {
    name: "Raag Neelambri",
    bgColor: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    desc: "🌿 Health: Healing from long-term sickness.\n💼 Career: Overcomes career obstacles."
  },
  {
    name: "Raag Bhairav",
    bgColor: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
    desc: "🌿 Health: Relieves severe Headaches & Migraines.\n🌅 Solar Energy: Sun energy & morning focus."
  },
  {
    name: "Raag Darbari",
    bgColor: "linear-gradient(135deg, #09203f 0%, #537895 100%)",
    desc: "🌿 Health: Relieves Heart Diseases & stress.\n🤝 Relations: Strengthens bond with Father & Govt matters."
  },
  {
    name: "Raag Gandharva",
    bgColor: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
    desc: "🌿 Health: Balances Thyroid & Hormones.\n💼 Career: Boosts Education, Business & Communication."
  },
  {
    name: "Raag Kalyan",
    bgColor: "linear-gradient(135deg, #ff0844 0%, #ffb199 100%)",
    desc: "🌿 Health: Balances Hormonal Imbalances.\n🤝 Family: Resolves sibling fights & improves communication."
  },
  {
    name: "Raag Poorvi",
    bgColor: "linear-gradient(135deg, #f12711 0%, #f5af19 100%)",
    desc: "🌿 Health: Helps with Thyroid issues.\n💼 Career: Enhances wisdom, business acumen & speech."
  },
  {
    name: "Raag Jay Jaywanti",
    bgColor: "linear-gradient(135deg, #b92b27 0%, #1565c0 100%)",
    desc: "🌿 Health: Overcomes physical weakness & fatigue.\n🧘 Mind: Revitalizes physical energy."
  },
  {
    name: "Raag Madhuwanti",
    bgColor: "linear-gradient(135deg, #37ecba 0%, #72aff3 100%)",
    desc: "🧘 Mental Peace: Relieves Depression, Anxiety & severe stress.\n✨ Vibe: Soothing dusk frequency."
  },
  {
    name: "Raag Shudh",
    bgColor: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
    desc: "🧘 Mind: Overcomes lack of happiness, motivation & purpose.\n🤝 Family: Enhances harmony with Mother."
  },
  {
    name: "Raag Komal",
    bgColor: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
    desc: "🧘 Mind: Heals emotional trauma & deep pain.\n🤝 Family: Improves family atmosphere."
  },
  {
    name: "Raag Yaman",
    bgColor: "linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%)",
    desc: "🧘 Mind: Soothes emotional grief & instills peace.\n🤝 Family: Clears negative atmosphere at home."
  },
  {
    name: "Raag Hansdhawani",
    bgColor: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
    desc: "🧘 Mind: Restores inner stillness & emotional joy.\n🤝 Family: Brings harmony with Mother & family."
  },
  {
    name: "Raag Shivranjani",
    bgColor: "linear-gradient(135deg, #ff0844 0%, #ffb199 100%)",
    desc: "🧠 Mind: Helps with Memory Loss & focus.\n🧘 Vibe: Melancholic healing frequency."
  },
  {
    name: "Raag Nat Bhairav",
    bgColor: "linear-gradient(135deg, #f12711 0%, #f5af19 100%)",
    desc: "💼 Wealth: Resolves money-related troubles.\n🤝 Relations: Fixes general relationship issues."
  },
  {
    name: "Raag Brindabani Sarang",
    bgColor: "linear-gradient(135deg, #13547a 0%, #80d0c7 100%)",
    desc: "💼 Wealth: Removes financial blockages.\n🤝 Relations: Promotes affection in friendships."
  },
  {
    name: "Raag Tanpura",
    bgColor: "linear-gradient(135deg, #2b5876 0%, #4e4376 100%)",
    desc: "💼 Career: Elevates social position, honor & govt work.\n🤝 Relations: Improves relationship with Father."
  },
  {
    name: "Raag Shadbhinna",
    bgColor: "linear-gradient(135deg, #314755 0%, #26a0da 100%)",
    desc: "💼 Career: Success in government & legal matters.\n🤝 Relations: Fosters mutual respect with Father."
  }
];

// DOM Elements
const raagName = document.getElementById('raag-name');
const raagTime = document.getElementById('raag-time');
const raagDesc = document.getElementById('raag-desc'); // Description box in HTML
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const playerContainer = document.querySelector('.player-container');
const body = document.getElementById('app-body');

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

function onPlayerReady() {
    updateTrackInfo();
}

function updateTrackInfo() {
    if (!player || !player.getPlaylistIndex) return;

    let currentIndex = player.getPlaylistIndex();
    if (currentIndex === undefined || currentIndex < 0) currentIndex = 0;

    // Fetch corresponding Raag data
    const currentData = raagData[currentIndex % raagData.length];

    // 1. Update Title (Fallback to YouTube title if available)
    if (player.getVideoData && player.getVideoData().title) {
        raagName.innerText = player.getVideoData().title;
    } else if (currentData) {
        raagName.innerText = currentData.name;
    }

    // 2. Subtitle
    if (raagTime) {
        raagTime.innerText = "Sound Healing Frequencies";
    }

    // 3. Update Benefits / Description Text
    if (raagDesc && currentData) {
        raagDesc.innerText = currentData.desc;
    }

    // 4. Update Gradient Background
    if (currentData) {
        body.style.background = currentData.bgColor;
    }
}

// Play / Pause Toggle
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
