/* =========================================================
   RAAGLY — SCRIPT.JS (fixed)
   YouTube Playlist: PLJRipbfj__b0 (27 tracks, same order as raagData)

   Fixes vs previous version (no HTML/CSS changes needed):
   1. #raag-grid was never populated -> now built with .raag-card
      (matching style.css) for every raag.
   2. Library drawer items used class "raag-library-item" which
      doesn't exist in style.css -> now uses "library-item" /
      "library-item-number" / "library-item-name" so it's styled.
   3. Filter buttons send data-filter="all" / "relationships" but
      the old code compared against "All" / raag.category directly
      -> now mapped correctly (all -> show all, relationships -> Harmony).
   4. document.querySelector(".player-container") never matched
      anything (actual class is "player-card") -> the "now playing"
      mandala/soundbar/live-dot animations were dead. Fixed selector.
   5. Search results were plain <li> with no matching CSS class
      -> now built as .search-result / .search-result-number.
   6. Library drawer (hamburger, close button, overlay, "View all")
      had no click handlers at all -> wired up open/close.
   7. #clear-search button had no handler -> now clears input.
   8. #volume-value label never updated -> now synced with slider.
   9. Resuming after pause called playVideoAt(currentIndex), which
      restarts the track from 0:00 -> now uses playVideo() to resume.
   10. playRaag() could silently fail if clicked before the YouTube
       playlist finished loading -> now queues the request and plays
       it as soon as the playlist is ready.
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
    { name: "Raag Bhimpalasi", time: "Afternoon", category: "Mind", bg: "linear-gradient(135deg,#667eea,#764ba2)", desc: "🌿 Warm, emotional and soothing.\n🧘 Encourages relaxation, introspection and emotional balance." },
    { name: "Raag Darbari Kanada", time: "Late Night", category: "Mind", bg: "linear-gradient(135deg,#09203f,#537895)", desc: "🌙 Deep, majestic and contemplative.\n🧘 Creates a calm and introspective atmosphere." },
    { name: "Raag Shuddh Sarang", time: "Afternoon", category: "Health", bg: "linear-gradient(135deg,#56ccf2,#2f80ed)", desc: "☀️ Bright, refreshing and graceful.\n🧘 Encourages clarity and emotional freshness." },
    { name: "Raag Komal Rishabh Asavari", time: "Morning", category: "Mind", bg: "linear-gradient(135deg,#8360c3,#2ebf91)", desc: "🌿 Gentle and reflective.\n🧘 Supports quiet contemplation and emotional release." },
    { name: "Raag Yaman", time: "Evening", category: "Harmony", bg: "linear-gradient(135deg,#141e30,#243b55)", desc: "✨ Serene, graceful and expansive.\n🧘 Encourages peace, openness and relaxation." },
    { name: "Raag Hamsadhwani", time: "Evening", category: "Mind", bg: "linear-gradient(135deg,#ff9a9e,#fecfef)", desc: "✨ Bright, joyful and uplifting.\n🧘 Creates a feeling of inner stillness and lightness." },
    { name: "Raag Bhairavi", time: "Morning / Closing", category: "Mind", bg: "linear-gradient(135deg,#30cfd0,#330867)", desc: "🌿 Devotional, emotional and deeply expressive.\n🧘 Encourages reflection, acceptance and peaceful closure." },
    { name: "Raag Asavari", time: "Late Morning", category: "Health", bg: "linear-gradient(135deg,#e0c3fc,#8ec5fc)", desc: "🌿 Soft and introspective.\n🧘 Encourages relaxation and emotional balance." },
    { name: "Raag Desi Todi", time: "Late Morning", category: "Mind", bg: "linear-gradient(135deg,#fbc2eb,#a6c1ee)", desc: "🧘 Deeply contemplative and expressive.\n✨ Encourages stillness and focused listening." },
    { name: "Raag Kalyan", time: "Evening", category: "Harmony", bg: "linear-gradient(135deg,#ff0844,#ffb199)", desc: "✨ Expansive, graceful and uplifting.\n🧘 Creates optimism and emotional openness." },
    { name: "Raag Poorvi", time: "Evening", category: "Career", bg: "linear-gradient(135deg,#f12711,#f5af19)", desc: "🌅 Rich, serious and contemplative.\n🧘 Encourages concentration and inner awareness." },
    { name: "Raag Nat Bhairav", time: "Morning", category: "Career", bg: "linear-gradient(135deg,#f12711,#f5af19)", desc: "🌅 Strong and grounded morning energy.\n🧘 Encourages clarity and emotional stability." },
    { name: "Raag Vrindavani Sarang", time: "Afternoon", category: "Harmony", bg: "linear-gradient(135deg,#13547a,#80d0c7)", desc: "🌿 Refreshing, peaceful and affectionate.\n🧘 Creates a light and joyful atmosphere." },
    { name: "Raag Shuddh Kalyan", time: "Evening", category: "Mind", bg: "linear-gradient(135deg,#89f7fe,#66a6ff)", desc: "✨ Serene and luminous.\n🧘 Encourages peace, clarity and gentle positivity." },
    { name: "Raag Jaunpuri", time: "Late Morning", category: "Health", bg: "linear-gradient(135deg,#4facfe,#00f2fe)", desc: "🌿 Reflective and expressive.\n🧘 Supports emotional release and calm concentration." },
    { name: "Raag Kirwani", time: "Evening", category: "Mind", bg: "linear-gradient(135deg,#43e97b,#38f9d7)", desc: "🧘 Emotional, peaceful and meditative.\n✨ Creates a soothing space for deep listening." },
    { name: "Raag Neelambari", time: "Night", category: "Mind", bg: "linear-gradient(135deg,#fa709a,#fee140)", desc: "🌙 Gentle and lullaby-like.\n🧘 Encourages relaxation and peaceful nighttime listening." },
    { name: "Raag Malkauns", time: "Late Night", category: "Mind", bg: "linear-gradient(135deg,#200122,#6f0000)", desc: "🌙 Powerful, mysterious and meditative.\n🧘 Encourages deep focus and inner stillness." },
    { name: "Raag Bhairav", time: "Early Morning", category: "Health", bg: "linear-gradient(135deg,#ff9a9e,#fecfef)", desc: "🌅 Powerful morning awakening energy.\n🧘 Encourages focus, discipline and inner stillness." },
    { name: "Raag Lalit", time: "Early Dawn", category: "Mind", bg: "linear-gradient(135deg,#ffecd2,#fcb69f)", desc: "🌅 Delicate, peaceful and contemplative.\n🧘 Creates a calm transition into the morning." },
    { name: "Raag Bhoop", time: "Evening", category: "Harmony", bg: "linear-gradient(135deg,#84fab0,#8fd3f4)", desc: "✨ Pure, simple and uplifting.\n🧘 Encourages tranquility and mental composure." },
    { name: "Raag Madhuwanti", time: "Afternoon / Evening", category: "Mind", bg: "linear-gradient(135deg,#37ecba,#72aff3)", desc: "🌿 Soft, warm and soothing.\n🧘 Creates gentle emotional comfort and peacefulness." },
    { name: "Raag Pilu", time: "Flexible", category: "Harmony", bg: "linear-gradient(135deg,#f6d365,#fda085)", desc: "✨ Sweet, expressive and emotionally warm.\n🧘 Brings gentle joy and lightheartedness." },
    { name: "Raag Shivaranjani", time: "Evening / Night", category: "Mind", bg: "linear-gradient(135deg,#ff0844,#ffb199)", desc: "🧘 Melancholic yet soothing.\n✨ Encourages introspection and emotional expression." },
    { name: "Raag Jaijaiwanti", time: "Evening", category: "Mind", bg: "linear-gradient(135deg,#b92b27,#1565c0)", desc: "✨ Graceful, expressive and uplifting.\n🧘 Encourages emotional freshness and renewed energy." },
    { name: "Raag Khamaj", time: "Late Evening", category: "Harmony", bg: "linear-gradient(135deg,#a8ff78,#78ffd6)", desc: "🌿 Sweet, romantic and relaxed.\n🧘 Induces soothing emotional ease." },
    { name: "Tanpura", time: "Continuous Drone", category: "Health", bg: "linear-gradient(135deg,#2b5876,#4e4376)", desc: "🎵 Pure sustained tonal foundation.\n🧘 Ideal for meditation, riyaaz and deep listening." }
];

/* =========================================================
   STATE
   ========================================================= */

let player = null;
let youtubeReady = false;
let playlistLoaded = false;
let pendingPlayIndex = null;
let isPlaying = false;
let isMuted = false;
let preMuteVolume = DEFAULT_VOLUME;
let progressTimer = null;
let currentIndex = 0;
let activeFilter = "all";

/* =========================================================
   DOM
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
const volumeValueEl = $("volume-value");
const muteBtn = $("mute-btn");

const searchInput = $("search-input");
const searchResults = $("search-results");
const clearSearchBtn = $("clear-search");

const raagGrid = $("raag-grid");
const libraryList = $("library-list");
const libraryPanel = $("library");
const libraryToggleBtn = $("library-toggle");
const libraryCloseBtn = $("library-close");
const overlayEl = $("overlay");
const showAllBtn = $("show-all");

const filterButtons = document.querySelectorAll("[data-filter]");

/* Actual class on the player card is "player-card", not "player-container" */
const playerContainer = document.querySelector(".player-card");

/* =========================================================
   HELPERS
   ========================================================= */

function escapeHTML(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function extractAccentColor(gradient) {
    const match = /#([0-9a-fA-F]{3,8})/.exec(gradient || "");
    return match ? `#${match[1]}` : "var(--accent)";
}

function formatTime(seconds) {
    if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${String(secs).padStart(2, "0")}`;
}

/* =========================================================
   SHOW RAAG
   ========================================================= */

function showRaag(index, animate = true) {
    if (!raagData[index]) return;

    currentIndex = index;
    const data = raagData[index];

    if (raagName) raagName.textContent = data.name;
    if (raagTime) raagTime.textContent = data.time;
    if (raagDesc) raagDesc.textContent = data.desc;
    if (body) body.style.background = data.bg;

    if (animate) {
        [raagName, raagTime, raagDesc].forEach((el) => {
            if (!el) return;
            el.classList.remove("fade-in");
            void el.offsetWidth;
            el.classList.add("fade-in");
        });
    }

    updateTrackCounter(index);
    updateActiveState(index);
}

function updateTrackCounter(index) {
    const text = `${String(index + 1).padStart(2, "0")} / ${TOTAL_TRACKS}`;
    ["track-counter", "raag-counter", "track-number", "current-track", "playlist-count"]
        .forEach((id) => { const el = $(id); if (el) el.textContent = text; });
    document.querySelectorAll("[data-track-counter]").forEach((el) => { el.textContent = text; });
}

function updateActiveState(index) {
    document.querySelectorAll("[data-index]").forEach((item) => {
        item.classList.toggle("active", Number(item.dataset.index) === index);
    });
}

/* =========================================================
   BUILD RAAG GRID + LIBRARY (fixes: nothing rendered before,
   and library items used a class that didn't exist in CSS)
   ========================================================= */

function renderCollections() {
    if (raagGrid) {
        raagGrid.innerHTML = "";
        raagData.forEach((raag, index) => {
            const card = document.createElement("button");
            card.type = "button";
            card.className = "raag-card";
            card.dataset.index = index;
            card.style.setProperty("--card-accent", extractAccentColor(raag.bg));
            card.innerHTML = `
                <span class="raag-number">${String(index + 1).padStart(2, "0")}</span>
                <h4>${escapeHTML(raag.name)}</h4>
                <p>${escapeHTML(raag.time)} • ${escapeHTML(raag.category)}</p>
                <span class="raag-play"><i class="fa-solid fa-play"></i></span>
            `;
            card.addEventListener("click", () => playRaag(index));
            raagGrid.appendChild(card);
        });
    }

    if (libraryList) {
        libraryList.innerHTML = "";
        raagData.forEach((raag, index) => {
            const item = document.createElement("button");
            item.type = "button";
            item.className = "library-item";
            item.dataset.index = index;
            item.innerHTML = `
                <span class="library-item-number">${String(index + 1).padStart(2, "0")}</span>
                <span class="library-item-name">${escapeHTML(raag.name)}</span>
                <i class="fa-solid fa-chevron-right"></i>
            `;
            item.addEventListener("click", () => {
                playRaag(index);
                closeLibrary();
            });
            libraryList.appendChild(item);
        });
    }
}

/* =========================================================
   LIBRARY DRAWER (fix: hamburger / close / overlay / "View all"
   had no click handlers at all before)
   ========================================================= */

function openLibrary() {
    if (libraryPanel) libraryPanel.classList.add("open");
    if (overlayEl) overlayEl.classList.add("active");
}

function closeLibrary() {
    if (libraryPanel) libraryPanel.classList.remove("open");
    if (overlayEl) overlayEl.classList.remove("active");
}

if (libraryToggleBtn) libraryToggleBtn.addEventListener("click", openLibrary);
if (libraryCloseBtn) libraryCloseBtn.addEventListener("click", closeLibrary);
if (overlayEl) overlayEl.addEventListener("click", closeLibrary);
if (showAllBtn) showAllBtn.addEventListener("click", openLibrary);

/* =========================================================
   FILTERS (fix: buttons send "all" / "relationships" but old
   code compared against "All" / raag.category directly)
   ========================================================= */

const FILTER_MAP = {
    all: null,
    health: "health",
    mind: "mind",
    career: "career",
    relationships: "harmony"
};

function applyFilter(filterKey) {
    const target = Object.prototype.hasOwnProperty.call(FILTER_MAP, filterKey)
        ? FILTER_MAP[filterKey]
        : String(filterKey).toLowerCase();

    document.querySelectorAll("[data-index]").forEach((item) => {
        const raag = raagData[Number(item.dataset.index)];
        if (!raag) return;
        const visible = target === null || raag.category.toLowerCase() === target;
        item.style.display = visible ? "" : "none";
    });
}

function setupFilters() {
    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            activeFilter = button.dataset.filter || "all";
            filterButtons.forEach((b) => b.classList.remove("active"));
            button.classList.add("active");
            applyFilter(activeFilter);
        });
    });
}

/* =========================================================
   PLAY SPECIFIC RAAG (fix: queues the request if the YouTube
   playlist hasn't finished loading yet, instead of silently
   doing nothing)
   ========================================================= */

function playRaag(index) {
    if (index < 0 || index >= TOTAL_TRACKS) return;

    currentIndex = index;
    showRaag(index);

    if (!youtubeReady || !player || !playlistLoaded) {
        pendingPlayIndex = index;
        return;
    }

    try {
        player.playVideoAt(index);
        isPlaying = true;
        updatePlayIcon(true);
    } catch (error) {
        console.error("RAAGLY: Unable to play track.", error);
    }
}

/* =========================================================
   PLAY / PAUSE (fix: resuming used to call playVideoAt again,
   which restarts the track from 0:00 instead of resuming)
   ========================================================= */

function togglePlay() {
    if (!youtubeReady || !player) {
        console.warn("RAAGLY: Player still loading.");
        return;
    }
    try {
        if (isPlaying) {
            player.pauseVideo();
        } else {
            player.playVideo();
        }
    } catch (error) {
        console.error("RAAGLY: Play/pause failed.", error);
    }
}

if (playBtn) playBtn.addEventListener("click", togglePlay);

function updatePlayIcon(playing) {
    if (!playBtn) return;
    const icon = playBtn.querySelector("i");
    if (icon) icon.className = playing ? "fas fa-pause" : "fas fa-play";
}

/* =========================================================
   NEXT / PREVIOUS
   ========================================================= */

function getYouTubeIndex() {
    if (!player || typeof player.getPlaylistIndex !== "function") return currentIndex;
    const index = player.getPlaylistIndex();
    return (typeof index === "number" && index >= 0 && index < TOTAL_TRACKS) ? index : currentIndex;
}

function syncTrack() {
    showRaag(getYouTubeIndex());
}

function nextTrack() {
    if (!youtubeReady || !player || !playlistLoaded) return;
    try {
        player.nextVideo();
        setTimeout(syncTrack, 500);
    } catch (error) {
        console.error("RAAGLY: Next failed.", error);
    }
}

function previousTrack() {
    if (!youtubeReady || !player || !playlistLoaded) return;
    try {
        player.previousVideo();
        setTimeout(syncTrack, 500);
    } catch (error) {
        console.error("RAAGLY: Previous failed.", error);
    }
}

if (nextBtn) nextBtn.addEventListener("click", nextTrack);
if (prevBtn) prevBtn.addEventListener("click", previousTrack);

/* =========================================================
   SEEK
   ========================================================= */

function seek(event) {
    if (!player || !progressContainer) return;
    const duration = Number(player.getDuration()) || 0;
    if (!duration) return;

    const rect = progressContainer.getBoundingClientRect();
    if (!rect.width) return;

    const percentage = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));

    try {
        player.seekTo(duration * percentage, true);
        updateProgress();
    } catch (error) {
        console.error("RAAGLY: Seek failed.", error);
    }
}

if (progressContainer) progressContainer.addEventListener("click", seek);

/* =========================================================
   PROGRESS
   ========================================================= */

function updateProgress() {
    if (!player || typeof player.getCurrentTime !== "function" || typeof player.getDuration !== "function") return;

    const current = Number(player.getCurrentTime()) || 0;
    const duration = Number(player.getDuration()) || 0;
    if (duration <= 0) return;

    const percentage = Math.max(0, Math.min(100, (current / duration) * 100));

    if (progressBar) progressBar.style.width = `${percentage}%`;
    if (currentTimeEl) currentTimeEl.textContent = formatTime(current);
    if (durationEl) durationEl.textContent = formatTime(duration);
}

function startProgress() {
    stopProgress();
    progressTimer = setInterval(updateProgress, 250);
}

function stopProgress() {
    if (!progressTimer) return;
    clearInterval(progressTimer);
    progressTimer = null;
}

/* =========================================================
   VOLUME (fix: #volume-value label never updated before)
   ========================================================= */

function setVolumeIcon(value) {
    if (!muteBtn) return;
    const icon = muteBtn.querySelector("i");
    if (!icon) return;
    if (value <= 0) icon.className = "fas fa-volume-mute";
    else if (value < 50) icon.className = "fas fa-volume-down";
    else icon.className = "fas fa-volume-up";
}

if (volumeSlider) {
    volumeSlider.value = DEFAULT_VOLUME;

    volumeSlider.addEventListener("input", (event) => {
        const volume = Math.max(0, Math.min(100, Number(event.target.value)));

        if (player) {
            try {
                player.unMute();
                player.setVolume(volume);
            } catch (error) {
                console.warn("RAAGLY: Volume error.", error);
            }
        }

        if (volume > 0) {
            preMuteVolume = volume;
            isMuted = false;
        } else {
            isMuted = true;
        }

        if (volumeValueEl) volumeValueEl.textContent = volume;
        setVolumeIcon(volume);
    });
}

if (muteBtn) {
    muteBtn.addEventListener("click", () => {
        if (!player) return;
        try {
            if (isMuted) {
                const volume = preMuteVolume || DEFAULT_VOLUME;
                player.unMute();
                player.setVolume(volume);
                if (volumeSlider) volumeSlider.value = volume;
                if (volumeValueEl) volumeValueEl.textContent = volume;
                isMuted = false;
                setVolumeIcon(volume);
            } else {
                if (volumeSlider) {
                    preMuteVolume = Number(volumeSlider.value) || DEFAULT_VOLUME;
                    volumeSlider.value = 0;
                }
                if (volumeValueEl) volumeValueEl.textContent = 0;
                player.mute();
                isMuted = true;
                setVolumeIcon(0);
            }
        } catch (error) {
            console.error("RAAGLY: Mute failed.", error);
        }
    });
}

/* =========================================================
   SEARCH (fix: results were plain <li> with no class matching
   style.css — now built as .search-result / .search-result-number)
   ========================================================= */

function searchRaags(query) {
    if (!searchResults) return;
    searchResults.innerHTML = "";

    if (!query) {
        searchResults.style.display = "none";
        return;
    }

    const results = raagData
        .map((raag, index) => ({ ...raag, index }))
        .filter((raag) => {
            const text = [raag.name, raag.time, raag.category, raag.desc].join(" ").toLowerCase();
            return text.includes(query);
        });

    if (!results.length) {
        const empty = document.createElement("div");
        empty.className = "search-result";
        empty.style.cursor = "default";
        empty.style.opacity = "0.6";
        empty.textContent = "No matching Raag found";
        searchResults.appendChild(empty);
    } else {
        results.forEach((raag) => {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "search-result";
            btn.innerHTML = `
                <span class="search-result-number">${String(raag.index + 1).padStart(2, "0")}</span>
                <span>
                    <strong>${escapeHTML(raag.name)}</strong>
                    <small>${escapeHTML(raag.time)} • ${escapeHTML(raag.category)}</small>
                </span>
            `;
            btn.addEventListener("click", () => {
                playRaag(raag.index);
                if (searchInput) searchInput.value = "";
                if (clearSearchBtn) clearSearchBtn.style.display = "none";
                searchResults.style.display = "none";
            });
            searchResults.appendChild(btn);
        });
    }

    searchResults.style.display = "block";
}

if (searchInput) {
    searchInput.addEventListener("input", (event) => {
        const query = event.target.value.toLowerCase().trim();
        if (clearSearchBtn) clearSearchBtn.style.display = query ? "flex" : "none";
        searchRaags(query);
    });
}

if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => {
        if (searchInput) {
            searchInput.value = "";
            searchInput.focus();
        }
        clearSearchBtn.style.display = "none";
        if (searchResults) searchResults.style.display = "none";
    });
}

document.addEventListener("click", (event) => {
    if (searchInput && searchResults &&
        !searchInput.contains(event.target) &&
        !searchResults.contains(event.target)) {
        searchResults.style.display = "none";
    }
});

/* =========================================================
   YOUTUBE PLAYER
   ========================================================= */

function createPlayer() {
    if (player) return;

    const target = $("youtube-player");
    if (!target) {
        console.error("RAAGLY: #youtube-player not found.");
        return;
    }

    try {
        player = new YT.Player("youtube-player", {
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
                enablejsapi: 1,
                origin: window.location.origin
            },
            events: {
                onReady: onPlayerReady,
                onStateChange: onPlayerStateChange,
                onError: onPlayerError
            }
        });
    } catch (error) {
        console.error("RAAGLY: Player creation failed.", error);
    }
}

function onPlayerReady() {
    youtubeReady = true;

    try {
        player.setVolume(DEFAULT_VOLUME);
        if (volumeSlider) volumeSlider.value = DEFAULT_VOLUME;
        if (volumeValueEl) volumeValueEl.textContent = DEFAULT_VOLUME;
        setVolumeIcon(DEFAULT_VOLUME);
    } catch (error) {
        console.warn("RAAGLY: Initial volume failed.", error);
    }

    showRaag(currentIndex, false);
    waitForPlaylist();
}

function waitForPlaylist() {
    let attempts = 0;

    const timer = setInterval(() => {
        attempts++;

        if (player && typeof player.getPlaylist === "function") {
            const list = player.getPlaylist();

            if (Array.isArray(list) && list.length > 0) {
                clearInterval(timer);
                playlistLoaded = true;

                if (list.length !== TOTAL_TRACKS) {
                    console.warn(
                        `RAAGLY: YouTube playlist has ${list.length} videos, expected ${TOTAL_TRACKS}. ` +
                        `Track order may not line up with raagData if a video was added/removed.`
                    );
                }

                if (pendingPlayIndex !== null) {
                    const index = pendingPlayIndex;
                    pendingPlayIndex = null;
                    playRaag(index);
                } else {
                    syncTrack();
                }

                return;
            }
        }

        if (attempts >= 40) {
            clearInterval(timer);
            playlistLoaded = true;
            showRaag(currentIndex, false);
        }
    }, 300);
}

function onPlayerStateChange(event) {
    if (!window.YT) return;

    switch (event.data) {
        case YT.PlayerState.BUFFERING:
            syncTrack();
            break;

        case YT.PlayerState.PLAYING:
            isPlaying = true;
            syncTrack();
            updatePlayIcon(true);
            if (playerContainer) playerContainer.classList.add("playing");
            startProgress();
            break;

        case YT.PlayerState.PAUSED:
            isPlaying = false;
            updatePlayIcon(false);
            if (playerContainer) playerContainer.classList.remove("playing");
            stopProgress();
            updateProgress();
            break;

        case YT.PlayerState.ENDED:
            isPlaying = false;
            updatePlayIcon(false);
            if (playerContainer) playerContainer.classList.remove("playing");
            stopProgress();
            updateProgress();
            setTimeout(syncTrack, 600);
            break;
    }
}

function onPlayerError(event) {
    console.error("RAAGLY YouTube Error:", event.data);
    isPlaying = false;
    updatePlayIcon(false);
    stopProgress();
}

function loadYouTubeAPI() {
    if (window.YT && window.YT.Player) {
        createPlayer();
        return;
    }

    window.onYouTubeIframeAPIReady = function () {
        createPlayer();
    };

    const existing = document.querySelector('script[src="https://www.youtube.com/iframe_api"]');
    if (existing) return;

    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    script.async = true;
    document.head.appendChild(script);
}

/* =========================================================
   KEYBOARD CONTROLS
   ========================================================= */

document.addEventListener("keydown", (event) => {
    if (event.target && (event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA")) return;

    if (event.code === "Space") {
        event.preventDefault();
        togglePlay();
    }

    if (event.code === "ArrowRight" && player && typeof player.getCurrentTime === "function") {
        player.seekTo(player.getCurrentTime() + 5, true);
    }

    if (event.code === "ArrowLeft" && player && typeof player.getCurrentTime === "function") {
        player.seekTo(Math.max(0, player.getCurrentTime() - 5), true);
    }

    if (event.key.toLowerCase() === "n") nextTrack();
    if (event.key.toLowerCase() === "p") previousTrack();
});

/* =========================================================
   INITIALISE
   ========================================================= */

function initialiseRaagly() {
    showRaag(0, false);
    renderCollections();
    setupFilters();
    loadYouTubeAPI();

    console.log(`RAAGLY loaded — ${raagData.length} tracks mapped.`);
    console.log(`Playlist ID: ${PLAYLIST_ID}`);
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialiseRaagly);
} else {
    initialiseRaagly();
}
