const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  // console.log("hello");
  this.classList.toggle("open");
}

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));

// function addClickListener(panel) {
//   panel.addEventListener("click", toggleOpen);
// }

// panels.forEach(function(panel) {
//   addClickListener(panel);
// });

function toggleActive(event) {
  // console.log(event.propertyName);
  if (event.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}
panels.forEach((panel) => panel.addEventListener("transitionend", toggleActive));
