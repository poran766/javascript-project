// const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

// let lastChecked;
// function handleClick(e) {
//   let inBetween = false;
//   if (e.shiftKey && this.checked) {
//     checkboxes.forEach((checkbox) => {
//       console.log(checkbox);
//       if (checkbox === this || checkbox === lastChecked) {
//         inBetween = !inBetween;
//         // console.log("Start to check");
//       }
//       console.log("Start to check");
//       if (inBetween) {
//         checkbox.checked = true;
//       }
//     });
//   }
//   lastChecked = this;
// }

// checkboxes.forEach((checkbox) => checkbox.addEventListener("click", handleClick));

const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleClick(e) {
  let inBetween = false;

 

  if (e.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log("Start to check");
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
  console.log(lastChecked);
}

checkboxes.forEach((checkbox) => checkbox.addEventListener("click", handleClick));

