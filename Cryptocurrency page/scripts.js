const bitCoin = document.getElementById("bitcoin");
const etheReum = document.getElementById("ethereum");
const dogeCoin = document.getElementById("dogecoin");

const options = { method: "GET", headers: { accept: "application/json" } };

fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd", options)
  .then((response) => response.json())
  // .then((response) => console.log(response))
  .then((response) => {
    bitCoin.innerHTML = response.bitcoin.usd;
    etheReum.innerHTML = response.ethereum.usd;
    dogeCoin.innerHTML = response.dogecoin.usd;
  })
  .catch((err) => {
    console.error("Error fetching data:", err);
    bitCoin.innerHTML = "Error";
    etheReum.innerHTML = "Error";
    dogeCoin.innerHTML = "Error";
  });
