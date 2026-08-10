```js
/* =========================================================
   RAAGLY — SCRIPT.JS
   Fixed YouTube Playlist Player
   Playlist: PLJRipbfj__b0
   Playlist order = 27 Raags supplied by user
   ========================================================= */

"use strict";

/* =========================================================
   CONFIG
   ========================================================= */

const PLAYLIST_ID = "PLJRipbfj__b0";
const DEFAULT_VOLUME = 80;

/*
 * IMPORTANT:
 * This array follows the exact playlist order.
 */
const raagData = [
    {
        name: "Raag Bhimpalasi",
        time: "Afternoon",
        bg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        desc: "🌿 Vibe: Warm, emotional and soothing.\n🧘 Mind: Encourages relaxation, introspection and emotional balance."
    },
    {
        name: "Raag Darbari",
        time: "Late Night",
        bg: "linear-gradient(135deg, #09203f 0%, #537895 100%)",
        desc: "🌙 Vibe: Deep, majestic and contemplative.\n🧘 Mind: Creates a calm and introspective atmosphere."
    },
    {
        name: "Raag Shuddh Sarang",
        time: "Afternoon",
        bg: "linear-gradient(135deg, #56ccf2 0%, #2f80ed 100%)",
        desc: "☀️ Vibe: Bright, refreshing and graceful.\n🧘 Mind: Encourages clarity and emotional freshness."
    },
    {
        name: "Raag Komal Asavari",
        time: "Morning",
        bg: "linear-gradient(135deg, #8360c3 0%, #2ebf91 100%)",
        desc: "🌿 Vibe: Gentle and reflective.\n🧘 Mind: Supports quiet contemplation and emotional release."
    },
    {
        name: "Raag Yaman",
        time: "Evening",
        bg: "linear-gradient(135deg, #141e30 0%, #243b55 100%)",
        desc: "✨ Vibe: Serene, graceful and expansive.\n🧘 Mind: Encourages peace, openness and relaxation."
    },
    {
        name: "Raag Hansdhawani",
        time: "Evening",
        bg: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
        desc: "✨ Vibe: Bright, joyful and uplifting.\n🧘 Mind: Creates a feeling of inner stillness and lightness."
    },
    {
        name: "Raag Bhairavi",
        time: "Morning / Closing",
        bg: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
        desc: "🌿 Vibe: Devotional, emotional and deeply expressive.\n🧘 Mind: Encourages reflection, acceptance and peaceful closure."
    },
    {
        name: "Raag Asavari",
        time: "Late Morning",
        bg: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
        desc: "🌿 Vibe: Soft and introspective.\n🧘 Mind: Encourages relaxation and emotional balance."
    },
    {
        name: "Raag Todi",
        time: "Late Morning",
        bg: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
        desc: "🧘 Vibe: Deeply contemplative and expressive.\n✨ Mind: Encourages stillness and focused listening."
    },
    {
        name: "Raag Kalyan",
        time: "Evening",
        bg: "linear-gradient(135deg, #ff0844 0%, #ffb199 100%)",
        desc: "✨ Vibe: Expansive, graceful and uplifting.\n🧘 Mind: Creates optimism and emotional openness."
    },
    {
        name: "Raag Poorvi",
        time: "Evening",
        bg: "linear-gradient(135deg, #f12711 0%, #f5af19 100%)",
        desc: "🌅 Vibe: Rich, serious and contemplative.\n🧘 Mind: Encourages concentration and inner awareness."
    },
    {
        name: "Raag Nat Bhairav",
        time: "Morning",
        bg: "linear-gradient(135deg, #f12711 0%, #f5af19 100%)",
        desc: "🌅 Vibe: Strong and grounded morning energy.\n🧘 Mind: Encourages clarity and emotional stability."
    },
    {
        name: "Raag Brindabani Sarang",
        time: "Afternoon",
        bg: "linear-gradient(135deg, #13547a 0%, #80d0c7 100%)",
        desc: "🌿 Vibe: Refreshing, peaceful and affectionate.\n🧘 Mind: Creates a light and joyful atmosphere."
    },
    {
        name: "Raag Shuddh Kalyan",
        time: "Evening",
        bg: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
        desc: "✨ Vibe: Serene and luminous.\n🧘 Mind: Encourages peace, clarity and gentle positivity."
    },
    {
        name: "Raag Jaunpuri",
        time: "Late Morning",
        bg: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        desc: "🌿 Vibe: Reflective and expressive.\n🧘 Mind: Supports emotional release and calm concentration."
    },
    {
        name: "Raag Kirwani",
        time: "Evening",
        bg: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
        desc: "🧘 Vibe: Emotional, peaceful and meditative.\n✨ Mind: Creates a soothing space for deep listening."
    },
    {
        name: "Raag Neelambri",
        time: "Night",
        bg: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
        desc: "🌙 Vibe: Gentle and lullaby-like.\n🧘 Mind: Encourages relaxation and peaceful nighttime listening."
    },
    {
        name: "Raag Malkauns",
        time: "Late Night",
        bg: "linear-gradient(135deg, #200122 0%, #6f0000 100%)",
        desc: "🌙 Vibe: Powerful, mysterious and meditative.\n🧘 Mind: Encourages deep focus and inner stillness."
    },
    {
        name: "Raag Bhairav",
        time: "Early Morning",
        bg: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
        desc: "🌅 Vibe: Powerful morning awakening energy.\n🧘 Mind: Encourages focus, discipline and inner stillness."
    },
    {
        name: "Raag Lalit",
        time: "Early Dawn",
        bg: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
        desc: "🌅 Vibe: Delicate, peaceful and contemplative.\n🧘 Mind: Creates a calm transition into the morning."
    },
    {
        name: "Raag Bhoop",
        time: "Evening",
        bg: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
        desc: "✨ Vibe: Pure, simple and uplifting.\n🧘 Mind: Encourages tranquility and mental composure."
    },
    {
        name: "Raag Madhuwanti",
        time: "Afternoon / Evening",
        bg: "linear-gradient(135deg, #37ecba 0%, #72aff3 100%)",
        desc: "🌿 Vibe: Soft, warm and soothing.\n🧘 Mind: Creates gentle emotional comfort and peacefulness."
    },
    {
        name: "Raag Pilu",
        time: "Flexible",
        bg: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
        desc: "✨ Vibe: Sweet, expressive and emotionally warm.\n🧘 Mind: Brings gentle joy and lightheartedness."
    },
    {
        name: "Raag Shivranjani",
        time: "Evening / Night",
        bg: "linear-gradient(135deg, #ff0844 0%, #ffb199 100%)",
        desc: "🧘 Vibe: Melancholic yet soothing.\n✨ Mind: Encourages introspection and emotional expression."
    },
    {
        name: "Raag Jay Jaywanti",
        time: "Evening",
        bg: "linear-gradient(135deg, #b92b27 0%, #1565c0 100%)",
        desc: "✨ Vibe: Graceful, expressive and uplifting.\n🧘 Mind: Encourages emotional freshness and renewed energy."
    },
    {
        name: "Raag Khamaj",
        time: "Late Evening",
        bg: "linear-gradient(135deg, #a8ff78 0%, #78ffd6 100%)",
        desc: "🌿 Vibe: Sweet, romantic and relaxed.\n🧘 Mind: Induces soothing emotional ease."
    },
    {
        name: "Tanpura",
        time: "Continuous Drone",
        bg: "linear-gradient(135deg, #2b5876 0%, #4e4376 100%)",
        desc: "🎵 Vibe: Pure sustained tonal foundation.\n🧘 Mind: Ideal for meditation, riyaaz and deep listening."
    }
];


/* =========================================================
   STATE
   ========================================================= */

let player = null;
let youtubeReady = false;
let isPlaying = false;
let isMuted = false;
let preMuteVolume = DEFAULT_VOLUME;
let progressTimer = null;
let lastKnownIndex = 0;


/* =========================================================
   DOM
   ========================================================= */

const $ = (id) => document.getElementById(id);

const raagName = $("raag-name");
const raagTime = $("raag-time");
const raagDesc = $("raag-desc");

const playBtn = $("play");
const prevBtn = $("prev");
const nextBtn = $("next");

const progressContainer = $("progress-container");
const progressBar = $("progress");

const currentTimeEl = $("current-time");
const durationEl = $("duration");

const volumeSlider = $("volume-slider");
const muteBtn = $("mute-btn");

const searchInput = $("search-input");
const searchResults = $("search-results");

const playerContainer =
    document.querySelector(".player-container");

const appBody =
    document.getElementById("app-body") ||
    document.body;


/* =========================================================
   UI HELPERS
   ========================================================= */

function setRaag(index, animate = true) {

    if (!raagData[index]) return;

    lastKnownIndex = index;

    const data = raagData[index];

    if (raagName) {
        raagName.textContent = data.name;
    }

    if (raagTime) {
        raagTime.textContent = data.time;
    }

    if (raagDesc) {
        raagDesc.textContent = data.desc;
    }

    if (appBody) {
        appBody.style.background = data.bg;
    }

    if (animate) {

        [
            raagName,
            raagTime,
            raagDesc
        ].forEach((element) => {

            if (!element) return;

            element.classList.remove("fade-in");

            void element.offsetWidth;

            element.classList.add("fade-in");

        });

    }
}


function getIndex() {

    if (
        !player ||
        typeof player.getPlaylistIndex !== "function"
    ) {
        return lastKnownIndex;
    }

    const index = player.getPlaylistIndex();

    if (
        typeof index !== "number" ||
        index < 0 ||
        index >= raagData.length
    ) {
        return lastKnownIndex;
    }

    return index;
}


/* =========================================================
   INITIAL UI
   ========================================================= */

setRaag(0, false);


/* =========================================================
   LOAD YOUTUBE IFRAME API
   ========================================================= */

function loadYouTubeAPI() {

    /*
     * If API already exists, don't load it again.
     */

    if (window.YT && window.YT.Player) {

        createPlayer();

        return;
    }

    /*
     * YouTube calls this global function when loaded.
     */

    window.onYouTubeIframeAPIReady = function () {

        createPlayer();

    };

    /*
     * Prevent duplicate script injection.
     */

    if (
        document.querySelector(
            'script[src="https://www.youtube.com/iframe_api"]'
        )
    ) {
        return;
    }

    const script =
        document.createElement("script");

    script.src =
        "https://www.youtube.com/iframe_api";

    script.async = true;

    document.head.appendChild(script);
}


/* =========================================================
   CREATE PLAYER
   ========================================================= */

function createPlayer() {

    if (player) return;

    const container =
        document.getElementById("youtube-player");

    if (!container) {

        console.error(
            "RAAGLY: #youtube-player not found in HTML."
        );

        return;
    }

    try {

        player = new YT.Player(
            "youtube-player",
            {

                width: "1",
                height: "1",

                playerVars: {

                    listType: "playlist",
                    list: PLAYLIST_ID,

                    autoplay: 0,
                    controls: 0,

                    rel: 0,
                    modestbranding: 1,

                    playsinline: 1,

                    origin:
                        window.location.origin
                },

                events: {

                    onReady:
                        handlePlayerReady,

                    onStateChange:
                        handleStateChange,

                    onError:
                        handlePlayerError
                }

            }
        );

    } catch (error) {

        console.error(
            "RAAGLY: Could not create YouTube player.",
            error
        );

    }
}


/* =========================================================
   PLAYER READY
   ========================================================= */

function handlePlayerReady() {

    youtubeReady = true;

    try {

        player.setVolume(DEFAULT_VOLUME);

        if (volumeSlider) {
            volumeSlider.value =
                DEFAULT_VOLUME;
        }

    } catch (error) {

        console.warn(
            "RAAGLY: Volume setup failed.",
            error
        );

    }

    /*
     * Playlist data is sometimes available
     * slightly after onReady.
     */

    waitForPlaylist();

}


/* =========================================================
   WAIT FOR PLAYLIST
   ========================================================= */

function waitForPlaylist() {

    let attempts = 0;

    const checker =
        setInterval(() => {

            attempts++;

            if (
                player &&
                typeof player.getPlaylist === "function"
            ) {

                const playlist =
                    player.getPlaylist();

                if (
                    Array.isArray(playlist) &&
                    playlist.length > 0
                ) {

                    clearInterval(checker);

                    syncCurrentTrack();

                    return;
                }

            }

            /*
             * Even if YouTube doesn't expose
             * playlist immediately, don't leave
             * the UI stuck.
             */

            if (attempts >= 30) {

                clearInterval(checker);

                setRaag(0);

            }

        }, 300);

}


/* =========================================================
   SYNC CURRENT TRACK
   ========================================================= */

function syncCurrentTrack() {

    const index =
        getIndex();

    setRaag(index);

}


/* =========================================================
   YOUTUBE STATE
   ========================================================= */

function handleStateChange(event) {

    if (!window.YT) return;

    switch (event.data) {

        case YT.PlayerState.UNSTARTED:

            break;


        case YT.PlayerState.BUFFERING:

            syncCurrentTrack();

            break;


        case YT.PlayerState.PLAYING:

            isPlaying = true;

            syncCurrentTrack();

            updatePlayIcon(true);

            if (playerContainer) {
                playerContainer.classList.add("play");
            }

            startProgressTimer();

            break;


        case YT.PlayerState.PAUSED:

            isPlaying = false;

            updatePlayIcon(false);

            if (playerContainer) {
                playerContainer.classList.remove("play");
            }

            stopProgressTimer();

            updateProgress();

            break;


        case YT.PlayerState.ENDED:

            isPlaying = false;

            updatePlayIcon(false);

            if (playerContainer) {
                playerContainer.classList.remove("play");
            }

            stopProgressTimer();

            updateProgress();

            /*
             * IMPORTANT:
             *
             * Do NOT call nextVideo() here.
             * YouTube playlist normally advances itself.
             *
             * We only resync the UI.
             */

            setTimeout(() => {

                syncCurrentTrack();

            }, 600);

            break;

    }

}


/* =========================================================
   PLAY / PAUSE
   ========================================================= */

function togglePlay() {

    if (!youtubeReady || !player) {

        console.warn(
            "RAAGLY: YouTube player is not ready yet."
        );

        return;
    }

    try {

        if (isPlaying) {

            player.pauseVideo();

        } else {

            /*
             * On first click, explicitly select
             * the current playlist index.
             */

            player.playVideo();

        }

    } catch (error) {

        console.error(
            "RAAGLY: Play/Pause failed.",
            error
        );

    }
}


if (playBtn) {

    playBtn.addEventListener(
        "click",
        togglePlay
    );

}


/* =========================================================
   PLAY ICON
   ========================================================= */

function updatePlayIcon(playing) {

    if (!playBtn) return;

    const icon =
        playBtn.querySelector("i");

    if (!icon) return;

    icon.className =
        playing
            ? "fas fa-pause"
            : "fas fa-play";
}


/* =========================================================
   NEXT
   ========================================================= */

function nextTrack() {

    if (
        !youtubeReady ||
        !player ||
        typeof player.nextVideo !== "function"
    ) {
        return;
    }

    player.nextVideo();

    /*
     * YouTube updates playlist index asynchronously.
     */

    setTimeout(() => {

        syncCurrentTrack();

    }, 700);

}


if (nextBtn) {

    nextBtn.addEventListener(
        "click",
        nextTrack
    );

}


/* =========================================================
   PREVIOUS
   ========================================================= */

function previousTrack() {

    if (
        !youtubeReady ||
        !player ||
        typeof player.previousVideo !== "function"
    ) {
        return;
    }

    player.previousVideo();

    setTimeout(() => {

        syncCurrentTrack();

    }, 700);

}


if (prevBtn) {

    prevBtn.addEventListener(
        "click",
        previousTrack
    );

}


/* =========================================================
   SEEK BAR
   ========================================================= */

function seekFromClick(event) {

    if (
        !player ||
        typeof player.getDuration !== "function"
    ) {
        return;
    }

    const duration =
        player.getDuration();

    if (!duration) return;

    const rect =
        progressContainer.getBoundingClientRect();

    const x =
        event.clientX - rect.left;

    const percentage =
        Math.max(
            0,
            Math.min(
                1,
                x / rect.width
            )
        );

    player.seekTo(
        duration * percentage,
        true
    );

    updateProgress();
}


if (progressContainer) {

    progressContainer.addEventListener(
        "click",
        seekFromClick
    );

}


/* =========================================================
   PROGRESS
   ========================================================= */

function updateProgress() {

    if (
        !player ||
        typeof player.getCurrentTime !== "function" ||
        typeof player.getDuration !== "function"
    ) {
        return;
    }

    const current =
        Number(player.getCurrentTime()) || 0;

    const duration =
        Number(player.getDuration()) || 0;

    if (duration <= 0) {

        if (progressBar) {
            progressBar.style.width = "0%";
        }

        if (currentTimeEl) {
            currentTimeEl.textContent = "0:00";
        }

        if (durationEl) {
            durationEl.textContent = "0:00";
        }

        return;
    }

    const percentage =
        Math.max(
            0,
            Math.min(
                100,
                (current / duration) * 100
            )
        );

    if (progressBar) {
        progressBar.style.width =
            `${percentage}%`;
    }

    if (currentTimeEl) {
        currentTimeEl.textContent =
            formatTime(current);
    }

    if (durationEl) {
        durationEl.textContent =
            formatTime(duration);
    }

}


/* =========================================================
   PROGRESS TIMER
   ========================================================= */

function startProgressTimer() {

    stopProgressTimer();

    progressTimer =
        setInterval(
            updateProgress,
            250
        );

}


function stopProgressTimer() {

    if (progressTimer) {

        clearInterval(progressTimer);

        progressTimer = null;
    }

}


/* =========================================================
   FORMAT TIME
   ========================================================= */

function formatTime(seconds) {

    if (
        !Number.isFinite(seconds) ||
        seconds < 0
    ) {
        return "0:00";
    }

    const mins =
        Math.floor(seconds / 60);

    const secs =
        Math.floor(seconds % 60);

    return (
        `${mins}:` +
        `${secs < 10 ? "0" : ""}` +
        `${secs}`
    );
}


/* =========================================================
   VOLUME
   ========================================================= */

if (volumeSlider) {

    volumeSlider.addEventListener(
        "input",
        (event) => {

            const volume =
                Number(event.target.value);

            if (
                player &&
                typeof player.setVolume === "function"
            ) {

                player.unMute();
                player.setVolume(volume);

            }

            if (volume === 0) {

                isMuted = true;

                setVolumeIcon("mute");

            } else {

                isMuted = false;

                if (volume < 50) {
                    setVolumeIcon("low");
                } else {
                    setVolumeIcon("high");
                }

            }

        }
    );

}


/* =========================================================
   MUTE
   ========================================================= */

if (muteBtn) {

    muteBtn.addEventListener(
        "click",
        () => {

            if (!player) return;

            if (isMuted) {

                const volume =
                    Number(preMuteVolume) || DEFAULT_VOLUME;

                player.unMute();
                player.setVolume(volume);

                if (volumeSlider) {
                    volumeSlider.value =
                        volume;
                }

                isMuted = false;

                setVolumeIcon(
                    volume < 50
                        ? "low"
                        : "high"
                );

            } else {

                if (volumeSlider) {

                    preMuteVolume =
                        Number(
                            volumeSlider.value
                        ) || DEFAULT_VOLUME;

                }

                player.mute();

                if (volumeSlider) {
                    volumeSlider.value = 0;
                }

                isMuted = true;

                setVolumeIcon("mute");

            }

        }
    );

}


/* =========================================================
   VOLUME ICON
   ========================================================= */

function setVolumeIcon(type) {

    if (!muteBtn) return;

    const icon =
        muteBtn.querySelector("i");

    if (!icon) return;

    if (type === "mute") {

        icon.className =
            "fas fa-volume-mute";

    } else if (type === "low") {

        icon.className =
            "fas fa-volume-down";

    } else {

        icon.className =
            "fas fa-volume-up";

    }

}


/* =========================================================
   SEARCH
   ========================================================= */

function searchRaags(query) {

    if (!searchResults) return;

    searchResults.innerHTML = "";

    if (!query) {

        searchResults.style.display =
            "none";

        return;
    }

    const results =
        raagData
            .map((raag, index) => ({
                ...raag,
                index
            }))
            .filter((raag) => {

                const text =
                    [
                        raag.name,
                        raag.time,
                        raag.desc
                    ]
                    .join(" ")
                    .toLowerCase();

                return text.includes(query);

            });


    if (!results.length) {

        const li =
            document.createElement("li");

        li.textContent =
            "No matching Raag found";

        li.style.cursor =
            "default";

        li.style.opacity =
            "0.65";

        searchResults.appendChild(li);

    } else {

        results.forEach((raag) => {

            const li =
                document.createElement("li");

            const strong =
                document.createElement("strong");

            strong.textContent =
                raag.name;

            const info =
                document.createElement("span");

            info.textContent =
                `${raag.time} • ${raag.desc.split("\n")[0]}`;

            info.style.display =
                "block";

            info.style.fontSize =
                "11px";

            info.style.opacity =
                "0.7";

            li.appendChild(strong);
            li.appendChild(info);

            li.addEventListener(
                "click",
                () => {

                    playRaag(raag.index);

                    if (searchInput) {
                        searchInput.value = "";
                    }

                    searchResults.style.display =
                        "none";

                }
            );

            searchResults.appendChild(li);

        });

    }

    searchResults.style.display =
        "block";
}


if (searchInput) {

    searchInput.addEventListener(
        "input",
        (event) => {

            const query =
                event.target.value
                    .toLowerCase()
                    .trim();

            searchRaags(query);

        }
    );

}


/* =========================================================
   SEARCH CLOSE
   ========================================================= */

document.addEventListener(
    "click",
    (event) => {

        if (
            searchInput &&
            searchResults &&
            !searchInput.contains(event.target) &&
            !searchResults.contains(event.target)
        ) {

            searchResults.style.display =
                "none";

        }

    }
);


/* =========================================================
   PLAY SPECIFIC RAAG
   ========================================================= */

function playRaag(index) {

    if (
        !youtubeReady ||
        !player ||
        typeof player.playVideoAt !== "function"
    ) {
        return;
    }

    if (
        index < 0 ||
        index >= raagData.length
    ) {
        return;
    }

    /*
     * Update UI first so the user immediately
     * sees the selected Raag.
     */

    setRaag(index);

    lastKnownIndex = index;

    try {

        player.playVideoAt(index);

    } catch (error) {

        console.error(
            "RAAGLY: Could not play selected Raag.",
            error
        );

    }

    setTimeout(() => {

        syncCurrentTrack();

    }, 700);

}


/* =========================================================
   YOUTUBE ERRORS
   ========================================================= */

function handlePlayerError(event) {

    console.error(
        "RAAGLY YouTube Error:",
        event.data
    );

    /*
     * Don't break the whole player.
     */

    updatePlayIcon(false);

}


/* =========================================================
   KEYBOARD CONTROLS
   ========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        /*
         * Don't interfere with search input.
         */

        if (
            event.target &&
            (
                event.target.tagName === "INPUT" ||
                event.target.tagName === "TEXTAREA"
            )
        ) {
            return;
        }


        /* Space = Play / Pause */

        if (event.code === "Space") {

            event.preventDefault();

            togglePlay();

        }


        /* Arrow Right = +5 sec */

        if (event.code === "ArrowRight") {

            if (
                player &&
                typeof player.getCurrentTime === "function" &&
                typeof player.seekTo === "function"
            ) {

                const current =
                    player.getCurrentTime();

                player.seekTo(
                    current + 5,
                    true
                );

            }

        }


        /* Arrow Left = -5 sec */

        if (event.code === "ArrowLeft") {

            if (
                player &&
                typeof player.getCurrentTime === "function" &&
                typeof player.seekTo === "function"
            ) {

                const current =
                    player.getCurrentTime();

                player.seekTo(
                    Math.max(0, current - 5),
                    true
                );

            }

        }

    }
);


/* =========================================================
   START
   ========================================================= */

loadYouTubeAPI();


/* =========================================================
   DEBUG INFO
   ========================================================= */

console.log(
    `RAAGLY loaded — ${raagData.length} tracks mapped.`
);

console.log(
    `Playlist ID: ${PLAYLIST_ID}`
);
```
