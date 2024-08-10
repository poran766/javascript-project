function drumKitSound(e) {
  const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
  const audioKey = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
  if (!audio) {
    return;
  }
  audio.currentTime = 0;
  audio.play();
  audioKey.classList.add("playing");
}
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  //   console.log(e.propertyName);
  //   console.log(this)

  this.classList.remove("playing");
}

const audioKeys = document.querySelectorAll(".key");
audioKeys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", drumKitSound);
