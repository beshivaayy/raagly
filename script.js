```js
/* =========================================================
   RAAGLY — SCRIPT.JS
   Stable Player + Library + Search + Filters
   HTML/CSS compatible
   YouTube Playlist: PLJRipbfj__b0
   ========================================================= */

"use strict";

/* =========================================================
   CONFIG
   ========================================================= */

const PLAYLIST_ID = "PLJRipbfj__b0";
const DEFAULT_VOLUME = 80;
const TOTAL_TRACKS = 27;


/* =========================================================
   EXACT PLAYLIST ORDER
   ========================================================= */

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
   DOM
   ========================================================= */

const $ = (id) => document.getElementById(id);

const body =
    $("app-body") ||
    document.body;

const raagName = $("raag-name");
const raagTime = $("raag-time");
const raagDesc = $("raag-desc");

const playBtn = $("play");
const prevBtn = $("prev");
const nextBtn = $("next");

const progressContainer =
    $("progress-container");

const progressBar =
    $("progress");

const currentTimeEl =
    $("current-time");

const durationEl =
    $("duration");

const volumeSlider =
    $("volume-slider");

const muteBtn =
    $("mute-btn");

const searchInput =
    $("search-input");

const searchResults =
    $("search-results");

const playerContainer =
    document.querySelector(".player-container");


/* =========================================================
   SAFE HTML ESCAPE
   ========================================================= */

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================================================
   SHOW RAAG
   ========================================================= */

function showRaag(index, animate = true) {

    if (!raagData[index])
        return;

    currentIndex = index;

    const data =
        raagData[index];

    if (raagName)
        raagName.textContent =
            data.name;

    if (raagTime)
        raagTime.textContent =
            data.time;

    if (raagDesc)
        raagDesc.textContent =
            data.desc;

    if (body)
        body.style.background =
            data.bg;

    if (animate) {

        [
            raagName,
            raagTime,
            raagDesc
        ].forEach((element) => {

            if (!element)
                return;

            element.classList.remove(
                "fade-in"
            );

            void element.offsetWidth;

            element.classList.add(
                "fade-in"
            );

        });

    }

    updateTrackCounter(index);
    updateLibraryActiveState(index);
}


/* =========================================================
   TRACK COUNTER
   ========================================================= */

function updateTrackCounter(index) {

    const text =
        `${String(index + 1).padStart(2, "0")} / ${TOTAL_TRACKS}`;

    [
        "track-counter",
        "raag-counter",
        "track-number",
        "current-track",
        "playlist-count"
    ].forEach((id) => {

        const el = $(id);

        if (el)
            el.textContent = text;

    });

    document
        .querySelectorAll(
            "[data-track-counter]"
        )
        .forEach((el) => {

            el.textContent = text;

        });
}


/* =========================================================
   YOUTUBE INDEX
   ========================================================= */

function getYouTubeIndex() {

    if (
        !player ||
        typeof player.getPlaylistIndex !==
        "function"
    ) {
        return currentIndex;
    }

    const index =
        player.getPlaylistIndex();

    if (
        typeof index === "number" &&
        index >= 0 &&
        index < TOTAL_TRACKS
    ) {
        return index;
    }

    return currentIndex;
}


/* =========================================================
   SYNC TRACK
   ========================================================= */

function syncTrack() {

    const index =
        getYouTubeIndex();

    showRaag(index);
}


/* =========================================================
   LIBRARY CONTAINER
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
            document.querySelector(
                selector
            );

        if (element)
            return element;

    }

    return null;
}


/* =========================================================
   BUILD LIBRARY
   ========================================================= */

function createLibrary() {

    const container =
        findLibraryContainer();

    if (!container)
        return;

    /*
     * Do not destroy existing HTML.
     */

    if (container.children.length > 0) {

        /*
         * Existing library items may already
         * be present in the HTML.
         * Attach click handlers to them.
         */

        attachExistingLibraryItems();

        return;
    }

    raagData.forEach(
        (raag, index) => {

            const item =
                document.createElement(
                    "button"
                );

            item.type = "button";

            item.className =
                "raag-library-item";

            item.dataset.index =
                index;

            item.innerHTML = `
                <span class="raag-library-number">
                    ${String(index + 1).padStart(2, "0")}
                </span>

                <span class="raag-library-info">
                    <strong>
                        ${escapeHTML(raag.name)}
                    </strong>

                    <small>
                        ${escapeHTML(raag.time)}
                    </small>
                </span>
            `;

            item.addEventListener(
                "click",
                () => playRaag(index)
            );

            container.appendChild(item);

        }
    );
}


/* =========================================================
   EXISTING LIBRARY ITEMS
   ========================================================= */

function attachExistingLibraryItems() {

    document
        .querySelectorAll(
            "[data-index]"
        )
        .forEach((item) => {

            if (
                item.dataset.raaglyBound ===
                "true"
            ) {
                return;
            }

            const index =
                Number(item.dataset.index);

            if (
                !Number.isInteger(index) ||
                !raagData[index]
            ) {
                return;
            }

            item.dataset.raaglyBound =
                "true";

            item.addEventListener(
                "click",
                () => playRaag(index)
            );

        });
}


/* =========================================================
   LIBRARY ACTIVE STATE
   ========================================================= */

function updateLibraryActiveState(index) {

    document
        .querySelectorAll(
            "[data-index]"
        )
        .forEach((item) => {

            const itemIndex =
                Number(item.dataset.index);

            item.classList.toggle(
                "active",
                itemIndex === index
            );

        });
}


/* =========================================================
   FILTERS
   ========================================================= */

function setupFilters() {

    document
        .querySelectorAll(
            "[data-filter]"
        )
        .forEach((button) => {

            if (
                button.dataset.raaglyFilterBound ===
                "true"
            ) {
                return;
            }

            button.dataset.raaglyFilterBound =
                "true";

            button.addEventListener(
                "click",
                () => {

                    activeFilter =
                        button.dataset.filter ||
                        "All";

                    document
                        .querySelectorAll(
                            "[data-filter]"
                        )
                        .forEach(
                            (item) =>
                                item.classList.remove(
                                    "active"
                                )
                        );

                    button.classList.add(
                        "active"
                    );

                    applyFilter(
                        activeFilter
                    );

                }
            );

        });
}


function applyFilter(filter) {

    document
        .querySelectorAll(
            "[data-index]"
        )
        .forEach((item) => {

            const index =
                Number(item.dataset.index);

            const raag =
                raagData[index];

            if (!raag)
                return;

            const visible =
                filter === "All" ||
                raag.category
                    .toLowerCase() ===
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
        index >= TOTAL_TRACKS
    ) {
        return;
    }

    currentIndex = index;

    showRaag(index);

    if (
        !youtubeReady ||
        !player
    ) {
        console.warn(
            "RAAGLY: YouTube player not ready."
        );

        return;
    }

    try {

        /*
         * This is the important part:
         * playVideoAt() selects the corresponding
         * item from the YouTube playlist.
         */

        player.playVideoAt(index);

        isPlaying = true;

        updatePlayIcon(true);

    } catch (error) {

        console.error(
            "RAAGLY: Unable to play track.",
            error
        );

    }
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
            "RAAGLY: Player still loading."
        );

        return;
    }

    try {

        if (isPlaying) {

            player.pauseVideo();

        } else {

            /*
             * Explicitly select current track
             * before playing.
             */

            player.playVideoAt(
                currentIndex
            );

        }

    } catch (error) {

        console.error(
            "RAAGLY: Play/pause failed.",
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

    if (!playBtn)
        return;

    const icon =
        playBtn.querySelector("i");

    if (!icon)
        return;

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
        !player
    ) {
        return;
    }

    try {

        player.nextVideo();

        setTimeout(
            syncTrack,
            600
        );

    } catch (error) {

        console.error(
            "RAAGLY: Next failed.",
            error
        );

    }
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
        !player
    ) {
        return;
    }

    try {

        player.previousVideo();

        setTimeout(
            syncTrack,
            600
        );

    } catch (error) {

        console.error(
            "RAAGLY: Previous failed.",
            error
        );

    }
}


if (prevBtn) {

    prevBtn.addEventListener(
        "click",
        previousTrack
    );

}


/* =========================================================
   SEEK
   ========================================================= */

function seek(event) {

    if (
        !player ||
        !progressContainer
    ) {
        return;
    }

    const duration =
        Number(
            player.getDuration()
        ) || 0;

    if (!duration)
        return;

    const rect =
        progressContainer
            .getBoundingClientRect();

    if (!rect.width)
        return;

    const position =
        (
            event.clientX -
            rect.left
        ) / rect.width;

    const percentage =
        Math.max(
            0,
            Math.min(
                1,
                position
            )
        );

    try {

        player.seekTo(
            duration * percentage,
            true
        );

        updateProgress();

    } catch (error) {

        console.error(
            "RAAGLY: Seek failed.",
            error
        );

    }
}


if (progressContainer) {

    progressContainer.addEventListener(
        "click",
        seek
    );

}


/* =========================================================
   TIME FORMAT
   ========================================================= */

function formatTime(seconds) {

    if (
        !Number.isFinite(seconds) ||
        seconds < 0
    ) {
        return "0:00";
    }

    const minutes =
        Math.floor(
            seconds / 60
        );

    const secs =
        Math.floor(
            seconds % 60
        );

    return (
        `${minutes}:` +
        `${String(secs).padStart(2, "0")}`
    );
}


/* =========================================================
   PROGRESS
   ========================================================= */

function updateProgress() {

    if (
        !player ||
        typeof player.getCurrentTime !==
        "function" ||
        typeof player.getDuration !==
        "function"
    ) {
        return;
    }

    const current =
        Number(
            player.getCurrentTime()
        ) || 0;

    const duration =
        Number(
            player.getDuration()
        ) || 0;

    if (duration <= 0)
        return;

    const percentage =
        Math.max(
            0,
            Math.min(
                100,
                (current / duration) *
                100
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


function startProgress() {

    stopProgress();

    progressTimer =
        setInterval(
            updateProgress,
            250
        );
}


function stopProgress() {

    if (!progressTimer)
        return;

    clearInterval(
        progressTimer
    );

    progressTimer = null;
}


/* =========================================================
   VOLUME ICON
   ========================================================= */

function setVolumeIcon(value) {

    if (!muteBtn)
        return;

    const icon =
        muteBtn.querySelector("i");

    if (!icon)
        return;

    if (value <= 0) {

        icon.className =
            "fas fa-volume-mute";

    } else if (value < 50) {

        icon.className =
            "fas fa-volume-down";

    } else {

        icon.className =
            "fas fa-volume-up";

    }
}


/* =========================================================
   VOLUME SLIDER
   ========================================================= */

if (volumeSlider) {

    volumeSlider.value =
        DEFAULT_VOLUME;

    volumeSlider.addEventListener(
        "input",
        (event) => {

            const volume =
                Math.max(
                    0,
                    Math.min(
                        100,
                        Number(
                            event.target.value
                        )
                    )
                );

            if (player) {

                try {

                    player.unMute();

                    player.setVolume(
                        volume
                    );

                } catch (error) {

                    console.warn(
                        "RAAGLY: Volume error.",
                        error
                    );

                }

            }

            if (volume > 0) {

                preMuteVolume =
                    volume;

                isMuted = false;

            } else {

                isMuted = true;

            }

            setVolumeIcon(
                volume
            );

        }
    );
}


/* =========================================================
   MUTE BUTTON
   ========================================================= */

if (muteBtn) {

    muteBtn.addEventListener(
        "click",
        () => {

            if (!player)
                return;

            try {

                if (isMuted) {

                    const volume =
                        preMuteVolume ||
                        DEFAULT_VOLUME;

                    player.unMute();

                    player.setVolume(
                        volume
                    );

                    if (volumeSlider) {

                        volumeSlider.value =
                            volume;

                    }

                    isMuted = false;

                    setVolumeIcon(
                        volume
                    );

                } else {

                    if (volumeSlider) {

                        preMuteVolume =
                            Number(
                                volumeSlider.value
                            ) ||
                            DEFAULT_VOLUME;

                        volumeSlider.value =
                            0;

                    }

                    player.mute();

                    isMuted = true;

                    setVolumeIcon(0);

                }

            } catch (error) {

                console.error(
                    "RAAGLY: Mute failed.",
                    error
                );

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
            .map(
                (raag, index) => ({
                    ...raag,
                    index
                })
            )
            .filter(
                (raag) => {

                    const text =
                        [
                            raag.name,
                            raag.time,
                            raag.category,
                            raag.desc
                        ]
                            .join(" ")
                            .toLowerCase();

                    return text.includes(
                        query
                    );

                }
            );


    if (!results.length) {

        const li =
            document.createElement(
                "li"
            );

        li.textContent =
            "No matching Raag found";

        li.style.cursor =
            "default";

        li.style.opacity =
            "0.65";

        searchResults.appendChild(
            li
        );

    } else {

        results.forEach(
            (raag) => {

                const li =
                    document.createElement(
                        "li"
                    );

                const strong =
                    document.createElement(
                        "strong"
                    );

                strong.textContent =
                    raag.name;

                const info =
                    document.createElement(
                        "span"
                    );

                info.textContent =
                    `${raag.time} • ${raag.category}`;

                info.style.display =
                    "block";

                info.style.fontSize =
                    "11px";

                info.style.opacity =
                    "0.7";

                li.appendChild(
                    strong
                );

                li.appendChild(
                    info
                );

                li.addEventListener(
                    "click",
                    () => {

                        playRaag(
                            raag.index
                        );

                        if (searchInput) {

                            searchInput.value =
                                "";

                        }

                        searchResults.style.display =
                            "none";

                    }
                );

                searchResults.appendChild(
                    li
                );

            }
        );

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
            !searchInput.contains(
                event.target
            ) &&
            !searchResults.contains(
                event.target
            )
        ) {

            searchResults.style.display =
                "none";

        }

    }
);


/* =========================================================
   YOUTUBE PLAYER
   ========================================================= */

function createPlayer() {

    if (player)
        return;

    const target =
        document.getElementById(
            "youtube-player"
        );

    if (!target) {

        console.error(
            "RAAGLY: #youtube-player not found."
        );

        return;
    }

    try {

        player =
            new YT.Player(
                "youtube-player",
                {

                    width: "1",
                    height: "1",

                    playerVars: {

                        listType:
                            "playlist",

                        list:
                            PLAYLIST_ID,

                        autoplay: 0,

                        controls: 0,

                        rel: 0,

                        modestbranding: 1,

                        playsinline: 1,

                        enablejsapi: 1

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
            "RAAGLY: Player creation failed.",
            error
        );

    }
}


/* =========================================================
   YOUTUBE READY
   ========================================================= */

function onPlayerReady() {

    youtubeReady = true;

    try {

        player.setVolume(
            DEFAULT_VOLUME
        );

        if (volumeSlider) {

            volumeSlider.value =
                DEFAULT_VOLUME;

        }

        setVolumeIcon(
            DEFAULT_VOLUME
        );

    } catch (error) {

        console.warn(
            "RAAGLY: Initial volume failed.",
            error
        );

    }

    /*
     * Start with first Raag.
     */

    showRaag(
        currentIndex,
        false
    );

    /*
     * Give YouTube a little time to
     * populate its playlist.
     */

    waitForPlaylist();
}


/* =========================================================
   WAIT FOR YOUTUBE PLAYLIST
   ========================================================= */

function waitForPlaylist() {

    let attempts = 0;

    const timer =
        setInterval(
            () => {

                attempts++;

                if (
                    player &&
                    typeof player.getPlaylist ===
                    "function"
                ) {

                    const list =
                        player.getPlaylist();

                    if (
                        Array.isArray(list) &&
                        list.length > 0
                    ) {

                        clearInterval(
                            timer
                        );

                        syncTrack();

                        return;

                    }

                }

                if (attempts >= 40) {

                    clearInterval(
                        timer
                    );

                    /*
                     * UI still works even if
                     * YouTube blocks playlist
                     * metadata temporarily.
                     */

                    showRaag(
                        currentIndex,
                        false
                    );

                }

            },
            300
        );
}


/* =========================================================
   PLAYER STATE
   ========================================================= */

function onPlayerStateChange(event) {

    if (!window.YT)
        return;

    switch (event.data) {

        case YT.PlayerState.UNSTARTED:

            break;


        case YT.PlayerState.BUFFERING:

            syncTrack();

            break;


        case YT.PlayerState.PLAYING:

            isPlaying = true;

            syncTrack();

            updatePlayIcon(true);

            if (playerContainer) {

                playerContainer.classList.add(
                    "play"
                );

            }

            startProgress();

            break;


        case YT.PlayerState.PAUSED:

            isPlaying = false;

            updatePlayIcon(false);

            if (playerContainer) {

                playerContainer.classList.remove(
                    "play"
                );

            }

            stopProgress();

            updateProgress();

            break;


        case YT.PlayerState.ENDED:

            isPlaying = false;

            updatePlayIcon(false);

            if (playerContainer) {

                playerContainer.classList.remove(
                    "play"
                );

            }

            stopProgress();

            updateProgress();

            /*
             * Let YouTube handle playlist
             * advancement naturally.
             */

            setTimeout(
                syncTrack,
                700
            );

            break;

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

    stopProgress();
}


/* =========================================================
   LOAD YOUTUBE API
   ========================================================= */

function loadYouTubeAPI() {

    /*
     * Already available.
     */

    if (
        window.YT &&
        window.YT.Player
    ) {

        createPlayer();

        return;
    }


    /*
     * YouTube calls this after loading.
     */

    window.onYouTubeIframeAPIReady =
        function () {

            createPlayer();

        };


    /*
     * Avoid duplicate API scripts.
     */

    const existing =
        document.querySelector(
            'script[src="https://www.youtube.com/iframe_api"]'
        );

    if (existing)
        return;


    const script =
        document.createElement(
            "script"
        );

    script.src =
        "https://www.youtube.com/iframe_api";

    script.async = true;

    document.head.appendChild(
        script
    );
}


/* =========================================================
   KEYBOARD CONTROLS
   ========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        /*
         * Don't hijack typing.
         */

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


        /*
         * SPACE
         */

        if (
            event.code ===
            "Space"
        ) {

            event.preventDefault();

            togglePlay();

        }


        /*
         * RIGHT = +5 SEC
         */

        if (
            event.code ===
            "ArrowRight"
        ) {

            if (
                player &&
                typeof player.getCurrentTime ===
                "function"
            ) {

                const current =
                    player.getCurrentTime();

                player.seekTo(
                    current + 5,
                    true
                );

            }

        }


        /*
         * LEFT = -5 SEC
         */

        if (
            event.code ===
            "ArrowLeft"
        ) {

            if (
                player &&
                typeof player.getCurrentTime ===
                "function"
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

        }


        /*
         * N = NEXT
         */

        if (
            event.key.toLowerCase() ===
            "n"
        ) {

            nextTrack();

        }


        /*
         * P = PREVIOUS
         */

        if (
            event.key.toLowerCase() ===
            "p"
        ) {

            previousTrack();

        }

    }
);


/* =========================================================
   INITIALISE UI
   ========================================================= */

function initialiseRaagly() {

    /*
     * Always render the first Raag
     * independently of YouTube.
     */

    showRaag(
        0,
        false
    );

    /*
     * Build / connect library.
     */

    createLibrary();

    attachExistingLibraryItems();

    /*
     * Filters.
     */

    setupFilters();

    /*
     * Start YouTube.
     */

    loadYouTubeAPI();

    console.log(
        `RAAGLY loaded — ${raagData.length} tracks mapped.`
    );

    console.log(
        `Playlist ID: ${PLAYLIST_ID}`
    );

}


/* =========================================================
   DOM READY
   ========================================================= */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initialiseRaagly
    );

} else {

    initialiseRaagly();

}
```

