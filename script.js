```js
/* =========================================================
   RAAGLY — SCRIPT.JS
   Complete Player + Search + Library + Filters
   HTML/CSS compatible
   YouTube Playlist: PLJRipbfj__b0
   ========================================================= */

"use strict";

/* =========================================================
   CONFIG
   ========================================================= */

const PLAYLIST_ID = "PLJRipbfj__b0";
const DEFAULT_VOLUME = 80;

/*
 * EXACT YOUTUBE PLAYLIST ORDER
 */
const raagData = [
    {
        name: "Raag Bhimpalasi",
        time: "Afternoon",
        category: "Mind",
        bg: "linear-gradient(135deg,#667eea,#764ba2)",
        desc: "🌿 Warm, emotional and soothing.\n🧘 Encourages relaxation, introspection and emotional balance."
    },
    {
        name: "Raag Darbari Kanada",
        time: "Late Night",
        category: "Mind",
        bg: "linear-gradient(135deg,#09203f,#537895)",
        desc: "🌙 Deep, majestic and contemplative.\n🧘 Creates a calm and introspective atmosphere."
    },
    {
        name: "Raag Shuddh Sarang",
        time: "Afternoon",
        category: "Health",
        bg: "linear-gradient(135deg,#56ccf2,#2f80ed)",
        desc: "☀️ Bright, refreshing and graceful.\n🧘 Encourages clarity and emotional freshness."
    },
    {
        name: "Raag Komal Rishabh Asavari",
        time: "Morning",
        category: "Mind",
        bg: "linear-gradient(135deg,#8360c3,#2ebf91)",
        desc: "🌿 Gentle and reflective.\n🧘 Supports quiet contemplation and emotional release."
    },
    {
        name: "Raag Yaman",
        time: "Evening",
        category: "Harmony",
        bg: "linear-gradient(135deg,#141e30,#243b55)",
        desc: "✨ Serene, graceful and expansive.\n🧘 Encourages peace, openness and relaxation."
    },
    {
        name: "Raag Hamsadhwani",
        time: "Evening",
        category: "Mind",
        bg: "linear-gradient(135deg,#ff9a9e,#fecfef)",
        desc: "✨ Bright, joyful and uplifting.\n🧘 Creates a feeling of inner stillness and lightness."
    },
    {
        name: "Raag Bhairavi",
        time: "Morning / Closing",
        category: "Mind",
        bg: "linear-gradient(135deg,#30cfd0,#330867)",
        desc: "🌿 Devotional, emotional and deeply expressive.\n🧘 Encourages reflection, acceptance and peaceful closure."
    },
    {
        name: "Raag Asavari",
        time: "Late Morning",
        category: "Health",
        bg: "linear-gradient(135deg,#e0c3fc,#8ec5fc)",
        desc: "🌿 Soft and introspective.\n🧘 Encourages relaxation and emotional balance."
    },
    {
        name: "Raag Desi Todi",
        time: "Late Morning",
        category: "Mind",
        bg: "linear-gradient(135deg,#fbc2eb,#a6c1ee)",
        desc: "🧘 Deeply contemplative and expressive.\n✨ Encourages stillness and focused listening."
    },
    {
        name: "Raag Kalyan",
        time: "Evening",
        category: "Harmony",
        bg: "linear-gradient(135deg,#ff0844,#ffb199)",
        desc: "✨ Expansive, graceful and uplifting.\n🧘 Creates optimism and emotional openness."
    },
    {
        name: "Raag Poorvi",
        time: "Evening",
        category: "Career",
        bg: "linear-gradient(135deg,#f12711,#f5af19)",
        desc: "🌅 Rich, serious and contemplative.\n🧘 Encourages concentration and inner awareness."
    },
    {
        name: "Raag Nat Bhairav",
        time: "Morning",
        category: "Career",
        bg: "linear-gradient(135deg,#f12711,#f5af19)",
        desc: "🌅 Strong and grounded morning energy.\n🧘 Encourages clarity and emotional stability."
    },
    {
        name: "Raag Vrindavani Sarang",
        time: "Afternoon",
        category: "Harmony",
        bg: "linear-gradient(135deg,#13547a,#80d0c7)",
        desc: "🌿 Refreshing, peaceful and affectionate.\n🧘 Creates a light and joyful atmosphere."
    },
    {
        name: "Raag Shuddh Kalyan",
        time: "Evening",
        category: "Mind",
        bg: "linear-gradient(135deg,#89f7fe,#66a6ff)",
        desc: "✨ Serene and luminous.\n🧘 Encourages peace, clarity and gentle positivity."
    },
    {
        name: "Raag Jaunpuri",
        time: "Late Morning",
        category: "Health",
        bg: "linear-gradient(135deg,#4facfe,#00f2fe)",
        desc: "🌿 Reflective and expressive.\n🧘 Supports emotional release and calm concentration."
    },
    {
        name: "Raag Kirwani",
        time: "Evening",
        category: "Mind",
        bg: "linear-gradient(135deg,#43e97b,#38f9d7)",
        desc: "🧘 Emotional, peaceful and meditative.\n✨ Creates a soothing space for deep listening."
    },
    {
        name: "Raag Neelambari",
        time: "Night",
        category: "Mind",
        bg: "linear-gradient(135deg,#fa709a,#fee140)",
        desc: "🌙 Gentle and lullaby-like.\n🧘 Encourages relaxation and peaceful nighttime listening."
    },
    {
        name: "Raag Malkauns",
        time: "Late Night",
        category: "Mind",
        bg: "linear-gradient(135deg,#200122,#6f0000)",
        desc: "🌙 Powerful, mysterious and meditative.\n🧘 Encourages deep focus and inner stillness."
    },
    {
        name: "Raag Bhairav",
        time: "Early Morning",
        category: "Health",
        bg: "linear-gradient(135deg,#ff9a9e,#fecfef)",
        desc: "🌅 Powerful morning awakening energy.\n🧘 Encourages focus, discipline and inner stillness."
    },
    {
        name: "Raag Lalit",
        time: "Early Dawn",
        category: "Mind",
        bg: "linear-gradient(135deg,#ffecd2,#fcb69f)",
        desc: "🌅 Delicate, peaceful and contemplative.\n🧘 Creates a calm transition into the morning."
    },
    {
        name: "Raag Bhoop",
        time: "Evening",
        category: "Harmony",
        bg: "linear-gradient(135deg,#84fab0,#8fd3f4)",
        desc: "✨ Pure, simple and uplifting.\n🧘 Encourages tranquility and mental composure."
    },
    {
        name: "Raag Madhuwanti",
        time: "Afternoon / Evening",
        category: "Mind",
        bg: "linear-gradient(135deg,#37ecba,#72aff3)",
        desc: "🌿 Soft, warm and soothing.\n🧘 Creates gentle emotional comfort and peacefulness."
    },
    {
        name: "Raag Pilu",
        time: "Flexible",
        category: "Harmony",
        bg: "linear-gradient(135deg,#f6d365,#fda085)",
        desc: "✨ Sweet, expressive and emotionally warm.\n🧘 Brings gentle joy and lightheartedness."
    },
    {
        name: "Raag Shivaranjani",
        time: "Evening / Night",
        category: "Mind",
        bg: "linear-gradient(135deg,#ff0844,#ffb199)",
        desc: "🧘 Melancholic yet soothing.\n✨ Encourages introspection and emotional expression."
    },
    {
        name: "Raag Jaijaiwanti",
        time: "Evening",
        category: "Mind",
        bg: "linear-gradient(135deg,#b92b27,#1565c0)",
        desc: "✨ Graceful, expressive and uplifting.\n🧘 Encourages emotional freshness and renewed energy."
    },
    {
        name: "Raag Khamaj",
        time: "Late Evening",
        category: "Harmony",
        bg: "linear-gradient(135deg,#a8ff78,#78ffd6)",
        desc: "🌿 Sweet, romantic and relaxed.\n🧘 Induces soothing emotional ease."
    },
    {
        name: "Tanpura",
        time: "Continuous Drone",
        category: "Health",
        bg: "linear-gradient(135deg,#2b5876,#4e4376)",
        desc: "🎵 Pure sustained tonal foundation.\n🧘 Ideal for meditation, riyaaz and deep listening."
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
let currentIndex = 0;
let activeFilter = "All";


/* =========================================================
   DOM HELPERS
   ========================================================= */

const $ = (id) => document.getElementById(id);

const body = $("app-body") || document.body;

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


/* =========================================================
   RAAG UI
   ========================================================= */

function showRaag(index, animate = true) {

    if (!raagData[index]) return;

    currentIndex = index;

    const data = raagData[index];

    if (raagName)
        raagName.textContent = data.name;

    if (raagTime)
        raagTime.textContent = data.time;

    if (raagDesc)
        raagDesc.textContent = data.desc;

    if (body)
        body.style.background = data.bg;

    if (animate) {

        [raagName, raagTime, raagDesc].forEach((el) => {

            if (!el) return;

            el.classList.remove("fade-in");

            void el.offsetWidth;

            el.classList.add("fade-in");

        });

    }

    updateTrackCounter(index);
}


/* =========================================================
   TRACK COUNTER
   ========================================================= */

function updateTrackCounter(index) {

    /*
     * Supports several possible counter IDs/classes
     * without changing HTML.
     */

    const possibleCounters = [
        "track-counter",
        "raag-counter",
        "track-number",
        "current-track",
        "playlist-count"
    ];

    possibleCounters.forEach((id) => {

        const el = $(id);

        if (el)
            el.textContent =
                `${String(index + 1).padStart(2, "0")} / ${raagData.length}`;

    });

    document.querySelectorAll(
        "[data-track-counter]"
    ).forEach((el) => {

        el.textContent =
            `${String(index + 1).padStart(2, "0")} / ${raagData.length}`;

    });
}


/* =========================================================
   SYNC YOUTUBE INDEX
   ========================================================= */

function getYouTubeIndex() {

    if (
        !player ||
        typeof player.getPlaylistIndex !== "function"
    ) {
        return currentIndex;
    }

    const index = player.getPlaylistIndex();

    if (
        typeof index === "number" &&
        index >= 0 &&
        index < raagData.length
    ) {
        return index;
    }

    return currentIndex;
}


function syncTrack() {

    const index = getYouTubeIndex();

    showRaag(index);

    updateLibraryActiveState(index);
}


/* =========================================================
   PLAYLIST LIBRARY
   ========================================================= */

function findLibraryContainer() {

    const selectors = [
        "#raag-list",
        "#raag-library",
        ".raag-list",
        ".raag-library",
        ".library-list",
        ".track-list",
        "[data-raag-list]"
    ];

    for (const selector of selectors) {

        const element =
            document.querySelector(selector);

        if (element)
            return element;

    }

    return null;
}


function createLibraryIfPossible() {

    const container =
        findLibraryContainer();

    if (!container)
        return;

    /*
     * Only populate an empty container.
     * This prevents destroying existing HTML.
     */

    if (container.children.length > 0)
        return;

    raagData.forEach((raag, index) => {

        const item =
            document.createElement("button");

        item.type = "button";

        item.className =
            "raag-library-item";

        item.dataset.index = index;

        item.innerHTML = `
            <span class="raag-library-number">
                ${String(index + 1).padStart(2, "0")}
            </span>
            <span class="raag-library-info">
                <strong>${escapeHTML(raag.name)}</strong>
                <small>${escapeHTML(raag.time)}</small>
            </span>
        `;

        item.addEventListener(
            "click",
            () => playRaag(index)
        );

        container.appendChild(item);

    });

}


/* =========================================================
   LIBRARY ACTIVE STATE
   ========================================================= */

function updateLibraryActiveState(index) {

    document.querySelectorAll(
        "[data-index]"
    ).forEach((el) => {

        const value =
            Number(el.dataset.index);

        if (value === index)
            el.classList.add("active");
        else
            el.classList.remove("active");

    });

}


/* =========================================================
   FILTERS
   ========================================================= */

function setupFilters() {

    const filterElements =
        document.querySelectorAll(
            "[data-filter]"
        );

    filterElements.forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                const filter =
                    button.dataset.filter;

                activeFilter =
                    filter || "All";

                filterElements.forEach(
                    (item) =>
                        item.classList.remove("active")
                );

                button.classList.add("active");

                applyFilter(activeFilter);

            }
        );

    });

}


function applyFilter(filter) {

    const items =
        document.querySelectorAll(
            "[data-index]"
        );

    if (!items.length)
        return;

    items.forEach((item) => {

        const index =
            Number(item.dataset.index);

        const raag =
            raagData[index];

        if (!raag)
            return;

        const visible =
            filter === "All" ||
            raag.category.toLowerCase() ===
            filter.toLowerCase();

        item.style.display =
            visible ? "" : "none";

    });

}


/* =========================================================
   PLAY SPECIFIC RAAG
   ========================================================= */

function playRaag(index) {

    if (
        index < 0 ||
        index >= raagData.length
    ) {
        return;
    }

    currentIndex = index;

    showRaag(index);

    if (
        !youtubeReady ||
        !player ||
        typeof player.playVideoAt !== "function"
    ) {
        return;
    }

    try {

        player.playVideoAt(index);

    } catch (error) {

        console.error(
            "RAAGLY: Unable to play selected Raag.",
            error
        );

    }

    updateLibraryActiveState(index);
}


/* =========================================================
   PLAY / PAUSE
   ========================================================= */

function togglePlay() {

    if (
        !youtubeReady ||
        !player
    ) {
        console.warn(
            "RAAGLY: Player is still loading."
        );
        return;
    }

    try {

        if (isPlaying) {
            player.pauseVideo();
        } else {
            player.playVideo();
        }

    } catch (error) {

        console.error(
            "RAAGLY: Play failed.",
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
   NEXT / PREVIOUS
   ========================================================= */

function nextTrack() {

    if (
        !player ||
        !youtubeReady
    ) return;

    try {

        player.nextVideo();

        setTimeout(syncTrack, 500);

    } catch (error) {

        console.error(error);

    }

}


function previousTrack() {

    if (
        !player ||
        !youtubeReady
    ) return;

    try {

        player.previousVideo();

        setTimeout(syncTrack, 500);

    } catch (error) {

        console.error(error);

    }

}


if (nextBtn)
    nextBtn.addEventListener("click", nextTrack);

if (prevBtn)
    prevBtn.addEventListener("click", previousTrack);


/* =========================================================
   SEEK
   ========================================================= */

function seek(event) {

    if (
        !player ||
        !progressContainer
    ) return;

    const duration =
        Number(player.getDuration()) || 0;

    if (!duration)
        return;

    const rect =
        progressContainer.getBoundingClientRect();

    const position =
        (event.clientX - rect.left) /
        rect.width;

    const percentage =
        Math.max(
            0,
            Math.min(1, position)
        );

    player.seekTo(
        duration * percentage,
        true
    );

}


if (progressContainer) {

    progressContainer.addEventListener(
        "click",
        seek
    );

}


/* =========================================================
   PROGRESS
   ========================================================= */

function formatTime(seconds) {

    if (
        !Number.isFinite(seconds) ||
        seconds < 0
    )
        return "0:00";

    const minutes =
        Math.floor(seconds / 60);

    const secs =
        Math.floor(seconds % 60);

    return `${minutes}:${secs
        .toString()
        .padStart(2, "0")}`;
}


function updateProgress() {

    if (
        !player ||
        typeof player.getCurrentTime !==
        "function"
    ) return;

    const current =
        Number(player.getCurrentTime()) || 0;

    const duration =
        Number(player.getDuration()) || 0;

    if (duration <= 0)
        return;

    const percentage =
        Math.min(
            100,
            Math.max(
                0,
                current / duration * 100
            )
        );

    if (progressBar)
        progressBar.style.width =
            `${percentage}%`;

    if (currentTimeEl)
        currentTimeEl.textContent =
            formatTime(current);

    if (durationEl)
        durationEl.textContent =
            formatTime(duration);
}


function startProgress() {

    stopProgress();

    progressTimer =
        setInterval(
            updateProgress,
            250
        );

}


function stopProgress() {

    if (progressTimer) {

        clearInterval(progressTimer);

        progressTimer = null;

    }

}


/* =========================================================
   VOLUME
   ========================================================= */

function setVolumeIcon(value) {

    if (!muteBtn)
        return;

    const icon =
        muteBtn.querySelector("i");

    if (!icon)
        return;

    if (value === 0)
        icon.className =
            "fas fa-volume-mute";

    else if (value < 50)
        icon.className =
            "fas fa-volume-down";

    else
        icon.className =
            "fas fa-volume-up";
}


if (volumeSlider) {

    volumeSlider.addEventListener(
        "input",
        (event) => {

            const volume =
                Number(event.target.value);

            if (player) {

                player.unMute();

                player.setVolume(
                    volume
                );

            }

            if (volume > 0)
                preMuteVolume = volume;

            isMuted =
                volume === 0;

            setVolumeIcon(volume);

        }
    );

}


if (muteBtn) {

    muteBtn.addEventListener(
        "click",
        () => {

            if (!player)
                return;

            if (isMuted) {

                const volume =
                    preMuteVolume ||
                    DEFAULT_VOLUME;

                player.unMute();
                player.setVolume(volume);

                if (volumeSlider)
                    volumeSlider.value =
                        volume;

                isMuted = false;

                setVolumeIcon(volume);

            } else {

                if (volumeSlider)
                    preMuteVolume =
                        Number(
                            volumeSlider.value
                        ) || DEFAULT_VOLUME;

                player.mute();

                if (volumeSlider)
                    volumeSlider.value = 0;

                isMuted = true;

                setVolumeIcon(0);

            }

        }
    );

}


/* =========================================================
   SEARCH
   ========================================================= */

function searchRaags(query) {

    if (!searchResults)
        return;

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

                const searchable =
                    `${raag.name}
                     ${raag.time}
                     ${raag.category}
                     ${raag.desc}`
                    .toLowerCase();

                return searchable.includes(query);

            });


    if (!results.length) {

        const item =
            document.createElement("li");

        item.textContent =
            "No matching Raag found";

        item.style.cursor =
            "default";

        searchResults.appendChild(item);

    } else {

        results.forEach((raag) => {

            const item =
                document.createElement("li");

            const title =
                document.createElement("strong");

            title.textContent =
                raag.name;

            const info =
                document.createElement("span");

            info.textContent =
                `${raag.time} • ${raag.category}`;

            info.style.display =
                "block";

            item.appendChild(title);
            item.appendChild(info);

            item.addEventListener(
                "click",
                () => {

                    playRaag(
                        raag.index
                    );

                    searchInput.value = "";

                    searchResults.style.display =
                        "none";

                }
            );

            searchResults.appendChild(item);

        });

    }

    searchResults.style.display =
        "block";
}


if (searchInput) {

    searchInput.addEventListener(
        "input",
        (event) => {

            searchRaags(
                event.target.value
                    .toLowerCase()
                    .trim()
            );

        }
    );

}


/* =========================================================
   CLOSE SEARCH
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
   YOUTUBE PLAYER
   ========================================================= */

function createYouTubePlayer() {

    if (player)
        return;

    const target =
        document.getElementById(
            "youtube-player"
        );

    if (!target)
        return;

    try {

        player =
            new YT.Player(
                "youtube-player",
                {

                    height: "1",
                    width: "1",

                    playerVars: {

                        listType: "playlist",

                        list: PLAYLIST_ID,

                        autoplay: 0,

                        controls: 0,

                        rel: 0,

                        playsinline: 1

                    },

                    events: {

                        onReady:
                            onPlayerReady,

                        onStateChange:
                            onPlayerStateChange,

                        onError:
                            onPlayerError

                    }

                }
            );

    } catch (error) {

        console.error(
            "RAAGLY player error:",
            error
        );

    }
}


/* =========================================================
   YOUTUBE READY
   ========================================================= */

function onPlayerReady() {

    youtubeReady = true;

    if (player) {

        player.setVolume(
            DEFAULT_VOLUME
        );

    }

    if (volumeSlider)
        volumeSlider.value =
            DEFAULT_VOLUME;

    /*
     * Let YouTube populate playlist first.
     */

    setTimeout(
        syncTrack,
        1000
    );

}


/* =========================================================
   YOUTUBE STATE
   ========================================================= */

function onPlayerStateChange(event) {

    if (!window.YT)
        return;

    if (
        event.data ===
        YT.PlayerState.PLAYING
    ) {

        isPlaying = true;

        updatePlayIcon(true);

        if (playerContainer)
            playerContainer.classList.add(
                "play"
            );

        syncTrack();

        startProgress();

    }

    else if (
        event.data ===
        YT.PlayerState.PAUSED
    ) {

        isPlaying = false;

        updatePlayIcon(false);

        if (playerContainer)
            playerContainer.classList.remove(
                "play"
            );

        stopProgress();

        updateProgress();

    }

    else if (
        event.data ===
        YT.PlayerState.BUFFERING
    ) {

        syncTrack();

    }

    else if (
        event.data ===
        YT.PlayerState.ENDED
    ) {

        isPlaying = false;

        updatePlayIcon(false);

        if (playerContainer)
            playerContainer.classList.remove(
                "play"
            );

        stopProgress();

        /*
         * Do NOT manually call nextVideo().
         * YouTube playlist handles progression.
         */

        setTimeout(
            syncTrack,
            700
        );

    }

}


/* =========================================================
   YOUTUBE ERROR
   ========================================================= */

function onPlayerError(event) {

    console.error(
        "RAAGLY YouTube Error:",
        event.data
    );

    isPlaying = false;

    updatePlayIcon(false);

}


/* =========================================================
   LOAD YOUTUBE API
   ========================================================= */

function loadYouTubeAPI() {

    if (
        window.YT &&
        window.YT.Player
    ) {

        createYouTubePlayer();

        return;

    }

    window.onYouTubeIframeAPIReady =
        createYouTubePlayer;

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
   KEYBOARD SHORTCUTS
   ========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.target &&
            (
                event.target.tagName ===
                "INPUT" ||
                event.target.tagName ===
                "TEXTAREA"
            )
        ) {
            return;
        }

        if (
            event.code === "Space"
        ) {

            event.preventDefault();

            togglePlay();

        }

        if (
            event.code === "ArrowRight" &&
            player
        ) {

            const current =
                player.getCurrentTime();

            player.seekTo(
                current + 5,
                true
            );

        }

        if (
            event.code === "ArrowLeft" &&
            player
        ) {

            const current =
                player.getCurrentTime();

            player.seekTo(
                Math.max(
                    0,
                    current - 5
                ),
                true
            );

        }

        if (
            event.code === "ArrowDown" &&
            player
        ) {

            nextTrack();

        }

        if (
            event.code === "ArrowUp" &&
            player
        ) {

            previousTrack();

        }

    }
);


/* =========================================================
   SAFE HTML
   ========================================================= */

function escapeHTML(value) {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


/* =========================================================
   INITIALIZE
   ========================================================= */

showRaag(0, false);

setupFilters();

createLibraryIfPossible();

updateTrackCounter(0);

loadYouTubeAPI();


/* =========================================================
   DEBUG
   ========================================================= */

console.log(
    `RAAGLY loaded — ${raagData.length} tracks`
);

console.log(
    `Playlist: ${PLAYLIST_ID}`
);
```
