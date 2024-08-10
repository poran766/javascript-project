const scriptURL = "https://script.google.com/macros/s/AKfycbyxGR7a3_6wKfnb1KV6JJAbYXKVrQRx8BRPpulD0uuGj-94sNWNLYbuTmdjfWiwJsnA/exec";
const form = document.forms["submit-to-google-sheet"];
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      successMsg.innerHTML = "Thank you for subscribing!";
      setTimeout(() => {
        successMsg.innerHTML = "";
      }, 4000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
