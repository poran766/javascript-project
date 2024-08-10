const secondHand = document.querySelector(".second-hand");
const minutesHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const date = new Date();

  // Seconds
  const seconds = date.getSeconds();
  const secondsToDegree = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsToDegree}deg)`;
  //   console.log(seconds);
  //   console.log(secondsToDegree);

  //Minutes
  const minutes = date.getMinutes();
  const minutesToDegree = (minutes / 60) * 360 + 90;
  minutesHand.style.transform = `rotate(${minutesToDegree}deg)`;

  //   console.log(minutesToDegree);
  // Hours
  const hours = date.getHours();
  const hoursToDegree = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursToDegree}deg)`;

  //   console.log(hoursToDegree);
}
setInterval(setDate, 1000);
setDate();
