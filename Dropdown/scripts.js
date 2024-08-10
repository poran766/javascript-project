const triggers = document.querySelectorAll(".cool>li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

function handleEnter() {
  //   console.log("Enter");

  this.classList.add("trigger-enter");
  setTimeout(() => this.classList.add("trigger-enter-active"), 150);
  background.classList.add("open");

  const dropdown = this.querySelector(".dropdown");
  const dropdowncoords = dropdown.getBoundingClientRect();
  const navcoords = nav.getBoundingClientRect();
  const coords = {
    height: dropdowncoords.height,
    width: dropdowncoords.width,
    top: dropdowncoords.top - navcoords.top,
    left: dropdowncoords.left - navcoords.left,
  };
  // console.log(coords)

  background.style.setProperty("width", `${coords.width}px`);
  background.style.setProperty("height", `${coords.height}px`);
  background.style.setProperty("transform", `translate(${coords.left}px, ${coords.top}px)`);
}

function handleLeave() {
  this.classList.remove("trigger-enter", "trigger-enter-active");
  background.classList.remove("open");
}

triggers.forEach((trigger) => trigger.addEventListener("mouseenter", handleEnter));
triggers.forEach((trigger) => trigger.addEventListener("mouseleave", handleLeave));
