/* =========================================================
   RAAGLY — VEDIC ASTRONOMICAL RE-SKIN
   JavaScript updated for new UI: no search, fixed track counter,
   updated selectors, preserved music functionality.
   ========================================================= */

"use strict";

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — —
// CORE SETTINGS & DATA
// — — — — — — — — — — — — — — — — — — — — — — — — — — — — —

const PLAYLIST_ID = "PLJRipbfj__b0";
const DEFAULT_VOLUME = 80;
const TOTAL_TRACKS = 27;

// Raag data — categories and descriptions preserved from original
const raagData = [
    { name: "Raag Bhimpalasi", time: "Afternoon", category: "Mind", desc: "Encourages relaxation, introspection and emotional balance." },
    { name: "Raag Darbari Kanada", time: "Late Night", category: "Mind", desc: "Healing: Heart disease, child-related issues, honor, positioning in life, and paternal/government relations." },
    { name: "Raag Shuddh Sarang", time: "Afternoon", category: "Health", desc: "Healing: Mental peace, maternal relations, family harmony, trauma, and intangible happiness." },
    { name: "Raag Komal Rishabh Asavari", time: "Morning", category: "Mind", desc: "Healing: Mental peace, maternal relations, calmness, family harmony, and emotional trauma." },
    { name: "Raag Yaman", time: "Evening", category: "Harmony", desc: "Healing: Mental peace, maternal relations, happiness, family atmosphere, and emotional pain." },
    { name: "Raag Hamsadhwani", time: "Evening", category: "Mind", desc: "Healing: Mental peace, maternal relations, happiness, calmness, family harmony, and trauma." },
    { name: "Raag Bhairavi", time: "Morning / Closing", category: "Mind", desc: "Healing: Insomnia, property-related issues, blood-related problems, violence, and accidents." },
    { name: "Raag Asavari", time: "Late Morning", category: "Health", desc: "Healing: Property-related issues, blood-related problems, violence, and accidents." },
    { name: "Raag Desi Todi", time: "Late Morning", category: "Mind", desc: "Healing: Property-related issues, blood-related problems, violence, and accidents." },
    { name: "Raag Kalyan", time: "Evening", category: "Harmony", desc: "Healing: Education troubles, sibling conflicts, thyroid/hormonal imbalances, and communication." },
    { name: "Raag Poorvi", time: "Evening", category: "Career", desc: "Healing: Education troubles, sibling conflicts, hormonal imbalances, and business." },
    { name: "Raag Nat Bhairav", time: "Morning", category: "Career", desc: "Healing: Relationship issues and money-related financial troubles." },
    { name: "Raag Vrindavani Sarang", time: "Afternoon", category: "Harmony", desc: "Healing: Relationship issues and money-related financial troubles." },
    { name: "Raag Shuddh Kalyan", time: "Evening", category: "Mind", desc: "Encourages peace, clarity and gentle positivity." },
    { name: "Raag Jaunpuri", time: "Late Morning", category: "Health", desc: "Healing: Profession-related issues, long-term diseases, and chronic troubles." },
    { name: "Raag Kirwani", time: "Evening", category: "Mind", desc: "Healing: Profession-related issues, long-term diseases, and chronic troubles." },
    { name: "Raag Neelambari", time: "Night", category: "Mind", desc: "Healing: Profession-related issues, long-term diseases, and chronic troubles." },
    { name: "Raag Malkauns", time: "Late Night", category: "Mind", desc: "Healing: Provides relief from Asthma." },
    { name: "Raag Bhairav", time: "Early Morning", category: "Health", desc: "Healing: Provides relief from Headaches." },
    { name: "Raag Lalit", time: "Early Dawn", category: "Mind", desc: "Healing: Provides relief from Asthma." },
    { name: "Raag Bhoop", time: "Evening", category: "Harmony", desc: "Healing: Regulates and maintains Blood Pressure." },
    { name: "Raag Madhuwanti", time: "Afternoon / Evening", category: "Mind", desc: "Healing: Helps combat depression and mental stress." },
    { name: "Raag Pilu", time: "Flexible", category: "Harmony", desc: "Healing: Beneficial for those suffering from Anemia." },
    { name: "Raag Shivaranjani", time: "Evening / Night", category: "Mind", desc: "Healing: Improves retention and helps with memory loss." },
    { name: "Raag Jaijaiwanti", time: "Evening", category: "Mind", desc: "Healing: Overcomes physical and mental weakness." },
    { name: "Raag Khamaj", time: "Late Evening", category: "Harmony", desc: "Healing: Provides relief from acidity and indigestion." },
    { name: "Tanpura", time: "Continuous Drone", category: "Health", desc: "Healing: Child-related problems, honor, positioning in life, and relations with father/government." }
];

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — —
// PLAYER STATE
// — — — — — — — — — — — — — — — — — — — — — — — — — — — — —

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

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — —
// DOM ELEMENTS — UPDATED FOR NEW HTML
// — — — — — — — — — — — — — — — — — — — — — — — — — — — — —

const body = document.body;

// Player DOM elements (verify these exist in new HTML)
const raagName = document.getElementById("raag-name");
const raagTime = document.getElementById("raag-time");
const raagDesc = document.getElementById("raag-desc");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progressContainer = document.getElementById("progress-container");
const progressBar = document.getElementById("progress");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const volumeSlider = document.getElementById("volume-slider");
const volumeValueEl = document.getElementById("volume-value");
const muteBtn = document.getElementById("mute-btn");

// NEW: Navigation elements (replaces old library-toggle)
const navToggle = document.getElementById("nav-toggle");
const mainNav = document.getElementById("main-nav");

// Track counter — only element that exists in new HTML
const trackCounterEl = document.getElementById("track-counter");

// Library elements (preserved from original)
const libraryPanel = document.getElementById("library");
const libraryList = document.getElementById("library-list");
const libraryCloseBtn = document.getElementById("library-close");
const overlayEl = document.getElementById("overlay");

// Player footer
const playerContainer = document.querySelector(".player-footer");

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — —
// HELPER FUNCTIONS
// — — — — — — — — — — — — — — — — — — — — — — — — — — — — —

function escapeHTML(value) {
    return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

function formatTime(seconds) {
    if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${String(secs).padStart(2, "0")}`;
}

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — —
// RENDER — raag grid + library
// — — — — — — — — — — — — — — — — — — — — — — — — — — — — —

/* Render raag cards in the grid — no search, just the data */
function renderRaagCards() {
    if (!raagGrid) return;
    raagGrid.innerHTML = "";
    raagData.forEach((raag, index) => {
        const card = document.createElement("button");
        card.type = "button";
        card.className = "raag-card";
        card.dataset.index = index;
        card.tabIndex = 0; /* keyboard accessible */
        card.innerHTML = `
            <span class="raag-number">${String(index + 1).padStart(2, "0")}</span>
            <h4>${escapeHTML(raag.name)}</h4>
            <p style="font-size: 0.75rem; color: var(--muted); margin: 0.25rem 0.5rem 0;">${escapeHTML(raag.time)} • ${escapeHTML(raag.category)}</p>
            <p style="font-size: 0.7rem; line-height: 1.3; color: var(--muted); margin: 0 0.5rem 0.5rem;">${escapeHTML(raag.desc)}</p>
            <span class="raag-play"><i class="fa-solid fa-play"></i></span>
        `;
        card.addEventListener("click", () => playRaag(index));
        /* Keyboard: Enter/Space triggers click */
        card.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") { e.preventDefault(); playRaag(index); }
        });
        raagGrid.appendChild(card);
    });
}

/* Render library drawer items */
function renderLibrary() {
    if (!libraryList) return;
    libraryList.innerHTML = "";
    raagData.forEach((raag, index) => {
        const item = document.createElement("button");
        item.type = "button";
        item.className = "library-item";
        item.dataset.index = index;
        item.tabIndex = 0;
        item.innerHTML = `
            <span class="library-item-number">${String(index + 1).padStart(2, "0")}</span>
            <span class="library-item-name">${escapeHTML(raag.name)}</span>
            <i class="fa-solid fa-chevron-right"></i>
        `;
        item.addEventListener("click", () => { playRaag(index); closeLibrary(); });
        item.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); playRaag(index); closeLibrary(); } });
        libraryList.appendChild(item);
    });
}

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — —
// PLAYER — show raag info
// — — — — — — — — — — — — — — — — — — — — — — — — — — — — —

function showRaag(index, animate = true) {
    if (index < 0 || index >= TOTAL_TRACKS) return;
    currentIndex = index;
    const raag = raagData[index];
    if (raagName) raagName.textContent = raag.name;
    if (raagTime) raagTime.textContent = raag.time;
    if (raagDesc) raagDesc.textContent = raag.desc;
    if (trackCounterEl) trackCounterEl.textContent = `${String(index + 1).padStart(2, "0")} / ${TOTAL_TRACKS}`;
    if (body) body.style.background = raagData[index] ? raagData[index].bg : var(--bg);
    /* subtle opacity fade for typography transition */
    if (animate) {
        [raagName, raagTime, raagDesc].forEach(el => {
            if (!el) return;
            el.style.opacity = "0.6";
            setTimeout(() => { if (el) el.style.opacity = "1"; }, 300);
        });
    }
}

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — —
// PLAY / PAUSE
// — — — — — — — — — — — — — — — — — — — — — — — — — — — — —

function togglePlay() {
    if (!youtubeReady || !player) return;
    try { isPlaying ? player.pauseVideo() : player.playVideo(); } catch (e) { console.error("Toggle play error:", e); }
}

function updatePlayIcon(playing) {
    if (!playBtn) return;
    const icon = playBtn.querySelector("i");
    if (icon) icon.className = playing ? "fa-solid fa-pause" : "fa-solid fa-play";
}

/* --- NAVIGATION (mobile hamburger) --- */
function openNav() { if (mainNav) mainNav.classList.add("open"); if (overlayEl) overlayEl.classList.add("active"); }
function closeNav() { if (mainNav) mainNav.classList.remove("open"); if (overlayEl) overlayEl.classList.remove("active"); }

if (navToggle) navToggle.addEventListener("click", openNav);
if (overlayEl) overlayEl.addEventListener("click", closeNav);

/* --- LIBRARY DRAWER --- */
function openLibrary() { if (libraryPanel) libraryPanel.classList.add("open"); if (overlayEl) overlayEl.classList.add("active"); }
function closeLibrary() { if (libraryPanel) libraryPanel.classList.remove("open"); if (overlayEl) overlayEl.classList.remove("active"); }

if (libraryCloseBtn) libraryCloseBtn.addEventListener("click", closeLibrary);

/* Filter system — updated for .filter class */
function applyFilter(filterKey) {
    const filterMap = { all: null, health: "health", mind: "mind", career: "career", relationships: "harmony" };
    const target = filterMap[filterKey] || String(filterKey).toLowerCase();
    document.querySelectorAll(".raag-card").forEach(item => {
        const raag = raagData[Number(item.dataset.index)];
        if (!raag) return;
        const visible = target === null || raag.category.toLowerCase() === target;
        item.style.display = visible ? "" : "none";
    });
}

function setupFilters() {
    const filterBtns = document.querySelectorAll(".filter");
    filterBtns.forEach((button) => {
        button.addEventListener("click", () => {
            activeFilter = button.dataset.filter || "all";
            filterBtns.forEach(b => b.classList.remove("active"));
            button.classList.add("active");
            applyFilter(activeFilter);
        });
    });
}

/* Initialize filters on load */
setupFilters();

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — —
// SEARCH — REMOVED
// — — — — — — — — — — — — — — — — — — — — — — — — — — — — —
/* 
   Search has been intentionally removed from the new UI.
   The following are no longer present in the JavaScript:
   - searchInput reference and event listener
   - searchResults reference and rendering
   - clearSearchBtn and its listener
   - searchRaags() function
   - Any DOM manipulation related to search results
   All search-related code has been pruned. The search input and results
   divs have been removed from the HTML.
*/

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — —
// YOUTUBE PLAYER INTEGRATION — IMPROVED
// — — — — — — — — — — — — — — — — — — — — — — — — — — — — —

/* Create the YouTube player */
function createPlayer() {
    if (player) return;
    try {
        player = new YT.Player("youtube-player", {
            width: 1, height: 1,
            playerVars: { listType: "playlist", list: PLAYLIST_ID, autoplay: 0, controls: 0, rel: 0, modestbranding: 1, playsinline: 1, enablejsapi: 1, origin: window.location.origin },
            events: { onReady: onPlayerReady, onStateChange: onPlayerStateChange, onError: onPlayerError }
        });
    } catch (e) { console.error("YouTube player creation failed:", e); }
}

function onPlayerReady() {
    youtubeReady = true;
    /* If a track was pending play, play it now */
    if (pendingPlayIndex !== null) {
        try { playRaag(pendingPlayIndex); pendingPlayIndex = null; }
        catch (e) { console.error("Pending play error:", e); }
    }
    else {
        syncTrack();
    }
    waitForPlaylist();
}

/* Poll for playlist — with timeout protection */
function waitForPlaylist() {
    if (!player || typeof player.getPlaylist !== "function") {
        setTimeout(waitForPlaylist, 500);
        return;
    }
    const list = player.getPlaylist();
    if (Array.isArray(list) && list.length > 0) {
        playlistLoaded = true;
        /* Play the pending track, or sync to current */
        if (pendingPlayIndex !== null) {
            try { playRaag(pendingPlayIndex); pendingPlayIndex = null; }
            catch (e) { console.error("Pending play error in waitForPlaylist:", e); }
        }
        else { syncTrack(); }
        return;
    }
    /* Retry after short interval */
    setTimeout(waitForPlaylist, 500);
}

/* Handle YouTube player state changes */
function onPlayerStateChange(event) {
    if (!window.YT) return;
    switch (event.data) {
        case YT.PlayerState.PLAYING: 
            isPlaying = true; 
            updatePlayIcon(true); 
            if (playerContainer) playerContainer.classList.add("playing"); 
            startProgress(); 
            break;
        case YT.PlayerState.PAUSED: 
            isPlaying = false; 
            updatePlayIcon(false); 
            if (playerContainer) playerContainer.classList.remove("playing"); 
            stopProgress(); 
            break;
        case YT.PlayerState.ENDED: 
            isPlaying = false; 
            updatePlayIcon(false); 
            if (playerContainer) playerContainer.classList.remove("playing"); 
            stopProgress(); 
            /* Optional: auto-play next */
            // nextTrack(); 
            break;
    }
}

function onPlayerError(e) { 
    console.error("YouTube player error:", e); 
    /* Show user-friendly feedback */
    if (currentTimeEl) currentTimeEl.textContent = "Error";
    if (durationEl) durationEl.textContent = "Error";
}

/* Load YouTube IFrame API */
function loadYouTubeAPI() {
    if (window.YT && window.YT.Player) { createPlayer(); return; }
    window.onYouTubeIframeAPIReady = function () { createPlayer(); };
    const s = document.createElement("script");
    s.src = "https://www.youtube.com/iframe_api";
    s.async = true;
    /* Don't block page load */
    document.head.appendChild(s);
}

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — —
// PROGRESS SEEK + TIMER — OPTIMIZED
// — — — — — — — — — — — — — — — — — — — — — — — — — — — — —

function seek(event) {
    if (!player || !progressContainer) return;
    const duration = Number(player.getDuration()) || 0;
    if (!duration) return;
    const rect = progressContainer.getBoundingClientRect();
    if (!rect.width) return;
    const percentage = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
    try { player.seekTo(duration * percentage, true); updateProgress(); } catch (e) { console.error("Seek error:", e); }
}

if (progressContainer) progressContainer.addEventListener("click", seek);

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

/* Progress timer — reduced from 250ms to 500ms for performance */
function startProgress() { 
    if (progressTimer) clearInterval(progressTimer); 
    progressTimer = setInterval(updateProgress, 500); 
}
function stopProgress() { if (progressTimer) clearInterval(progressTimer); progressTimer = null; }

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — —
// VOLUME CONTROL — PRESERVED & FIXED
// — — — — — — — — — — — — — — — — — — — — — — — — — — — — —

function setVolumeIcon(value) {
    if (!muteBtn) return;
    const icon = muteBtn.querySelector("i");
    if (!icon) return;
    if (value <= 0) icon.className = "fa-solid fa-volume-mute";
    else if (value < 50) icon.className = "fa-solid fa-volume-down";
    else icon.className = "fa-solid fa-volume-up";
}

if (volumeSlider) {
    volumeSlider.value = DEFAULT_VOLUME;
    volumeSlider.addEventListener("input", (event) => {
        const volume = Math.max(0, Math.min(100, Number(event.target.value)));
        if (player) { 
            try { player.unMute(); player.setVolume(volume); } 
            catch (e) { console.error("Volume set error:", e); } 
        }
        if (volume > 0) { preMuteVolume = volume; isMuted = false; }
        else { isMuted = true; }
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
                player.unMute(); player.setVolume(volume);
                if (volumeSlider) volumeSlider.value = volume;
                if (volumeValueEl) volumeValueEl.textContent = volume;
                isMuted = false; setVolumeIcon(volume);
            } else {
                if (volumeSlider) { preMuteVolume = Number(volumeSlider.value) || DEFAULT_VOLUME; volumeSlider.value = 0; }
                if (volumeValueEl) volumeValueEl.textContent = 0;
                player.mute(); isMuted = true; setVolumeIcon(0);
            }
        } catch (e) { console.error("Mute toggle error:", e); }
    });
}

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — —
// TRACK COUNTER — FIXED
// — — — — — — — — — — — — — — — — — — — — — — — — — — — — —
/* 
   Fixed: only references #track-counter which exists in the new HTML.
   No more erroneous references to non-existent IDs (raag-counter, track-number, etc.).
   Updated on: track selection, next, previous, playlist changes.
*/

function updateTrackCounter(index) {
    if (trackCounterEl) trackCounterEl.textContent = `${String(index + 1).padStart(2, "0")} / ${TOTAL_TRACKS}`;
}

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — —
// NEXT / PREVIOUS TRACK
// — — — — — — — — — — — — — — — — — — — — — — — — — — — — —

function nextTrack() {
    if (!youtubeReady || !player || !playlistLoaded) return;
    try { player.nextVideo(); setTimeout(syncTrack, 500); } catch (e) { console.error("Next track error:", e); }
}

function previousTrack() {
    if (!youtubeReady || !player || !playlistLoaded) return;
    try { player.previousVideo(); setTimeout(syncTrack, 500); } catch (e) { console.error("Prev track error:", e); }
}

if (nextBtn) nextBtn.addEventListener("click", nextTrack);
if (prevBtn) prevBtn.addEventListener("click", previousTrack);

/* Sync track info from YouTube player state */
function syncTrack() {
    if (!player) return;
    try { currentIndex = player.getPlaylistIndex(); } catch (e) { console.error("Sync track error:", e); }
    showRaag(currentIndex, false);
}

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — —
// KEYBOARD SHORTCUTS — PRESERVED & ENHANCED
// — — — — — — — — — — — — — — — — — — — — — — — — — — — — —

document.addEventListener("keydown", (e) => {
    /* Skip controls if focus is inside a form element */
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA" || e.target.tagName === "BUTTON") return;
    
    if (e.code === "Space") { e.preventDefault(); togglePlay(); }
    if (e.key.toLowerCase() === "n") nextTrack();
    if (e.key.toLowerCase() === "p") previousTrack();
    if (e.key === "Escape") { 
        closeLibrary(); 
        closeNav(); 
    }
});

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — —
// INITIALISE
// — — — — — — — — — — — — — — — — — — — — — — — — — — — — —

function initialiseRaagly() {
    /* Render UI components */
    renderRaagCards();
    renderLibrary();
    
    /* Load YouTube API */
    loadYouTubeAPI();
}

/* Auto-init if DOM already loaded, otherwise wait */
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initialiseRaagly); 
else initialiseRaagly();
