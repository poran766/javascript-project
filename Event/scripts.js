const divs = document.querySelectorAll("div");

function eventbubling(e) {
  console.log(this.classList.value);
}
divs.forEach((div) => div.addEventListener("click", eventbubling));
