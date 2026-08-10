/* =========================================================
   RAAGLY — MAIN JAVASCRIPT
   ========================================================= */


/* =========================================================
   YOUTUBE PLAYLIST
   ========================================================= */

const playlistId = "PLJRipbfj__b0";

let player = null;

let isPlaying = false;
let isMuted = false;

let progressTimer = null;

let currentIndex = 0;

let preMuteVolume = 75;

let apiReady = false;


/* =========================================================
   RAAG DATA
   ========================================================= */

const raagData = [

    {
        name: "Raag Khamaj",
        time: "Evening",
        categories: ["health", "mind"],
        accent: "#78ffd6",
        desc: "🌿 Physical Health: Traditionally associated with digestive ease and emotional relaxation.\n🧘 Mind: A gentle, soothing mood for unwinding.",
        short: "Gentle • Soothing • Evening"
    },

    {
        name: "Raag Pilu",
        time: "Afternoon / Evening",
        categories: ["health", "mind"],
        accent: "#f6a65b",
        desc: "🌿 Traditionally associated with vitality and emotional warmth.\n🧘 Mind: Brings a gentle, playful and lighthearted atmosphere.",
        short: "Warm • Playful • Joyful"
    },

    {
        name: "Raag Malkauns",
        time: "Late Night",
        categories: ["mind", "health"],
        accent: "#a54b63",
        desc: "🌙 Deep nocturnal character for meditation and inward attention.\n🧘 Mind: Encourages stillness, depth and contemplative focus.",
        short: "Deep • Meditative • Powerful"
    },

    {
        name: "Raag Lalit",
        time: "Early Dawn",
        categories: ["mind", "health"],
        accent: "#fcb69f",
        desc: "🌅 A dawn Raag with a delicate and contemplative character.\n🧘 Mind: Suits quiet morning reflection and awakening.",
        short: "Dawn • Delicate • Reflective"
    },

    {
        name: "Raag Bhoop",
        time: "Evening",
        categories: ["mind", "health"],
        accent: "#84fab0",
        desc: "🌿 Traditionally associated with serenity and balance.\n🧘 Mind: Creates an open, peaceful and composed atmosphere.",
        short: "Peaceful • Open • Balanced"
    },

    {
        name: "Raag Bhairavi",
        time: "Morning / Closing",
        categories: ["mind", "health"],
        accent: "#6b7cff",
        desc: "🌿 A deeply expressive Raag often heard toward the close of musical sessions.\n🧘 Mind: Supports reflection, surrender and emotional release.",
        short: "Expressive • Reflective • Deep"
    },

    {
        name: "Raag Asavari",
        time: "Late Morning",
        categories: ["health", "career"],
        accent: "#a78bfa",
        desc: "🌿 A grounded Raag with a contemplative character.\n✨ Listening can create a sense of calm and inward attention.",
        short: "Grounded • Calm • Reflective"
    },

    {
        name: "Raag Todi",
        time: "Late Morning",
        categories: ["mind", "health"],
        accent: "#d8a4d6",
        desc: "🧘 An introspective Raag suited to focused listening.\n🌿 Its serious character can accompany quiet reflection.",
        short: "Introspective • Serious • Focused"
    },

    {
        name: "Raag Jaunpuri",
        time: "Late Morning",
        categories: ["health", "career"],
        accent: "#00d9ff",
        desc: "🌿 A graceful and emotionally expressive Raag.\n✨ Useful for creating a composed atmosphere during focused listening.",
        short: "Graceful • Expressive • Calm"
    },

    {
        name: "Raag Kirwani",
        time: "Evening",
        categories: ["mind", "career"],
        accent: "#43e97b",
        desc: "🧘 A beautiful evening mood with emotional depth.\n✨ Suitable for quiet concentration and reflective listening.",
        short: "Emotional • Evening • Focus"
    },

    {
        name: "Raag Neelambri",
        time: "Night",
        categories: ["mind", "health"],
        accent: "#fa709a",
        desc: "🌙 A gentle night-time character traditionally associated with lullaby-like moods.\n🧘 Creates a soft and restful listening environment.",
        short: "Night • Gentle • Restful"
    },

    {
        name: "Raag Bhairav",
        time: "Early Morning",
        categories: ["health", "mind"],
        accent: "#ff9a9e",
        desc: "🌅 A powerful morning Raag with a serious, meditative character.\n🧘 Excellent for starting a quiet and focused morning listening session.",
        short: "Morning • Powerful • Meditative"
    },

    {
        name: "Raag Darbari",
        time: "Late Night",
        categories: ["mind", "relationships"],
        accent: "#537895",
        desc: "🌙 Deep, majestic and introspective.\n🧘 Its serious character makes it suitable for quiet reflection and emotional depth.",
        short: "Majestic • Deep • Introspective"
    },

    {
        name: "Raag Gandharva",
        time: "Day",
        categories: ["career", "mind"],
        accent: "#a1c4fd",
        desc: "✨ Associated with expressive musicality and communication.\n💼 A thoughtful listening choice during study and creative work.",
        short: "Creative • Expressive • Bright"
    },

    {
        name: "Raag Kalyan",
        time: "Evening",
        categories: ["relationships", "mind"],
        accent: "#ff7096",
        desc: "🧘 A luminous evening character associated with expansiveness.\n🤝 Creates a graceful atmosphere for connection and reflection.",
        short: "Luminous • Graceful • Open"
    },

    {
        name: "Raag Poorvi",
        time: "Evening",
        categories: ["career", "mind"],
        accent: "#f5af19",
        desc: "✨ A serious evening Raag with a distinctive contemplative mood.\n💼 Works well as background music for thoughtful work.",
        short: "Serious • Evening • Focus"
    },

    {
        name: "Raag Jay Jaywanti",
        time: "Evening",
        categories: ["mind", "health"],
        accent: "#568cff",
        desc: "🌿 Expressive and emotionally nuanced.\n🧘 Suitable for moments when you want a balance between tenderness and energy.",
        short: "Tender • Expressive • Balanced"
    },

    {
        name: "Raag Madhuwanti",
        time: "Afternoon / Evening",
        categories: ["mind", "relationships"],
        accent: "#72aff3",
        desc: "🧘 A soft and romantic character with a soothing emotional quality.\n✨ Ideal for quiet evening listening.",
        short: "Soothing • Romantic • Soft"
    },

    {
        name: "Raag Shudh",
        time: "Day",
        categories: ["mind", "relationships"],
        accent: "#fda085",
        desc: "✨ A bright and clean musical character.\n🤝 Suitable for creating a warm, positive atmosphere.",
        short: "Bright • Clean • Warm"
    },

    {
        name: "Raag Komal",
        time: "Evening",
        categories: ["mind", "relationships"],
        accent: "#b59be8",
        desc: "🧘 Soft and emotionally sensitive in character.\n🌙 Suitable for quiet introspection and emotional processing.",
        short: "Soft • Sensitive • Introspective"
    },

    {
        name: "Raag Yaman",
        time: "Evening",
        categories: ["mind", "relationships"],
        accent: "#e9b7ff",
        desc: "✨ One of the most serene evening moods in Hindustani music.\n🧘 Creates an expansive, peaceful listening environment.",
        short: "Serene • Expansive • Peaceful"
    },

    {
        name: "Raag Hansdhawani",
        time: "Evening",
        categories: ["mind", "relationships"],
        accent: "#ffb4cf",
        desc: "✨ Bright, elegant and uplifting in character.\n🤝 Works beautifully for positive and joyful listening.",
        short: "Bright • Joyful • Elegant"
    },

    {
        name: "Raag Shivranjani",
        time: "Evening / Night",
        categories: ["mind", "health"],
        accent: "#ff5279",
        desc: "🧠 A deeply expressive and melancholic character.\n🧘 Suitable for introspective listening and emotional release.",
        short: "Melancholic • Deep • Expressive"
    },

    {
        name: "Raag Nat Bhairav",
        time: "Morning",
        categories: ["career", "relationships"],
        accent: "#f59e0b",
        desc: "🌅 A morning Raag combining strength with introspection.\n✨ Suitable for beginning the day with focused listening.",
        short: "Morning • Strong • Focused"
    },

    {
        name: "Raag Brindabani Sarang",
        time: "Afternoon",
        categories: ["relationships", "mind"],
        accent: "#64d4c8",
        desc: "☀️ A bright afternoon Raag with a graceful and devotional atmosphere.\n🤝 Creates a warm, open emotional mood.",
        short: "Afternoon • Graceful • Warm"
    },

    {
        name: "Raag Tanpura",
        time: "Anytime",
        categories: ["career", "relationships"],
        accent: "#7c6ac9",
        desc: "🎵 A drone-focused listening experience for grounding and concentration.\n🧘 Particularly suitable for meditation and practice.",
        short: "Drone • Grounding • Focus"
    },

    {
        name: "Raag Shadbhinna",
        time: "Day",
        categories: ["career", "relationships"],
        accent: "#26a0da",
        desc: "✨ A distinctive classical colour for attentive listening.\n🧘 Best approached slowly, allowing the musical details to unfold.",
        short: "Distinctive • Classical • Focus"
    }

];


/* =========================================================
   DOM
   ========================================================= */

const body = document.getElementById("app-body");

const playerCard = document.querySelector(".player-card");

const raagName = document.getElementById("raag-name");
const raagTime = document.getElementById("raag-time");
const raagDesc = document.getElementById("raag-desc");

const statusText = document.getElementById("status-text");

const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const progressContainer =
    document.getElementById("progress-container");

const progress =
    document.getElementById("progress");

const progressThumb =
    document.getElementById("progress-thumb");

const currentTimeEl =
    document.getElementById("current-time");

const durationEl =
    document.getElementById("duration");

const volumeSlider =
    document.getElementById("volume-slider");

const volumeValue =
    document.getElementById("volume-value");

const muteBtn =
    document.getElementById("mute-btn");

const searchInput =
    document.getElementById("search-input");

const clearSearch =
    document.getElementById("clear-search");

const searchResults =
    document.getElementById("search-results");

const raagGrid =
    document.getElementById("raag-grid");

const library =
    document.getElementById("library");

const libraryToggle =
    document.getElementById("library-toggle");

const libraryClose =
    document.getElementById("library-close");

const libraryList =
    document.getElementById("library-list");

const overlay =
    document.getElementById("overlay");

const trackCounter =
    document.getElementById("track-counter");

const showAll =
    document.getElementById("show-all");


/* =========================================================
   UTILITIES
   ========================================================= */

function formatTime(seconds) {

    if (
        !Number.isFinite(seconds) ||
        seconds < 0
    ) {
        return "0:00";
    }

    const minutes =
        Math.floor(seconds / 60);

    const secs =
        Math.floor(seconds % 60);

    return `${minutes}:${secs
        .toString()
        .padStart(2, "0")}`;
}


function getSafeIndex(index) {

    if (!raagData.length) {
        return 0;
    }

    return (
        (index % raagData.length) +
        raagData.length
    ) % raagData.length;
}


function animateText() {

    [
        raagName,
        raagTime,
        raagDesc
    ].forEach(element => {

        element.classList.remove("fade-change");

        void element.offsetWidth;

        element.classList.add("fade-change");

    });
}


/* =========================================================
   THEME
   ========================================================= */

function applyTheme(index) {

    const data =
        raagData[getSafeIndex(index)];

    if (!data) {
        return;
    }

    const accent = data.accent;

    body.style.setProperty(
        "--accent",
        accent
    );

    body.style.setProperty(
        "--glow",
        `${accent}42`
    );

    body.style.background = `
        radial-gradient(
            circle at 50% 20%,
            ${accent}18,
            transparent 38%
        ),
        radial-gradient(
            circle at 10% 90%,
            ${accent}0d,
            transparent 35%
        ),
        #08090d
    `;

    document.documentElement.style.setProperty(
        "--accent",
        accent
    );

    document.documentElement.style.setProperty(
        "--glow",
        `${accent}42`
    );
}


/* =========================================================
   TRACK INFO
   ========================================================= */

function updateTrackInfo(index = currentIndex) {

    currentIndex =
        getSafeIndex(index);

    const data =
        raagData[currentIndex];

    if (!data) {
        return;
    }

    raagName.textContent =
        data.name;

    raagTime.textContent =
        `${data.time} · Sound Healing Frequencies`;

    raagDesc.textContent =
        data.desc;

    trackCounter.textContent =
        `${String(currentIndex + 1).padStart(2, "0")} / ${String(raagData.length).padStart(2, "0")}`;

    applyTheme(currentIndex);

    animateText();

    updateActiveCards();
}


/* =========================================================
   YOUTUBE API
   ========================================================= */

function onYouTubeIframeAPIReady() {

    apiReady = true;

    player = new YT.Player(
        "youtube-player",
        {

            height: "1",
            width: "1",

            playerVars: {

                listType: "playlist",

                list: playlistId,

                autoplay: 0,

                controls: 0,

                disablekb: 1,

                playsinline: 1,

                rel: 0,

                modestbranding: 1

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
}


function onPlayerReady() {

    player.setVolume(
        Number(volumeSlider.value)
    );

    setTimeout(() => {

        syncPlaylistIndex();

        renderEverything();

    }, 1200);

}


function onPlayerError(event) {

    console.warn(
        "YouTube player error:",
        event.data
    );

    statusText.textContent =
        "PLAYER ERROR";
}


function syncPlaylistIndex() {

    if (
        !player ||
        typeof player.getPlaylistIndex !== "function"
    ) {
        return;
    }

    const index =
        player.getPlaylistIndex();

    if (
        typeof index === "number" &&
        index >= 0
    ) {
        currentIndex =
            getSafeIndex(index);
    }

    updateTrackInfo(currentIndex);
}


/* =========================================================
   PLAYER STATE
   ========================================================= */

function onPlayerStateChange(event) {

    if (!window.YT) {
        return;
    }

    switch (event.data) {

        case YT.PlayerState.PLAYING:

            isPlaying = true;

            playerCard.classList.add("playing");

            playBtn.innerHTML =
                '<i class="fa-solid fa-pause"></i>';

            playBtn.setAttribute(
                "aria-label",
                "Pause"
            );

            statusText.textContent =
                "NOW PLAYING";

            syncPlaylistIndex();

            startProgressTimer();

            break;


        case YT.PlayerState.PAUSED:

            isPlaying = false;

            playerCard.classList.remove("playing");

            playBtn.innerHTML =
                '<i class="fa-solid fa-play"></i>';

            playBtn.setAttribute(
                "aria-label",
                "Play"
            );

            statusText.textContent =
                "PAUSED";

            stopProgressTimer();

            updateProgress();

            break;


        case YT.PlayerState.ENDED:

            isPlaying = false;

            playerCard.classList.remove("playing");

            playBtn.innerHTML =
                '<i class="fa-solid fa-play"></i>';

            statusText.textContent =
                "NEXT RAAG";

            stopProgressTimer();

            updateProgress();

            goNext();

            break;


        case YT.PlayerState.BUFFERING:

            statusText.textContent =
                "TUNING...";

            break;


        case YT.PlayerState.CUED:

            statusText.textContent =
                "READY TO LISTEN";

            syncPlaylistIndex();

            break;
    }
}


/* =========================================================
   PLAY / PAUSE
   ========================================================= */

playBtn.addEventListener(
    "click",
    () => {

        if (!player) {
            statusText.textContent =
                "PLAYER LOADING...";

            return;
        }

        if (isPlaying) {

            player.pauseVideo();

        } else {

            player.playVideo();

        }

    }
);


/* =========================================================
   NEXT / PREVIOUS
   ========================================================= */

function goNext() {

    if (!player) {
        return;
    }

    const playlist =
        typeof player.getPlaylist === "function"
            ? player.getPlaylist()
            : null;

    if (
        playlist &&
        playlist.length
    ) {

        const nextIndex =
            getSafeIndex(currentIndex + 1);

        player.playVideoAt(nextIndex);

        currentIndex =
            nextIndex;

        updateTrackInfo(
            currentIndex
        );

        return;
    }

    if (
        typeof player.nextVideo === "function"
    ) {

        player.nextVideo();

        setTimeout(
            syncPlaylistIndex,
            500
        );

    }
}


function goPrevious() {

    if (!player) {
        return;
    }

    const playlist =
        typeof player.getPlaylist === "function"
            ? player.getPlaylist()
            : null;

    if (
        playlist &&
        playlist.length
    ) {

        const previousIndex =
            getSafeIndex(currentIndex - 1);

        player.playVideoAt(
            previousIndex
        );

        currentIndex =
            previousIndex;

        updateTrackInfo(
            currentIndex
        );

        return;
    }

    if (
        typeof player.previousVideo === "function"
    ) {

        player.previousVideo();

        setTimeout(
            syncPlaylistIndex,
            500
        );

    }
}


nextBtn.addEventListener(
    "click",
    goNext
);


prevBtn.addEventListener(
    "click",
    goPrevious
);


/* =========================================================
   PROGRESS
   ========================================================= */

function updateProgress() {

    if (
        !player ||
        typeof player.getCurrentTime !== "function"
    ) {
        return;
    }

    const current =
        player.getCurrentTime() || 0;

    const duration =
        player.getDuration() || 0;

    currentTimeEl.textContent =
        formatTime(current);

    durationEl.textContent =
        formatTime(duration);

    if (duration > 0) {

        const percentage =
            Math.min(
                100,
                Math.max(
                    0,
                    (current / duration) * 100
                )
            );

        progress.style.width =
            `${percentage}%`;

        progressThumb.style.left =
            `${percentage}%`;

    } else {

        progress.style.width =
            "0%";

        progressThumb.style.left =
            "0%";
    }
}


function startProgressTimer() {

    stopProgressTimer();

    updateProgress();

    progressTimer =
        setInterval(
            updateProgress,
            250
        );
}


function stopProgressTimer() {

    if (progressTimer) {

        clearInterval(
            progressTimer
        );

        progressTimer = null;

    }
}


function seekFromPointer(event) {

    if (
        !player ||
        typeof player.getDuration !== "function"
    ) {
        return;
    }

    const duration =
        player.getDuration();

    if (!duration) {
        return;
    }

    const rect =
        progressContainer.getBoundingClientRect();

    const x =
        event.clientX -
        rect.left;

    const percentage =
        Math.min(
            1,
            Math.max(
                0,
                x / rect.width
            )
        );

    const time =
        percentage * duration;

    player.seekTo(
        time,
        true
    );

    updateProgress();
}


progressContainer.addEventListener(
    "click",
    seekFromPointer
);


/* =========================================================
   VOLUME
   ========================================================= */

volumeSlider.addEventListener(
    "input",
    event => {

        const volume =
            Number(event.target.value);

        volumeValue.textContent =
            volume;

        if (player) {

            player.unMute();

            player.setVolume(
                volume
            );

        }

        isMuted =
            volume === 0;

        updateVolumeIcon(
            volume
        );

    }
);


function updateVolumeIcon(volume) {

    const icon =
        muteBtn.querySelector("i");

    if (volume === 0) {

        icon.className =
            "fa-solid fa-volume-xmark";

    } else if (volume < 45) {

        icon.className =
            "fa-solid fa-volume-low";

    } else {

        icon.className =
            "fa-solid fa-volume-high";

    }
}


muteBtn.addEventListener(
    "click",
    () => {

        if (!player) {
            return;
        }

        if (isMuted) {

            isMuted = false;

            player.unMute();

            player.setVolume(
                preMuteVolume || 75
            );

            volumeSlider.value =
                preMuteVolume || 75;

            volumeValue.textContent =
                preMuteVolume || 75;

            updateVolumeIcon(
                preMuteVolume || 75
            );

        } else {

            preMuteVolume =
                Number(volumeSlider.value) || 75;

            isMuted = true;

            player.mute();

            volumeSlider.value =
                0;

            volumeValue.textContent =
                "0";

            updateVolumeIcon(0);

        }

    }
);


/* =========================================================
   PLAY SPECIFIC RAAG
   ========================================================= */

function playRaag(index) {

    index =
        getSafeIndex(index);

    currentIndex =
        index;

    updateTrackInfo(
        index
    );

    if (!player) {

        statusText.textContent =
            "PLAYER LOADING...";

        return;

    }

    try {

        if (
            typeof player.playVideoAt === "function"
        ) {

            player.playVideoAt(index);

        } else {

            player.playVideo();

        }

    } catch (error) {

        console.warn(
            "Could not select track:",
            error
        );

    }

}


/* =========================================================
   SEARCH
   ========================================================= */

function searchRaags(query) {

    const cleanQuery =
        query
            .toLowerCase()
            .trim();

    if (!cleanQuery) {

        searchResults.style.display =
            "none";

        return;

    }

    const results =
        raagData
            .map(
                (data, index) => ({
                    ...data,
                    index
                })
            )
            .filter(data => {

                const searchable =
                    [
                        data.name,
                        data.time,
                        data.desc,
                        data.short,
                        data.categories.join(" ")
                    ]
                        .join(" ")
                        .toLowerCase();

                return searchable.includes(
                    cleanQuery
                );

            });


    searchResults.innerHTML = "";


    if (!results.length) {

        const empty =
            document.createElement("div");

        empty.style.padding =
            "16px";

        empty.style.color =
            "rgba(244,241,234,.5)";

        empty.style.fontSize =
            "10px";

        empty.textContent =
            "No matching Raag found.";

        searchResults.appendChild(
            empty
        );

    } else {

        results.forEach(
            data => {

                const button =
                    document.createElement("button");

                button.className =
                    "search-result";

                button.innerHTML = `

                    <span class="search-result-number">
                        ${String(data.index + 1).padStart(2, "0")}
                    </span>

                    <span>
                        <strong>${escapeHTML(data.name)}</strong>
                        <small>${escapeHTML(data.short)}</small>
                    </span>

                `;

                button.addEventListener(
                    "click",
                    () => {

                        playRaag(
                            data.index
                        );

                        searchInput.value =
                            "";

                        clearSearch.style.display =
                            "none";

                        searchResults.style.display =
                            "none";

                    }
                );

                searchResults.appendChild(
                    button
                );

            }
        );

    }

    searchResults.style.display =
        "block";
}


function escapeHTML(value) {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


searchInput.addEventListener(
    "input",
    event => {

        const value =
            event.target.value;

        clearSearch.style.display =
            value
                ? "block"
                : "none";

        searchRaags(value);

    }
);


clearSearch.addEventListener(
    "click",
    () => {

        searchInput.value =
            "";

        searchResults.style.display =
            "none";

        clearSearch.style.display =
            "none";

        searchInput.focus();

    }
);


document.addEventListener(
    "click",
    event => {

        if (
            !event.target.closest(
                ".search-section"
            )
        ) {

            searchResults.style.display =
                "none";

        }

    }
);


/* =========================================================
   RAAG GRID
   ========================================================= */

let activeFilter = "all";


function renderRaagGrid(
    filter = activeFilter
) {

    activeFilter =
        filter;

    raagGrid.innerHTML =
        "";

    const filtered =
        raagData
            .map(
                (data, index) => ({
                    ...data,
                    index
                })
            )
            .filter(
                data =>
                    filter === "all" ||
                    data.categories.includes(
                        filter
                    )
            );


    filtered.forEach(
        data => {

            const card =
                document.createElement("article");

            card.className =
                "raag-card";

            card.dataset.index =
                data.index;

            card.style.setProperty(
                "--card-accent",
                data.accent
            );

            const isActive =
                data.index === currentIndex;

            if (isActive) {
                card.classList.add(
                    "active"
                );
            }

            card.innerHTML = `

                <span class="raag-number">
                    ${String(data.index + 1).padStart(2, "0")}
                </span>

                <div class="raag-play">
                    <i class="fa-solid fa-play"></i>
                </div>

                <h4>
                    ${escapeHTML(data.name)}
                </h4>

                <p>
                    ${escapeHTML(data.short)}
                </p>

            `;

            card.addEventListener(
                "click",
                () => {

                    playRaag(
                        data.index
                    );

                }
            );

            raagGrid.appendChild(
                card
            );

        }
    );

}


function updateActiveCards() {

    document
        .querySelectorAll(
            ".raag-card"
        )
        .forEach(
            card => {

                const index =
                    Number(
                        card.dataset.index
                    );

                card.classList.toggle(
                    "active",
                    index === currentIndex
                );

            }
        );


    document
        .querySelectorAll(
            ".library-item"
        )
        .forEach(
            item => {

                const index =
                    Number(
                        item.dataset.index
                    );

                item.classList.toggle(
                    "active",
                    index === currentIndex
                );

            }
        );

}


/* =========================================================
   FILTERS
   ========================================================= */

document
    .querySelectorAll(".filter")
    .forEach(
        filterButton => {

            filterButton.addEventListener(
                "click",
                () => {

                    document
                        .querySelectorAll(
                            ".filter"
                        )
                        .forEach(
                            button =>
                                button.classList.remove(
                                    "active"
                                )
                        );

                    filterButton.classList.add(
                        "active"
                    );

                    renderRaagGrid(
                        filterButton.dataset.filter
                    );

                }
            );

        }
    );


showAll.addEventListener(
    "click",
    () => {

        document
            .querySelectorAll(
                ".filter"
            )
            .forEach(
                button =>
                    button.classList.remove(
                        "active"
                    )
            );

        document
            .querySelector(
                '[data-filter="all"]'
            )
            .classList.add(
                "active"
            );

        renderRaagGrid(
            "all"
        );

        document
            .querySelector(
                ".quick-section"
            )
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);


/* =========================================================
   LIBRARY
   ========================================================= */

function renderLibrary() {

    libraryList.innerHTML =
        "";

    raagData.forEach(
        (data, index) => {

            const button =
                document.createElement("button");

            button.className =
                "library-item";

            button.dataset.index =
                index;

            button.innerHTML = `

                <span class="library-item-number">
                    ${String(index + 1).padStart(2, "0")}
                </span>

                <span class="library-item-name">
                    ${escapeHTML(data.name)}
                </span>

                <i class="fa-solid fa-chevron-right"></i>

            `;

            button.addEventListener(
                "click",
                () => {

                    playRaag(
                        index
                    );

                    closeLibrary();

                }
            );

            libraryList.appendChild(
                button
            );

        }
    );

}


function openLibrary() {

    library.classList.add(
        "open"
    );

    overlay.classList.add(
        "active"
    );

    document.body.style.overflow =
        "hidden";

}


function closeLibrary() {

    library.classList.remove(
        "open"
    );

    overlay.classList.remove(
        "active"
    );

    document.body.style.overflow =
        "";

}


libraryToggle.addEventListener(
    "click",
    openLibrary
);

libraryClose.addEventListener(
    "click",
    closeLibrary
);

overlay.addEventListener(
    "click",
    closeLibrary
);


/* =========================================================
   KEYBOARD CONTROLS
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        const activeTag =
            document.activeElement.tagName;

        if (
            activeTag === "INPUT" ||
            activeTag === "TEXTAREA"
        ) {
            return;
        }


        switch (event.code) {

            case "Space":

                event.preventDefault();

                if (player) {

                    if (isPlaying) {

                        player.pauseVideo();

                    } else {

                        player.playVideo();

                    }

                }

                break;


            case "ArrowRight":

                if (player) {

                    const duration =
                        player.getDuration();

                    const current =
                        player.getCurrentTime();

                    player.seekTo(
                        Math.min(
                            duration,
                            current + 5
                        ),
                        true
                    );

                }

                break;


            case "ArrowLeft":

                if (player) {

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

                break;


            case "ArrowUp":

                event.preventDefault();

                changeVolume(
                    5
                );

                break;


            case "ArrowDown":

                event.preventDefault();

                changeVolume(
                    -5
                );

                break;


            case "KeyM":

                muteBtn.click();

                break;


            case "KeyN":

                goNext();

                break;


            case "KeyP":

                goPrevious();

                break;

        }

    }
);


function changeVolume(amount) {

    let volume =
        Number(
            volumeSlider.value
        );

    volume =
        Math.min(
            100,
            Math.max(
                0,
                volume + amount
            )
        );

    volumeSlider.value =
        volume;

    volumeSlider.dispatchEvent(
        new Event("input")
    );

}


/* =========================================================
   INITIAL RENDER
   ========================================================= */

function renderEverything() {

    renderRaagGrid(
        "all"
    );

    renderLibrary();

    updateTrackInfo(
        currentIndex
    );

    updateVolumeIcon(
        Number(volumeSlider.value)
    );

}


renderEverything();


/* =========================================================
   SAFETY: IF API IS SLOW
   ========================================================= */

setTimeout(
    () => {

        if (!apiReady) {

            statusText.textContent =
                "CONNECTING TO MUSIC...";

        }

    },
    4000
);


/* =========================================================
   MOBILE TOUCH SEEK
   ========================================================= */

let seeking = false;

progressContainer.addEventListener(
    "pointerdown",
    event => {

        seeking = true;

        progressContainer.setPointerCapture(
            event.pointerId
        );

        seekFromPointer(
            event
        );

    }
);


progressContainer.addEventListener(
    "pointermove",
    event => {

        if (seeking) {

            seekFromPointer(
                event
            );

        }

    }
);


progressContainer.addEventListener(
    "pointerup",
    () => {

        seeking = false;

    }
);


/* =========================================================
   PAGE VISIBILITY
   ========================================================= */

document.addEventListener(
    "visibilitychange",
    () => {

        if (
            document.hidden
        ) {

            stopProgressTimer();

        } else if (
            isPlaying
        ) {

            startProgressTimer();

        }

    }
);
