```js
/* =========================================================
   RAAGLY — SCRIPT.JS
   YouTube Playlist ↔ Raag metadata fixed
   Playlist: PLJRipbfj__b0
   ========================================================= */

let player = null;
let isPlaying = false;
let progressTimer = null;
let isMuted = false;
let preMuteVolume = 80;

const playlistId = "PLJRipbfj__b0";

/* =========================================================
   RAAG DATA
   IMPORTANT:
   This order MUST match the YouTube playlist order.
   ========================================================= */

const raagData = [

  {
    name: "Raag Bhimpalasi",
    time: "Afternoon",
    bgColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    desc: "🌿 Mood: Brings emotional balance and calmness.\n🧘 Mind: Encourages introspection, relaxation and inner peace."
  },

  {
    name: "Raag Darbari",
    time: "Late Night",
    bgColor: "linear-gradient(135deg, #09203f 0%, #537895 100%)",
    desc: "🌿 Mind: Deeply calming and introspective.\n🧘 Vibe: Creates a dignified, peaceful atmosphere."
  },

  {
    name: "Raag Shuddh Sarang",
    time: "Afternoon",
    bgColor: "linear-gradient(135deg, #56ccf2 0%, #2f80ed 100%)",
    desc: "☀️ Vibe: Bright, refreshing and uplifting.\n🧘 Mind: Helps create clarity and emotional freshness."
  },

  {
    name: "Raag Komal Asavari",
    time: "Morning",
    bgColor: "linear-gradient(135deg, #8360c3 0%, #2ebf91 100%)",
    desc: "🌿 Vibe: Gentle and contemplative.\n🧘 Mind: Encourages emotional release and quiet reflection."
  },

  {
    name: "Raag Yaman",
    time: "Evening",
    bgColor: "linear-gradient(135deg, #141e30 0%, #243b55 100%)",
    desc: "🧘 Mind: Soothes emotional grief and encourages peace.\n✨ Vibe: Graceful, serene and deeply calming."
  },

  {
    name: "Raag Hansdhawani",
    time: "Evening",
    bgColor: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
    desc: "🧘 Mind: Restores inner stillness and emotional joy.\n✨ Vibe: Light, bright and uplifting."
  },

  {
    name: "Raag Bhairavi",
    time: "Morning / Closing Raag",
    bgColor: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
    desc: "🌿 Vibe: Deeply emotional and devotional.\n🧘 Mind: Encourages acceptance, reflection and peaceful closure."
  },

  {
    name: "Raag Asavari",
    time: "Late Morning",
    bgColor: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
    desc: "🌿 Vibe: Soft, introspective and soothing.\n🧘 Mind: Supports relaxation and emotional balance."
  },

  {
    name: "Raag Todi",
    time: "Late Morning",
    bgColor: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
    desc: "🧘 Mind: Deeply contemplative and introspective.\n✨ Vibe: Encourages stillness and focused listening."
  },

  {
    name: "Raag Kalyan",
    time: "Evening",
    bgColor: "linear-gradient(135deg, #ff0844 0%, #ffb199 100%)",
    desc: "✨ Vibe: Expansive, graceful and uplifting.\n🧘 Mind: Creates optimism, calmness and emotional openness."
  },

  {
    name: "Raag Poorvi",
    time: "Evening",
    bgColor: "linear-gradient(135deg, #f12711 0%, #f5af19 100%)",
    desc: "🌅 Vibe: Serious, rich and contemplative.\n🧘 Mind: Encourages concentration and inner awareness."
  },

  {
    name: "Raag Nat Bhairav",
    time: "Morning",
    bgColor: "linear-gradient(135deg, #f12711 0%, #f5af19 100%)",
    desc: "🌅 Vibe: Strong morning energy.\n🧘 Mind: Encourages confidence, clarity and emotional stability."
  },

  {
    name: "Raag Brindabani Sarang",
    time: "Afternoon",
    bgColor: "linear-gradient(135deg, #13547a 0%, #80d0c7 100%)",
    desc: "🌿 Vibe: Refreshing and peaceful.\n🧘 Mind: Creates a light, affectionate and joyful atmosphere."
  },

  {
    name: "Raag Shuddh Kalyan",
    time: "Evening",
    bgColor: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
    desc: "✨ Vibe: Serene and luminous.\n🧘 Mind: Encourages peace, clarity and gentle positivity."
  },

  {
    name: "Raag Jaunpuri",
    time: "Late Morning",
    bgColor: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    desc: "🌿 Vibe: Reflective and expressive.\n🧘 Mind: Supports emotional release and calm concentration."
  },

  {
    name: "Raag Kirwani",
    time: "Evening",
    bgColor: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    desc: "🧘 Mind: Emotional, peaceful and meditative.\n✨ Vibe: Helps create a soothing atmosphere for deep listening."
  },

  {
    name: "Raag Neelambri",
    time: "Night",
    bgColor: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    desc: "🌙 Vibe: Gentle and lullaby-like.\n🧘 Mind: Encourages relaxation and peaceful nighttime listening."
  },

  {
    name: "Raag Malkauns",
    time: "Late Night",
    bgColor: "linear-gradient(135deg, #200122 0%, #6f0000 100%)",
    desc: "🧘 Mind: Deep meditative focus and inner strength.\n🌙 Vibe: Powerful, mysterious and contemplative."
  },

  {
    name: "Raag Bhairav",
    time: "Early Morning",
    bgColor: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
    desc: "🌅 Vibe: Powerful morning awakening energy.\n🧘 Mind: Encourages focus, discipline and inner stillness."
  },

  {
    name: "Raag Lalit",
    time: "Early Dawn",
    bgColor: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
    desc: "🌅 Vibe: Dawn-like, delicate and contemplative.\n🧘 Mind: Creates a peaceful transition into the morning."
  },

  {
    name: "Raag Bhoop",
    time: "Evening",
    bgColor: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
    desc: "🧘 Mind: Instills tranquility and mental composure.\n✨ Vibe: Simple, pure and uplifting."
  },

  {
    name: "Raag Madhuwanti",
    time: "Afternoon / Evening",
    bgColor: "linear-gradient(135deg, #37ecba 0%, #72aff3 100%)",
    desc: "🧘 Mind: Gentle, romantic and soothing.\n✨ Vibe: Soft emotional warmth with a peaceful dusk feeling."
  },

  {
    name: "Raag Pilu",
    time: "Flexible",
    bgColor: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
    desc: "🧘 Mind: Brings gentle joy and lightheartedness.\n✨ Vibe: Expressive, sweet and emotionally warm."
  },

  {
    name: "Raag Shivranjani",
    time: "Evening / Night",
    bgColor: "linear-gradient(135deg, #ff0844 0%, #ffb199 100%)",
    desc: "🧘 Mind: Deeply emotional and introspective.\n✨ Vibe: Melancholic yet soothing and expressive."
  },

  {
    name: "Raag Jay Jaywanti",
    time: "Evening",
    bgColor: "linear-gradient(135deg, #b92b27 0%, #1565c0 100%)",
    desc: "✨ Vibe: Expressive, graceful and uplifting.\n🧘 Mind: Encourages emotional freshness and renewed energy."
  },

  {
    name: "Raag Khamaj",
    time: "Late Evening",
    bgColor: "linear-gradient(135deg, #a8ff78 0%, #78ffd6 100%)",
    desc: "🌿 Vibe: Sweet, romantic and relaxed.\n🧘 Mind: Induces soothing emotional ease."
  },

  {
    name: "Tanpura",
    time: "Continuous Drone",
    bgColor: "linear-gradient(135deg, #2b5876 0%, #4e4376 100%)",
    desc: "🎵 Vibe: Pure sustained tonal foundation.\n🧘 Mind: Ideal for meditation, riyaaz, deep listening and creating a calm sonic space."
  }

];


/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const raagName = document.getElementById("raag-name");
const raagTime = document.getElementById("raag-time");
const raagDesc = document.getElementById("raag-desc");

const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const playerContainer = document.querySelector(".player-container");
const body = document.getElementById("app-body") || document.body;

const progressContainer =
  document.getElementById("progress-container");

const progressBar =
  document.getElementById("progress");

const currentTimeEl =
  document.getElementById("current-time");

const durationEl =
  document.getElementById("duration");

const volumeSlider =
  document.getElementById("volume-slider");

const muteBtn =
  document.getElementById("mute-btn");

const searchInput =
  document.getElementById("search-input");

const searchResults =
  document.getElementById("search-results");


/* =========================================================
   YOUTUBE IFRAME API
   ========================================================= */

const tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";

const firstScriptTag =
  document.getElementsByTagName("script")[0];

if (firstScriptTag) {
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
} else {
  document.head.appendChild(tag);
}


/* =========================================================
   YOUTUBE READY
   ========================================================= */

window.onYouTubeIframeAPIReady = function () {

  player = new YT.Player("youtube-player", {

    height: "1",
    width: "1",

    playerVars: {
      listType: "playlist",
      list: playlistId,
      autoplay: 0,
      controls: 0,
      rel: 0,
      modestbranding: 1,
      playsinline: 1
    },

    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
      onError: onPlayerError
    }

  });

};


/* =========================================================
   PLAYER READY
   ========================================================= */

function onPlayerReady() {

  player.setVolume(preMuteVolume);

  /*
    YouTube playlist metadata can take a moment to load.
    Try several times until the playlist index becomes available.
  */

  let attempts = 0;

  const waitForPlaylist = setInterval(() => {

    attempts++;

    if (
      player &&
      typeof player.getPlaylistIndex === "function"
    ) {

      const playlist = player.getPlaylist();

      if (playlist && playlist.length > 0) {

        clearInterval(waitForPlaylist);

        updateTrackInfo();

        return;
      }
    }

    if (attempts >= 20) {
      clearInterval(waitForPlaylist);
      updateTrackInfo();
    }

  }, 500);

}


/* =========================================================
   GET CURRENT PLAYLIST INDEX
   ========================================================= */

function getCurrentIndex() {

  if (
    !player ||
    typeof player.getPlaylistIndex !== "function"
  ) {
    return 0;
  }

  let index = player.getPlaylistIndex();

  if (
    index === undefined ||
    index === null ||
    index < 0
  ) {
    index = 0;
  }

  return index % raagData.length;
}


/* =========================================================
   UPDATE RAAG UI
   ========================================================= */

function updateTrackInfo() {

  if (!raagData.length) return;

  const index = getCurrentIndex();

  const data = raagData[index];

  if (!data) return;

  if (raagName) {
    raagName.textContent = data.name;
  }

  if (raagTime) {
    raagTime.textContent = data.time;
  }

  if (raagDesc) {
    raagDesc.textContent = data.desc;
  }

  if (body) {
    body.style.background = data.bgColor;
  }

  /*
    Restart text animation.
  */

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


/* =========================================================
   TIME FORMAT
   ========================================================= */

function formatTime(seconds) {

  if (
    isNaN(seconds) ||
    seconds === null ||
    seconds < 0
  ) {
    return "0:00";
  }

  const mins =
    Math.floor(seconds / 60);

  const secs =
    Math.floor(seconds % 60);

  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;

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
    player.getCurrentTime() || 0;

  const duration =
    player.getDuration() || 0;

  if (duration > 0) {

    const percentage =
      (current / duration) * 100;

    if (progressBar) {
      progressBar.style.width =
        `${Math.min(100, Math.max(0, percentage))}%`;
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

}


/* =========================================================
   PROGRESS TIMER
   ========================================================= */

function startProgressTimer() {

  stopProgressTimer();

  progressTimer =
    setInterval(updateProgress, 250);

}


function stopProgressTimer() {

  if (progressTimer) {

    clearInterval(progressTimer);

    progressTimer = null;

  }

}


/* =========================================================
   SEEK
   ========================================================= */

if (progressContainer) {

  progressContainer.addEventListener("click", (event) => {

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

    const clickX =
      event.clientX - rect.left;

    const percentage =
      Math.min(
        1,
        Math.max(
          0,
          clickX / rect.width
        )
      );

    const seekTime =
      percentage * duration;

    player.seekTo(seekTime, true);

    updateProgress();

  });

}


/* =========================================================
   PLAY / PAUSE
   ========================================================= */

if (playBtn) {

  playBtn.addEventListener("click", () => {

    if (!player) return;

    if (isPlaying) {

      player.pauseVideo();

    } else {

      player.playVideo();

    }

  });

}


/* =========================================================
   YOUTUBE STATE CHANGE
   ========================================================= */

function onPlayerStateChange(event) {

  if (!window.YT) return;

  if (event.data === YT.PlayerState.PLAYING) {

    isPlaying = true;

    if (playerContainer) {
      playerContainer.classList.add("play");
    }

    updatePlayIcon(true);

    updateTrackInfo();

    startProgressTimer();

  }


  else if (
    event.data === YT.PlayerState.PAUSED
  ) {

    isPlaying = false;

    if (playerContainer) {
      playerContainer.classList.remove("play");
    }

    updatePlayIcon(false);

    stopProgressTimer();

    updateProgress();

  }


  else if (
    event.data === YT.PlayerState.ENDED
  ) {

    isPlaying = false;

    if (playerContainer) {
      playerContainer.classList.remove("play");
    }

    updatePlayIcon(false);

    stopProgressTimer();

    updateProgress();

    /*
      IMPORTANT:
      Let YouTube playlist advance naturally.
      We do NOT manually call nextVideo() here,
      because doing so can cause skipped tracks.
    */

    setTimeout(() => {
      updateTrackInfo();
    }, 700);

  }

}


/* =========================================================
   PLAY BUTTON ICON
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

if (nextBtn) {

  nextBtn.addEventListener("click", () => {

    if (
      !player ||
      typeof player.nextVideo !== "function"
    ) {
      return;
    }

    player.nextVideo();

    /*
      YouTube updates playlist index asynchronously.
    */

    setTimeout(updateTrackInfo, 700);

  });

}


/* =========================================================
   PREVIOUS
   ========================================================= */

if (prevBtn) {

  prevBtn.addEventListener("click", () => {

    if (
      !player ||
      typeof player.previousVideo !== "function"
    ) {
      return;
    }

    player.previousVideo();

    setTimeout(updateTrackInfo, 700);

  });

}


/* =========================================================
   VOLUME
   ========================================================= */

if (volumeSlider) {

  volumeSlider.addEventListener("input", (event) => {

    const value =
      Number(event.target.value);

    if (
      player &&
      typeof player.setVolume === "function"
    ) {

      player.unMute();
      player.setVolume(value);

    }

    if (value === 0) {

      isMuted = true;

      updateVolumeIcon("mute");

    } else {

      isMuted = false;

      if (value < 50) {
        updateVolumeIcon("low");
      } else {
        updateVolumeIcon("high");
      }

    }

  });

}


/* =========================================================
   MUTE
   ========================================================= */

if (muteBtn) {

  muteBtn.addEventListener("click", () => {

    if (!player) return;

    if (isMuted) {

      const volume =
        Number(preMuteVolume) || 80;

      player.unMute();
      player.setVolume(volume);

      if (volumeSlider) {
        volumeSlider.value = volume;
      }

      isMuted = false;

      if (volume < 50) {
        updateVolumeIcon("low");
      } else {
        updateVolumeIcon("high");
      }

    } else {

      if (volumeSlider) {
        preMuteVolume =
          Number(volumeSlider.value) || 80;
      }

      player.mute();

      if (volumeSlider) {
        volumeSlider.value = 0;
      }

      isMuted = true;

      updateVolumeIcon("mute");

    }

  });

}


/* =========================================================
   VOLUME ICON
   ========================================================= */

function updateVolumeIcon(type) {

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

if (
  searchInput &&
  searchResults
) {

  searchInput.addEventListener(
    "input",
    (event) => {

      const query =
        event.target.value
          .toLowerCase()
          .trim();

      searchResults.innerHTML = "";

      if (!query) {

        searchResults.style.display =
          "none";

        return;

      }

      const matches =
        raagData
          .map((item, index) => ({
            ...item,
            index
          }))
          .filter((item) => {

            const searchable =
              `${item.name} ${item.time} ${item.desc}`
                .toLowerCase();

            return searchable.includes(query);

          });


      if (!matches.length) {

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

        matches.forEach((item) => {

          const li =
            document.createElement("li");

          const strong =
            document.createElement("strong");

          strong.textContent =
            item.name;

          const small =
            document.createElement("span");

          const firstLine =
            item.desc
              .split("\n")[0];

          small.textContent =
            `${item.time} • ${firstLine}`;

          small.style.display =
            "block";

          small.style.fontSize =
            "11px";

          small.style.opacity =
            "0.7";

          li.appendChild(strong);
          li.appendChild(small);

          li.addEventListener(
            "click",
            () => {

              playRaag(item.index);

              searchInput.value =
                "";

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
  );


  document.addEventListener(
    "click",
    (event) => {

      if (
        !searchInput.contains(event.target) &&
        !searchResults.contains(event.target)
      ) {

        searchResults.style.display =
          "none";

      }

    }
  );

}


/* =========================================================
   PLAY SPECIFIC RAAG
   ========================================================= */

function playRaag(index) {

  if (
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
    Update UI immediately.
    Then tell YouTube to play the exact playlist index.
  */

  updateTrackInfoForIndex(index);

  player.playVideoAt(index);

  setTimeout(() => {
    updateTrackInfo();
  }, 700);

}


/* =========================================================
   IMMEDIATE UI UPDATE FOR SEARCH
   ========================================================= */

function updateTrackInfoForIndex(index) {

  const data =
    raagData[index];

  if (!data) return;

  if (raagName) {
    raagName.textContent =
      data.name;
  }

  if (raagTime) {
    raagTime.textContent =
      data.time;
  }

  if (raagDesc) {
    raagDesc.textContent =
      data.desc;
  }

  if (body) {
    body.style.background =
      data.bgColor;
  }

}


/* =========================================================
   YOUTUBE ERROR
   ========================================================= */

function onPlayerError(event) {

  console.warn(
    "YouTube Player Error:",
    event.data
  );

}


/* =========================================================
   INITIAL DEFAULT UI
   ========================================================= */

function setInitialTrack() {

  const data =
    raagData[0];

  if (!data) return;

  if (raagName) {
    raagName.textContent =
      data.name;
  }

  if (raagTime) {
    raagTime.textContent =
      data.time;
  }

  if (raagDesc) {
    raagDesc.textContent =
      data.desc;
  }

  if (body) {
    body.style.background =
      data.bgColor;
  }

}

setInitialTrack();


/* =========================================================
   OPTIONAL KEYBOARD CONTROLS
   ========================================================= */

document.addEventListener(
  "keydown",
  (event) => {

    /*
      Don't hijack typing inside search.
    */

    if (
      event.target.tagName === "INPUT" ||
      event.target.tagName === "TEXTAREA"
    ) {
      return;
    }

    if (event.code === "Space") {

      event.preventDefault();

      if (!player) return;

      if (isPlaying) {
        player.pauseVideo();
      } else {
        player.playVideo();
      }

    }

    if (event.code === "ArrowRight") {

      if (
        player &&
        player.getCurrentTime &&
        player.getDuration
      ) {

        const nextTime =
          Math.min(
            player.getCurrentTime() + 5,
            player.getDuration()
          );

        player.seekTo(nextTime, true);

      }

    }

    if (event.code === "ArrowLeft") {

      if (
        player &&
        player.getCurrentTime
      ) {

        const previousTime =
          Math.max(
            player.getCurrentTime() - 5,
            0
          );

        player.seekTo(previousTime, true);

      }

    }

  }
);
```
