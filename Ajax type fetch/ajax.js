const AJAX_URL = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];
fetch(AJAX_URL)
  .then((ajaxfn) => ajaxfn.json())
  .then((data) => cities.push(...data));
function findMatches(wordToWatch, cities) {
  return cities.filter((place) => {
    //here we need to figure out if the city or state matches what was searched.

    const regex = RegExp(wordToWatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

function displayCities() {
  const matchCities = findMatches(this.value, cities);
  html = matchCities
    .map((place) => {
    //   const regex = new RegExp(this.value, "gi");
    //   const cityName = place.city.replace(regex, `<span class = "h1">${this.value}</span>`);
      return `<li>
        <span class = "name">${place.city}, ${place.state}</span>
        <span class = "population">${place.population}</span>
        </li>`;
    });
  suggestions.innerHTML = html.join('');

}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayCities);
searchInput.addEventListener("keyup", displayCities);
