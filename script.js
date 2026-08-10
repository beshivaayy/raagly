```javascript
/* =========================================================
   RAAGLY
   Premium Music Player
========================================================= */


/* =========================================================
   PLAYLIST
========================================================= */

const playlistId = "PLJRipbfj__b0";


/* =========================================================
   RAAG DATA
========================================================= */

const raagData = [

    {
        name: "Raag Khamaj",
        subtitle: "Warmth • Ease • Evening",
        gradient: "linear-gradient(135deg,#86a86d,#183d37)",
        desc:
            "🌿 Physical wellness association: traditionally linked with digestive ease.\n" +
            "🧘 Listening mood: warm, soothing and emotionally gentle."
    },

    {
        name: "Raag Pilu",
        subtitle: "Gentle Joy • Lightness",
        gradient: "linear-gradient(135deg,#d7a84c,#743b25)",
        desc:
            "🌿 Traditional association: vitality and restorative listening.\n" +
            "🧘 Listening mood: gentle joy and lightheartedness."
    },

    {
        name: "Raag Malkauns",
        subtitle: "Depth • Stillness • Night",
        gradient: "linear-gradient(135deg,#1a1027,#6d2834)",
        desc:
            "🌿 Traditional wellness association: deep breathing and restorative calm.\n" +
            "🧘 Listening mood: meditative focus and inner strength."
    },

    {
        name: "Raag Lalit",
        subtitle: "Dawn • Awakening • Reflection",
        gradient: "linear-gradient(135deg,#d99f75,#432c42)",
        desc:
            "🌿 Traditionally enjoyed during quiet early-morning listening.\n" +
            "🌅 Listening mood: reflective, awakening and spacious."
    },

    {
        name: "Raag Bhoop",
        subtitle: "Peace • Balance • Clarity",
        gradient: "linear-gradient(135deg,#5c9d85,#213b58)",
        desc:
            "🌿 Traditionally associated with calm and balanced listening.\n" +
            "🧘 Listening mood: tranquility and mental composure."
    },

    {
        name: "Raag Bhairavi",
        subtitle: "Release • Reflection • Stillness",
        gradient: "linear-gradient(135deg,#287f89,#24134d)",
        desc:
            "🌿 A beloved Raag for reflective and restorative listening.\n" +
            "🧘 Listening mood: emotional release and quiet introspection."
    },

    {
        name: "Raag Asavari",
        subtitle: "Grounding • Recovery",
        gradient: "linear-gradient(135deg,#8770a8,#416b94)",
        desc:
            "🌿 Traditionally used for contemplative listening.\n" +
            "🧘 Listening mood: grounded, introspective and restorative."
    },

    {
        name: "Raag Todi",
        subtitle: "Depth • Emotion • Morning",
        gradient: "linear-gradient(135deg,#9d6b87,#4c557f)",
        desc:
            "🌿 Traditionally associated with thoughtful morning listening.\n" +
            "🧘 Listening mood: emotional depth and concentration."
    },

    {
        name: "Raag Jaunpuri",
        subtitle: "Reflection • Stability",
        gradient: "linear-gradient(135deg,#3278ad,#164c5e)",
        desc:
            "🌿 Traditionally appreciated for reflective listening.\n" +
            "🧘 Listening mood: calm focus and emotional steadiness."
    },

    {
        name: "Raag Kirwani",
        subtitle: "Emotion • Flow • Introspection",
        gradient: "linear-gradient(135deg,#369d75,#19585d)",
        desc:
            "🌿 Traditionally enjoyed during introspective listening.\n" +
            "🧘 Listening mood: emotional depth and endurance."
    },

    {
        name: "Raag Neelambri",
        subtitle: "Rest • Night • Softness",
        gradient: "linear-gradient(135deg,#a65372,#675b38)",
        desc:
            "🌿 Traditionally associated with quiet evening listening.\n" +
            "🧘 Listening mood: softness, rest and emotional ease."
    },

    {
        name: "Raag Bhairav",
        subtitle: "Dawn • Discipline • Focus",
        gradient: "linear-gradient(135deg,#a46d70,#47364a)",
        desc:
            "🌿 Traditionally enjoyed during early morning practice.\n" +
            "🌅 Listening mood: focused, grounded and contemplative."
    },

    {
        name: "Raag Darbari",
        subtitle: "Majesty • Depth • Night",
        gradient: "linear-gradient(135deg,#102840,#354f68)",
        desc:
            "🌿 A deep classical listening experience.\n" +
            "🧘 Listening mood: dignity, gravity and emotional depth."
    },

    {
        name: "Raag Gandharva",
        subtitle: "Expression • Learning • Flow",
        gradient: "linear-gradient(135deg,#6586ad,#3d6572)",
        desc:
            "🌿 Traditionally connected with expressive musical listening.\n" +
            "🧘 Listening mood: communication, creativity and flow."
    },

    {
        name: "Raag Kalyan",
        subtitle: "Expansion • Light • Evening",
        gradient: "linear-gradient(135deg,#a14c56,#774c38)",
        desc:
            "🌿 Traditionally associated with expansive evening listening.\n" +
            "🧘 Listening mood: openness, warmth and clarity."
    },

    {
        name: "Raag Poorvi",
        subtitle: "Mystery • Evening • Reflection",
        gradient: "linear-gradient(135deg,#9b382b,#8d681c)",
        desc:
            "🌿 Traditionally enjoyed during reflective evening sessions.\n" +
            "🧘 Listening mood: wisdom, depth and contemplation."
    },

    {
        name: "Raag Jay Jaywanti",
        subtitle: "Energy • Expression • Renewal",
        gradient: "linear-gradient(135deg,#7b342e,#214d83)",
        desc:
            "🌿 Traditionally associated with expressive and uplifting listening.\n" +
            "🧘 Listening mood: renewed energy and emotional movement."
    },

    {
        name: "Raag Madhuwanti",
        subtitle: "Dusk • Tenderness • Peace",
        gradient: "linear-gradient(135deg,#298d7c,#4c75a0)",
        desc:
            "🧘 Listening mood: gentle, soothing and emotionally spacious.\n" +
            "✨ Particularly beautiful for quiet dusk listening."
    },

    {
        name: "Raag Shudh",
        subtitle: "Clarity • Simplicity • Warmth",
        gradient: "linear-gradient(135deg,#b28c4a,#80513e)",
        desc:
            "🧘 Listening mood: simplicity, motivation and emotional warmth.\n" +
            "🤝 Traditionally associated with harmonious listening."
    },

    {
        name: "Raag Komal",
        subtitle: "Tenderness • Emotion • Healing",
        gradient: "linear-gradient(135deg,#765b99,#865d7c)",
        desc:
            "🧘 Listening mood: tenderness, emotional reflection and softness.\n" +
            "✨ Best experienced slowly and without distraction."
    },

    {
        name: "Raag Yaman",
        subtitle: "Peace • Evening • Expansion",
        gradient: "linear-gradient(135deg,#936e78,#63516e)",
        desc:
            "🧘 Listening mood: peace, openness and emotional balance.\n" +
            "🌙 Traditionally loved for evening listening."
    },

    {
        name: "Raag Hansdhawani",
        subtitle: "Joy • Brightness • Flow",
        gradient: "linear-gradient(135deg,#9e646b,#765f55)",
        desc:
            "🧘 Listening mood: brightness, inner stillness and joy.\n" +
            "✨ A graceful choice for uplifting listening."
    },

    {
        name: "Raag Shivranjani",
        subtitle: "Memory • Emotion • Introspection",
        gradient: "linear-gradient(135deg,#9c334c,#8b5545)",
        desc:
            "🧠 Traditionally appreciated for reflective listening and concentration.\n" +
            "🧘 Listening mood: melancholic, intimate and introspective."
    },

    {
        name: "Raag Nat Bhairav",
        subtitle: "Morning • Balance • Resolve",
        gradient: "linear-gradient(135deg,#a13e2e,#83631d)",
        desc:
            "💼 Traditionally associated with disciplined morning listening.\n" +
            "🤝 Listening mood: stability, resolve and balance."
    },

    {
        name: "Raag Brindabani Sarang",
        subtitle: "Nature • Affection • Afternoon",
        gradient: "linear-gradient(135deg,#1c5976,#518d84)",
        desc:
            "🌿 A refreshing Raag often associated with nature and openness.\n" +
            "🧘 Listening mood: affection, freshness and ease."
    },

    {
        name: "Raag Tanpura",
        subtitle: "Drone • Foundation • Stillness",
        gradient: "linear-gradient(135deg,#243f57,#453d63)",
        desc:
            "🎵 A foundational drone experience for deep listening.\n" +
            "🧘 Listening mood: grounding, continuity and stillness."
    },

    {
        name: "Raag Shadbhinna",
        subtitle: "Focus • Discipline • Depth",
        gradient: "linear-gradient(135deg,#2b3e48,#24749a)",
        desc:
            "💼 Traditionally suited to focused and contemplative listening.\n" +
            "🧘 Listening mood: discipline, concentration and respect."
    }

];


/* =========================================================
   STATE
========================================================= */

let player = null;

let isPlaying = false;
let isMuted = false;
let repeatCurrent = false;

let progressTimer = null;

let previousVolume = 75;

let currentSpeed = 1;

let currentIndex = 0;

let apiReady = false;

let toastTimer = null;


/* =========================================================
   DOM
========================================================= */

const body = document.getElementById("app-body");

const playerCard =
    document.querySelector(".player-card");

const raagName =
    document.getElementById("raag-name");

const raagSubtitle =
    document.getElementById("raag-subtitle");

const raagTime =
    document.getElementById("raag-time");

const raagDesc =
    document.getElementById("raag-desc");

const raagNumber =
    document.getElementById("raag-number");

const playBtn =
    document.getElementById("play");

const prevBtn =
    document.getElementById("prev");

const nextBtn =
    document.getElementById("next");

const progressContainer =
    document.getElementById("progress-container");

const progressBar =
    document.getElementById("progress");

const progressThumb =
    document.getElementById("progress-thumb");

const currentTimeEl =
    document.getElementById("current-time");

const durationEl =
    document.getElementById("duration");

const volumeSlider =
    document.getElementById("volume-slider");

const muteBtn =
    document.getElementById("mute-btn");

const speedBtn =
    document.getElementById("speed-btn");

const speedMenu =
    document.getElementById("speed-menu");

const repeatBtn =
    document.getElementById("repeat-btn");

const searchInput =
    document.getElementById("search-input");

const clearSearch =
    document.getElementById("clear-search");

const searchResults =
    document.getElementById("search-results");

const raagGrid =
    document.getElementById("raag-grid");

const statusText =
    document.getElementById("status-text");

const toast =
    document.getElementById("toast");

const toastText =
    document.getElementById("toast-text");


/* =========================================================
   INITIAL UI
========================================================= */

function renderLibrary() {

    raagGrid.innerHTML = "";

    raagData.forEach((raag, index) => {

        const card =
            document.createElement("article");

        card.className = "raag-card";

        card.dataset.index = index;

        card.style.setProperty(
            "--card-gradient",
            raag.gradient
        );

        card.innerHTML = `
            <span class="card-number">
                ${String(index + 1).padStart(2, "0")}
            </span>

            <div class="card-name">
                ${raag.name}
            </div>

            <span class="card-desc">
                ${raag.subtitle}
            </span>
        `;

        card.addEventListener(
            "click",
            () => selectRaag(index)
        );

        raagGrid.appendChild(card);
    });

    updateActiveCard();
}


function updateActiveCard() {

    document
        .querySelectorAll(".raag-card")
        .forEach(card => {

            card.classList.toggle(
                "active",
                Number(card.dataset.index) === currentIndex
            );
        });
}


/* =========================================================
   RAAG UI
========================================================= */

function updateTrackInfo(index = currentIndex) {

    if (!raagData[index]) return;

    currentIndex = index;

    const data = raagData[index];

    raagName.classList.remove("track-change");
    raagSubtitle.classList.remove("track-change");

    void raagName.offsetWidth;

    raagName.classList.add("track-change");
    raagSubtitle.classList.add("track-change");

    raagName.textContent = data.name;

    raagSubtitle.textContent =
        data.subtitle;

    raagDesc.textContent =
        data.desc;

    raagNumber.textContent =
        String(index + 1).padStart(2, "0");

    raagTime.textContent =
        "Sound • Stillness • Listening";

    body.style.background = `
        radial-gradient(
            circle at 50% -10%,
            ${getGradientColor(index)},
            transparent 43%
        ),
        #09090d
    `;

    document
        .querySelector(".ambient-one")
        .style.background =
        getGradientColor(index);

    document
        .querySelector(".ambient-two")
        .style.background =
        getSecondaryColor(index);

    updateActiveCard();
}


function getGradientColor(index) {

    const colors = [
        "#55785d",
        "#9c6d36",
        "#4e293d",
        "#a66f63",
        "#427568",
        "#3e6480",
        "#675681",
        "#75566d",
        "#306b8b",
        "#287d6c",
        "#9b5367",
        "#86545c",
        "#27455f",
        "#6481a1",
        "#8c4853",
        "#894127",
        "#6e302b",
        "#328477",
        "#9b713f",
        "#76578e",
        "#81616e",
        "#95606b",
        "#913549",
        "#2b6980",
        "#344d65",
        "#344b55"
    ];

    return colors[index] || "#8b6b3f";
}


function getSecondaryColor(index) {

    const colors = [
        "#244c46",
        "#5c3429",
        "#231b48",
        "#56334a",
        "#223a55",
        "#24133f",
        "#304e73",
        "#3c4467",
        "#153d52",
        "#154b45",
        "#54442c",
        "#372f4b",
        "#1a2d40",
        "#304c5b",
        "#5e3030",
        "#5a491c",
        "#253c6b",
        "#315c82",
        "#54352d",
        "#4a315d",
        "#453d5b",
        "#443344",
        "#52253b",
        "#204f57",
        "#282445",
        "#1e5d72"
    ];

    return colors[index] || "#3c305b";
}


/* =========================================================
   YOUTUBE API
========================================================= */

function loadYouTubeAPI() {

    const tag =
        document.createElement("script");

    tag.src =
        "https://www.youtube.com/iframe_api";

    const firstScript =
        document.getElementsByTagName("script")[0];

    firstScript.parentNode.insertBefore(
        tag,
        firstScript
    );
}


window.onYouTubeIframeAPIReady =
    function () {

        apiReady = true;

        player =
            new YT.Player(
                "youtube-player",
                {

                    height: "1",
                    width: "1",

                    playerVars: {
                        listType: "playlist",
                        list: playlistId,
                        autoplay: 0,
                        controls: 0,
                        playsinline: 1,
                        rel: 0
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
    };


function onPlayerReady() {

    statusText.textContent =
        "READY";

    player.setVolume(
        previousVolume
    );

    setTimeout(
        syncPlaylist,
        900
    );
}


function syncPlaylist() {

    if (!player) return;

    try {

        const index =
            player.getPlaylistIndex();

        if (
            typeof index === "number" &&
            index >= 0
        ) {
            updateTrackInfo(
                index %
                raagData.length
            );
        }

    } catch (error) {

        console.log(
            "Playlist sync:",
            error
        );
    }
}


/* =========================================================
   PLAYER STATE
========================================================= */

function onPlayerStateChange(event) {

    if (!window.YT) return;

    switch (event.data) {

        case YT.PlayerState.PLAYING:

            isPlaying = true;

            playerCard.classList.add(
                "playing"
            );

            playBtn.innerHTML =
                '<i class="fa-solid fa-pause"></i>';

            playBtn.setAttribute(
                "aria-label",
                "Pause"
            );

            statusText.textContent =
                "PLAYING";

            syncCurrentTrack();

            startProgressTimer();

            break;


        case YT.PlayerState.PAUSED:

            isPlaying = false;

            playerCard.classList.remove(
                "playing"
            );

            playBtn.innerHTML =
                '<i class="fa-solid fa-play"></i>';

            statusText.textContent =
                "PAUSED";

            stopProgressTimer();

            updateProgress();

            break;


        case YT.PlayerState.ENDED:

            isPlaying = false;

            playerCard.classList.remove(
                "playing"
            );

            stopProgressTimer();

            updateProgress();

            if (repeatCurrent) {

                player.seekTo(
                    0,
                    true
                );

                player.playVideo();

            } else {

                playNext();

            }

            break;
    }
}


function onPlayerError(event) {

    statusText.textContent =
        "UNAVAILABLE";

    showToast(
        "This track could not be played."
    );

    console.log(
        "YouTube error:",
        event.data
    );
}


/* =========================================================
   TRACK SYNC
========================================================= */

function syncCurrentTrack() {

    if (
        !player ||
        typeof player.getPlaylistIndex !==
            "function"
    ) {
        return;
    }

    const index =
        player.getPlaylistIndex();

    if (
        typeof index === "number" &&
        index >= 0
    ) {

        const safeIndex =
            index % raagData.length;

        if (safeIndex !== currentIndex) {

            updateTrackInfo(
                safeIndex
            );
        }
    }
}


/* =========================================================
   PLAY / PAUSE
========================================================= */

function togglePlay() {

    if (!player) {

        showToast(
            "Player is still loading..."
        );

        return;
    }

    if (isPlaying) {

        player.pauseVideo();

    } else {

        player.playVideo();
    }
}


playBtn.addEventListener(
    "click",
    togglePlay
);


/* =========================================================
   NEXT / PREVIOUS
========================================================= */

function playNext() {

    if (
        !player ||
        typeof player.nextVideo !==
            "function"
    ) {
        return;
    }

    player.nextVideo();

    setTimeout(
        syncCurrentTrack,
        500
    );
}


function playPrevious() {

    if (
        !player ||
        typeof player.previousVideo !==
            "function"
    ) {
        return;
    }

    player.previousVideo();

    setTimeout(
        syncCurrentTrack,
        500
    );
}


nextBtn.addEventListener(
    "click",
    playNext
);


prevBtn.addEventListener(
    "click",
    playPrevious
);


/* =========================================================
   DIRECT RAAG SELECTION
========================================================= */

function selectRaag(index) {

    if (
        index < 0 ||
        index >= raagData.length
    ) {
        return;
    }

    currentIndex = index;

    updateTrackInfo(index);

    if (
        player &&
        typeof player.playVideoAt ===
            "function"
    ) {

        player.playVideoAt(index);

    } else {

        showToast(
            "Player is still loading..."
        );
    }
}


/* =========================================================
   PROGRESS
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

    const secondsPart =
        Math.floor(seconds % 60);

    return `${minutes}:${String(
        secondsPart
    ).padStart(2, "0")}`;
}


function updateProgress() {

    if (
        !player ||
        typeof player.getCurrentTime !==
            "function"
    ) {
        return;
    }

    const current =
        player.getCurrentTime() || 0;

    const duration =
        player.getDuration() || 0;

    if (duration <= 0) return;

    const percent =
        Math.min(
            100,
            Math.max(
                0,
                (current / duration) * 100
            )
        );

    progressBar.style.width =
        `${percent}%`;

    progressThumb.style.left =
        `${percent}%`;

    currentTimeEl.textContent =
        formatTime(current);

    durationEl.textContent =
        formatTime(duration);
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


/* =========================================================
   SEEK
========================================================= */

progressContainer.addEventListener(
    "click",
    event => {

        if (
            !player ||
            typeof player.getDuration !==
                "function"
        ) {
            return;
        }

        const duration =
            player.getDuration();

        if (!duration) return;

        const rect =
            progressContainer
                .getBoundingClientRect();

        const x =
            event.clientX -
            rect.left;

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
);


/* =========================================================
   VOLUME
========================================================= */

volumeSlider.addEventListener(
    "input",
    event => {

        const value =
            Number(event.target.value);

        if (
            player &&
            typeof player.setVolume ===
                "function"
        ) {

            player.setVolume(value);
        }

        if (value === 0) {

            isMuted = true;

            muteBtn.innerHTML =
                '<i class="fa-solid fa-volume-xmark"></i>';

        } else {

            isMuted = false;

            previousVolume = value;

            updateVolumeIcon(value);
        }
    }
);


function updateVolumeIcon(value) {

    if (value === 0) {

        muteBtn.innerHTML =
            '<i class="fa-solid fa-volume-xmark"></i>';

    } else if (value < 50) {

        muteBtn.innerHTML =
            '<i class="fa-solid fa-volume-low"></i>';

    } else {

        muteBtn.innerHTML =
            '<i class="fa-solid fa-volume-high"></i>';
    }
}


muteBtn.addEventListener(
    "click",
    () => {

        if (!player) return;

        if (isMuted) {

            player.unMute();

            player.setVolume(
                previousVolume || 75
            );

            volumeSlider.value =
                previousVolume || 75;

            isMuted = false;

            updateVolumeIcon(
                previousVolume || 75
            );

        } else {

            previousVolume =
                Number(
                    volumeSlider.value
                ) || 75;

            player.mute();

            volumeSlider.value = 0;

            isMuted = true;

            updateVolumeIcon(0);
        }
    }
);


/* =========================================================
   PLAYBACK SPEED
========================================================= */

speedBtn.addEventListener(
    "click",
    event => {

        event.stopPropagation();

        speedMenu.classList.toggle(
            "open"
        );
    }
);


document
    .querySelectorAll(
        ".speed-menu button"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const speed =
                    Number(
                        button.dataset.speed
                    );

                currentSpeed =
                    speed;

                if (
                    player &&
                    typeof player.setPlaybackRate ===
                        "function"
                ) {

                    player.setPlaybackRate(
                        speed
                    );
                }

                speedBtn.textContent =
                    `${speed}×`;

                document
                    .querySelectorAll(
                        ".speed-menu button"
                    )
                    .forEach(
                        item =>
                            item.classList.toggle(
                                "active",
                                Number(
                                    item.dataset.speed
                                ) === speed
                            )
                    );

                speedMenu.classList.remove(
                    "open"
                );

                showToast(
                    `Playback speed ${speed}×`
                );
            }
        );
    });


/* =========================================================
   REPEAT
========================================================= */

repeatBtn.addEventListener(
    "click",
    () => {

        repeatCurrent =
            !repeatCurrent;

        repeatBtn.classList.toggle(
            "active",
            repeatCurrent
        );

        showToast(
            repeatCurrent
                ? "Repeat enabled"
                : "Repeat disabled"
        );
    }
);


/* =========================================================
   SEARCH
========================================================= */

function performSearch(query) {

    searchResults.innerHTML = "";

    const clean =
        query.toLowerCase().trim();

    clearSearch.classList.toggle(
        "visible",
        clean.length > 0
    );

    if (!clean) {

        searchResults.style.display =
            "none";

        return;
    }

    const results =
        raagData
            .map(
                (item, index) => ({
                    ...item,
                    index
                })
            )
            .filter(item => {

                const searchable =
                    `${item.name}
                     ${item.subtitle}
                     ${item.desc}`
                        .toLowerCase();

                return searchable.includes(
                    clean
                );
            });


    if (!results.length) {

        const li =
            document.createElement("li");

        li.innerHTML = `
            <strong>No Raag found</strong>
            <span>Try another name or benefit.</span>
        `;

        li.style.cursor = "default";

        searchResults.appendChild(li);

    } else {

        results.forEach(item => {

            const li =
                document.createElement("li");

            li.innerHTML = `
                <strong>
                    ${item.name}
                </strong>

                <span>
                    ${item.subtitle}
                </span>
            `;

            li.addEventListener(
                "click",
                () => {

                    selectRaag(
                        item.index
                    );

                    searchInput.value =
                        "";

                    searchResults.style.display =
                        "none";

                    clearSearch.classList.remove(
                        "visible"
                    );
                }
            );

            searchResults.appendChild(li);
        });
    }

    searchResults.style.display =
        "block";
}


searchInput.addEventListener(
    "input",
    event =>
        performSearch(
            event.target.value
        )
);


clearSearch.addEventListener(
    "click",
    () => {

        searchInput.value = "";

        searchResults.innerHTML = "";

        searchResults.style.display =
            "none";

        clearSearch.classList.remove(
            "visible"
        );

        searchInput.focus();
    }
);


/* =========================================================
   CLOSE SEARCH / SPEED
========================================================= */

document.addEventListener(
    "click",
    event => {

        if (
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

        if (
            !speedMenu.contains(
                event.target
            ) &&
            !speedBtn.contains(
                event.target
            )
        ) {

            speedMenu.classList.remove(
                "open"
            );
        }
    }
);


/* =========================================================
   KEYBOARD CONTROLS
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        const active =
            document.activeElement;

        const typing =
            active &&
            (
                active.tagName ===
                    "INPUT" ||
                active.tagName ===
                    "TEXTAREA"
            );

        if (typing) return;


        switch (event.code) {

            case "Space":

                event.preventDefault();

                togglePlay();

                break;


            case "ArrowRight":

                if (
                    player &&
                    typeof player.getCurrentTime ===
                        "function"
                ) {

                    player.seekTo(
                        player.getCurrentTime() + 5,
                        true
                    );

                    updateProgress();
                }

                break;


            case "ArrowLeft":

                if (
                    player &&
                    typeof player.getCurrentTime ===
                        "function"
                ) {

                    player.seekTo(
                        Math.max(
                            0,
                            player.getCurrentTime() - 5
                        ),
                        true
                    );

                    updateProgress();
                }

                break;


            case "ArrowUp":

                event.preventDefault();

                changeVolume(5);

                break;


            case "ArrowDown":

                event.preventDefault();

                changeVolume(-5);

                break;


            case "KeyN":

                playNext();

                break;


            case "KeyP":

                playPrevious();

                break;
        }
    }
);


function changeVolume(amount) {

    const current =
        Number(
            volumeSlider.value
        );

    const next =
        Math.max(
            0,
            Math.min(
                100,
                current + amount
            )
        );

    volumeSlider.value =
        next;

    volumeSlider.dispatchEvent(
        new Event("input")
    );
}


/* =========================================================
   TOAST
========================================================= */

function showToast(message) {

    toastText.textContent =
        message;

    toast.classList.add(
        "show"
    );

    clearTimeout(
        toastTimer
    );

    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            1800
        );
}


/* =========================================================
   INITIALIZE
========================================================= */

renderLibrary();

updateTrackInfo(0);

loadYouTubeAPI();


/* =========================================================
   SAFETY SYNC
========================================================= */

setInterval(
    () => {

        if (
            player &&
            isPlaying
        ) {

            syncCurrentTrack();
        }

    },
    1500
);
```
