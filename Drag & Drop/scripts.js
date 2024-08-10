// let lists = document.getElementsByClassName("list");
// let leftBox = document.getElementById("left");
// let rightBox = document.getElementById("right");
// for (list of lists) {
//   list.addEventListener("dragstart", function (e) {
//     let selected = e.target;
//     rightBox.addEventListener("dragover", function (e) {
//       e.preventDefault();
//     });
//     rightBox.addEventListener("drop", function (e) {
//       rightBox.appendChild(selected);
//       selected = null;
//     });
//     leftBox.addEventListener("dragover", function (e) {
//       e.preventDefault();
//     });
//     leftBox.addEventListener("drop", function (e) {
//       leftBox.appendChild(selected);
//       selected = null;
//     });
//   });
// }



let lists = document.getElementsByClassName("list");
let leftBox = document.getElementById("left");
let rightBox = document.getElementById("right");
let selected = null;

// Add event listeners for each list item
for (let list of lists) {
  list.addEventListener("dragstart", function (e) {
    selected = e.target;
    e.dataTransfer.setData("text/plain", "");
  });
}

// Add dragover event listeners for both boxes
rightBox.addEventListener("dragover", function (e) {
  e.preventDefault();
});

leftBox.addEventListener("dragover", function (e) {
  e.preventDefault();
});

// Add drop event listeners for both boxes
rightBox.addEventListener("drop", function (e) {
  if (selected) {
    rightBox.appendChild(selected); // Append the selected item to the right box
    selected = null; // Reset the selected variable
  }
});

leftBox.addEventListener("drop", function (e) {
  if (selected) {
    leftBox.appendChild(selected); // Append the selected item to the left box
    selected = null; // Reset the selected variable
  }
});

