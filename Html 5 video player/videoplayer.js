// get out elements

const player = document.querySelector(".player");
const video = player.querySelector(".viewer");

const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");

const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");

const ranges = player.querySelectorAll(".player__slider");

// build our function

function togglePlay() {
  // if (video.paused) {
  //   video.play();
  // } else {
  //   video.pause();
  // }

  const videoMethod = video.paused ? "play" : "pause";
  video[videoMethod]();
}

function updateButon() {
  const icon = this.paused ? "►" : "❚❚";
  toggle.textContent = icon;
}

function skip() {
  console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip);
}
function changeRange() {
  video[this.name] = this.value;
}

function progressVideo() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}
// hook the event listeners

video.addEventListener("click", togglePlay);
toggle.addEventListener("click", togglePlay);
video.addEventListener("play", updateButon);
video.addEventListener("pause", updateButon);
video.addEventListener("timeupdate", progressVideo);
skipButtons.forEach((button) => button.addEventListener("click", skip));
ranges.forEach((range) => range.addEventListener("change", changeRange));
ranges.forEach((range) => range.addEventListener("mousemove", changeRange));

progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousemove && scrub(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mouseup = false));
