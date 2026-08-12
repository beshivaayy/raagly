/* =========================================================
   RAAGLY — SCRIPT.JS (Text-only, Benefits on Cards)
   ========================================================= */

"use strict";

const PLAYLIST_ID = "PLJRipbfj__b0";
const DEFAULT_VOLUME = 80;
const TOTAL_TRACKS = 27;

const raagData = [
    { name: "Raag Bhimpalasi", time: "Afternoon", category: "Mind", bg: "linear-gradient(135deg,#1c0b2e,#4a1259)", desc: "Encourages relaxation, introspection and emotional balance." },
    { name: "Raag Darbari Kanada", time: "Late Night", category: "Mind", bg: "linear-gradient(135deg,#0f0620,#241041)", desc: "Healing: Heart disease, child-related issues, honor, positioning in life, and paternal/government relations." },
    { name: "Raag Shuddh Sarang", time: "Afternoon", category: "Health", bg: "linear-gradient(135deg,#170a28,#3a1256)", desc: "Healing: Mental peace, maternal relations, family harmony, trauma, and intangible happiness." },
    { name: "Raag Komal Rishabh Asavari", time: "Morning", category: "Mind", bg: "linear-gradient(135deg,#2a1608,#a3651e)", desc: "Healing: Mental peace, maternal relations, calmness, family harmony, and emotional trauma." },
    { name: "Raag Yaman", time: "Evening", category: "Harmony", bg: "linear-gradient(135deg,#240a1a,#6b1030)", desc: "Healing: Mental peace, maternal relations, happiness, family atmosphere, and emotional pain." },
    { name: "Raag Hamsadhwani", time: "Evening", category: "Mind", bg: "linear-gradient(135deg,#2b0714,#800020)", desc: "Healing: Mental peace, maternal relations, happiness, calmness, family harmony, and trauma." },
    { name: "Raag Bhairavi", time: "Morning / Closing", category: "Mind", bg: "linear-gradient(135deg,#3a2408,#8a6216)", desc: "Healing: Insomnia, property-related issues, blood-related problems, violence, and accidents." },
    { name: "Raag Asavari", time: "Late Morning", category: "Health", bg: "linear-gradient(135deg,#241206,#b8862c)", desc: "Healing: Property-related issues, blood-related problems, violence, and accidents." },
    { name: "Raag Desi Todi", time: "Late Morning", category: "Mind", bg: "linear-gradient(135deg,#241005,#96591a)", desc: "Healing: Property-related issues, blood-related problems, violence, and accidents." },
    { name: "Raag Kalyan", time: "Evening", category: "Harmony", bg: "linear-gradient(135deg,#2b0a1f,#7a1f4a)", desc: "Healing: Education troubles, sibling conflicts, thyroid/hormonal imbalances, and communication." },
    { name: "Raag Poorvi", time: "Evening", category: "Career", bg: "linear-gradient(135deg,#210817,#5c0e2a)", desc: "Healing: Education troubles, sibling conflicts, hormonal imbalances, and business." },
    { name: "Raag Nat Bhairav", time: "Morning", category: "Career", bg: "linear-gradient(135deg,#331f07,#7d5813)", desc: "Healing: Relationship issues and money-related financial troubles." },
    { name: "Raag Vrindavani Sarang", time: "Afternoon", category: "Harmony", bg: "linear-gradient(135deg,#190a2c,#42125a)", desc: "Healing: Relationship issues and money-related financial troubles." },
    { name: "Raag Shuddh Kalyan", time: "Evening", category: "Mind", bg: "linear-gradient(135deg,#280613,#73001c)", desc: "Encourages peace, clarity and gentle positivity." },
    { name: "Raag Jaunpuri", time: "Late Morning", category: "Health", bg: "linear-gradient(135deg,#201004,#a3761f)", desc: "Healing: Profession-related issues, long-term diseases, and chronic troubles." },
    { name: "Raag Kirwani", time: "Evening", category: "Mind", bg: "linear-gradient(135deg,#22081a,#680f31)", desc: "Healing: Profession-related issues, long-term diseases, and chronic troubles." },
    { name: "Raag Neelambari", time: "Night", category: "Mind", bg: "linear-gradient(135deg,#0d051b,#2c1348)", desc: "Healing: Profession-related issues, long-term diseases, and chronic troubles." },
    { name: "Raag Malkauns", time: "Late Night", category: "Mind", bg: "linear-gradient(135deg,#0a0416,#1f0e38)", desc: "Healing: Provides relief from Asthma." },
    { name: "Raag Bhairav", time: "Early Morning", category: "Health", bg: "linear-gradient(135deg,#291505,#b46f22)", desc: "Healing: Provides relief from Headaches." },
    { name: "Raag Lalit", time: "Early Dawn", category: "Mind", bg: "linear-gradient(135deg,#2c1809,#8f5a1c)", desc: "Healing: Provides relief from Asthma." },
    { name: "Raag Bhoop", time: "Evening", category: "Harmony", bg: "linear-gradient(135deg,#280a1c,#821f4f)", desc: "Healing: Regulates and maintains Blood Pressure." },
    { name: "Raag Madhuwanti", time: "Afternoon / Evening", category: "Mind", bg: "linear-gradient(135deg,#1a0a2b,#4d1560)", desc: "Healing: Helps combat depression and mental stress." },
    { name: "Raag Pilu", time: "Flexible", category: "Harmony", bg: "linear-gradient(135deg,#221305,#c08a2a)", desc: "Healing: Beneficial for those suffering from Anemia." },
    { name: "Raag Shivaranjani", time: "Evening / Night", category: "Mind", bg: "linear-gradient(135deg,#250611,#6e0a26)", desc: "Healing: Improves retention and helps with memory loss." },
    { name: "Raag Jaijaiwanti", time: "Evening", category: "Mind", bg: "linear-gradient(135deg,#1f0817,#5e1234)", desc: "Healing: Overcomes physical and mental weakness." },
    { name: "Raag Khamaj", time: "Late Evening", category: "Harmony", bg: "linear-gradient(135deg,#26081c,#791c4c)", desc: "Healing: Provides relief from acidity and indigestion." },
    { name: "Tanpura", time: "Continuous Drone", category: "Health", bg: "linear-gradient(135deg,#120823,#38134f)", desc: "Healing: Child-related problems, honor, positioning in life, and relations with father/government." }
];

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
const playerContainer = document.querySelector(".player-card");

function escapeHTML(value) {
    return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
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
    ["track-counter", "raag-counter", "track-number", "current-track", "playlist-count"].forEach((id) => { const el = $(id); if (el) el.textContent = text; });
    document.querySelectorAll("[data-track-counter]").forEach((el) => { el.textContent = text; });
}

function updateActiveState(index) {
    document.querySelectorAll("[data-index]").forEach((item) => { item.classList.toggle("active", Number(item.dataset.index) === index); });
}

function renderCollections() {
    if (raagGrid) {
        raagGrid.innerHTML = "";
        raagData.forEach((raag, index) => {
            const card = document.createElement("button");
            card.type = "button";
            card.className = "raag-card";
            card.dataset.index = index;
            card.style.setProperty("--card-accent", extractAccentColor(raag.bg));
            // Updated innerHTML to include Description
            card.innerHTML = `
                <span class="raag-number">${String(index + 1).padStart(2, "0")}</span>
                <h4>${escapeHTML(raag.name)}</h4>
                <p style="font-size: 0.8rem; opacity: 0.8; margin-bottom: 5px;">${escapeHTML(raag.time)} • ${escapeHTML(raag.category)}</p>
                <p style="font-size: 0.85rem; line-height: 1.3; font-style: italic;">${escapeHTML(raag.desc)}</p>
                <span class="raag-play" style="margin-top: 10px;"><i class="fa-solid fa-play"></i></span>
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
            item.addEventListener("click", () => { playRaag(index); closeLibrary(); });
            libraryList.appendChild(item);
        });
    }
}

function openLibrary() { if (libraryPanel) libraryPanel.classList.add("open"); if (overlayEl) overlayEl.classList.add("active"); }
function closeLibrary() { if (libraryPanel) libraryPanel.classList.remove("open"); if (overlayEl) overlayEl.classList.remove("active"); }

if (libraryToggleBtn) libraryToggleBtn.addEventListener("click", openLibrary);
if (libraryCloseBtn) libraryCloseBtn.addEventListener("click", closeLibrary);
if (overlayEl) overlayEl.addEventListener("click", closeLibrary);
if (showAllBtn) showAllBtn.addEventListener("click", openLibrary);

const FILTER_MAP = { all: null, health: "health", mind: "mind", career: "career", relationships: "harmony" };
function applyFilter(filterKey) {
    const target = Object.prototype.hasOwnProperty.call(FILTER_MAP, filterKey) ? FILTER_MAP[filterKey] : String(filterKey).toLowerCase();
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

function playRaag(index) {
    if (index < 0 || index >= TOTAL_TRACKS) return;
    currentIndex = index;
    showRaag(index);
    if (!youtubeReady || !player || !playlistLoaded) { pendingPlayIndex = index; return; }
    try { player.playVideoAt(index); isPlaying = true; updatePlayIcon(true); } catch (error) { console.error(error); }
}

function togglePlay() {
    if (!youtubeReady || !player) return;
    try { isPlaying ? player.pauseVideo() : player.playVideo(); } catch (error) { console.error(error); }
}

if (playBtn) playBtn.addEventListener("click", togglePlay);
function updatePlayIcon(playing) { if (!playBtn) return; const icon = playBtn.querySelector("i"); if (icon) icon.className = playing ? "fas fa-pause" : "fas fa-play"; }
function getYouTubeIndex() { if (!player || typeof player.getPlaylistIndex !== "function") return currentIndex; const index = player.getPlaylistIndex(); return (typeof index === "number" && index >= 0 && index < TOTAL_TRACKS) ? index : currentIndex; }
function syncTrack() { showRaag(getYouTubeIndex()); }
function nextTrack() { if (!youtubeReady || !player || !playlistLoaded) return; try { player.nextVideo(); setTimeout(syncTrack, 500); } catch (error) { console.error(error); } }
function previousTrack() { if (!youtubeReady || !player || !playlistLoaded) return; try { player.previousVideo(); setTimeout(syncTrack, 500); } catch (error) { console.error(error); } }

if (nextBtn) nextBtn.addEventListener("click", nextTrack);
if (prevBtn) prevBtn.addEventListener("click", previousTrack);

function seek(event) {
    if (!player || !progressContainer) return;
    const duration = Number(player.getDuration()) || 0;
    if (!duration) return;
    const rect = progressContainer.getBoundingClientRect();
    if (!rect.width) return;
    const percentage = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
    try { player.seekTo(duration * percentage, true); updateProgress(); } catch (error) { console.error(error); }
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

function startProgress() { stopProgress(); progressTimer = setInterval(updateProgress, 250); }
function stopProgress() { if (progressTimer) clearInterval(progressTimer); progressTimer = null; }

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
        if (player) { try { player.unMute(); player.setVolume(volume); } catch (e) { } }
        if (volume > 0) { preMuteVolume = volume; isMuted = false; } else { isMuted = true; }
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
        } catch (e) { }
    });
}

function searchRaags(query) {
    if (!searchResults) return;
    searchResults.innerHTML = "";
    if (!query) { searchResults.style.display = "none"; return; }
    const results = raagData.map((raag, index) => ({ ...raag, index })).filter((raag) => [raag.name, raag.time, raag.category, raag.desc].join(" ").toLowerCase().includes(query));
    if (!results.length) {
        const empty = document.createElement("div");
        empty.className = "search-result";
        empty.textContent = "No matching Raag found";
        searchResults.appendChild(empty);
    } else {
        results.forEach((raag) => {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "search-result";
            btn.innerHTML = `<strong>${escapeHTML(raag.name)}</strong><br><small>${escapeHTML(raag.desc.substring(0, 30))}...</small>`;
            btn.addEventListener("click", () => { playRaag(raag.index); searchResults.style.display = "none"; });
            searchResults.appendChild(btn);
        });
    }
    searchResults.style.display = "block";
}

if (searchInput) { searchInput.addEventListener("input", (e) => searchRaags(e.target.value.toLowerCase().trim())); }

function createPlayer() {
    if (player) return;
    try {
        player = new YT.Player("youtube-player", {
            width: "1", height: "1",
            playerVars: { listType: "playlist", list: PLAYLIST_ID, autoplay: 0, controls: 0, rel: 0, modestbranding: 1, playsinline: 1, enablejsapi: 1, origin: window.location.origin },
            events: { onReady: onPlayerReady, onStateChange: onPlayerStateChange, onError: onPlayerError }
        });
    } catch (e) { }
}

function onPlayerReady() {
    youtubeReady = true;
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
                clearInterval(timer); playlistLoaded = true;
                if (pendingPlayIndex !== null) { playRaag(pendingPlayIndex); pendingPlayIndex = null; } else { syncTrack(); }
                return;
            }
        }
        if (attempts >= 40) { clearInterval(timer); playlistLoaded = true; showRaag(currentIndex, false); }
    }, 300);
}

function onPlayerStateChange(event) {
    if (!window.YT) return;
    switch (event.data) {
        case YT.PlayerState.PLAYING: isPlaying = true; syncTrack(); updatePlayIcon(true); if (playerContainer) playerContainer.classList.add("playing"); startProgress(); break;
        case YT.PlayerState.PAUSED: isPlaying = false; updatePlayIcon(false); if (playerContainer) playerContainer.classList.remove("playing"); stopProgress(); break;
        case YT.PlayerState.ENDED: isPlaying = false; updatePlayIcon(false); if (playerContainer) playerContainer.classList.remove("playing"); stopProgress(); break;
    }
}

function onPlayerError(e) { console.error(e); }
function loadYouTubeAPI() {
    if (window.YT && window.YT.Player) { createPlayer(); return; }
    window.onYouTubeIframeAPIReady = function () { createPlayer(); };
    const s = document.createElement("script"); s.src = "https://www.youtube.com/iframe_api"; s.async = true; document.head.appendChild(s);
}

document.addEventListener("keydown", (e) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
    if (e.code === "Space") { e.preventDefault(); togglePlay(); }
    if (e.key.toLowerCase() === "n") nextTrack();
    if (e.key.toLowerCase() === "p") previousTrack();
});

function initialiseRaagly() { showRaag(0, false); renderCollections(); setupFilters(); loadYouTubeAPI(); }
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initialiseRaagly); else initialiseRaagly();
