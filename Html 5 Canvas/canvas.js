const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 25;
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) return;

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

  ctx.beginPath();
  //start from
  ctx.moveTo(lastX, lastY);
  //go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  // lastX = e.offsetX;
  // lastY = e.offsetY;
  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  // if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
  //   direction = !direction;
  // }
  // if (direction) {
  //   ctx.lineWidth++;
  // } else {
  //   ctx.lineWidth--;
  // }
}
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mousemove", draw);

canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));

// Mouse Events:
// click,dblclick,mousedown,mouseup,mouseenter,mouseleave,mouseover,mousemove,mouseout,contextmenu,
// Keyboard Events:
// keydown, keypress,keyup,Form Events,input,change,submit,reset,focus,blur,
// Clipboard Events
// copy,cut,paste,
// Drag and Drop Events
// drag,dragstart,dragend,dragenter,dragover,dragleave,drop,
// Media Events
// play,pause,ended,volumechange,timeupdate,seeked,seeking,
// Network Events
// load,error,progress,abort,timeout,
// Touch Events
// touchstart,touchmove,touchend,touchcancel,
// UI Events
// resize,scrollwheel,animationstart,animationend,animationiteration,transitionend,
// Other Events
// DOMContentLoaded,readystatechange,visibilitychange,hashchange,popstate,beforeunload
