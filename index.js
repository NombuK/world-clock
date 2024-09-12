let selectedCity = null;

function updateDate() {
  let honoluluEl = document.querySelector("#honolulu");
  let honoluluDateEl = honoluluEl.querySelector(".date");
  let honoluluTimeEl = honoluluEl.querySelector(".time");
  let honoluluTime = moment().tz("Pacific/Honolulu");

  honoluluDateEl.innerHTML = honoluluTime.format("MMMM Do YYYY ");
  honoluluTimeEl.innerHTML = `${honoluluTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;

  let losAngelesEl = document.querySelector("#los-angeles");
  let losAngelesDateEl = losAngelesEl.querySelector(".date");
  let losAngelesTimeEl = losAngelesEl.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateEl.innerHTML = losAngelesTime.format("MMMM Do YYYY ");
  losAngelesTimeEl.innerHTML = `${losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;

  let parisEl = document.querySelector("#paris");
  if (parisEl) {
    let parisDateEl = parisEl.querySelector(".date");
    let parisTimeEl = parisEl.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");

    parisDateEl.innerHTML = parisTime.format("MMMM Do YYYY ");
    parisTimeEl.innerHTML = `${parisTime.format(
      "h:mm:ss [<small>]A[</small>]"
    )}`;
  }

  if (selectedCity) {
    updateCityTime(selectedCity);
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;

  selectedCityTimeZone =
    cityTimeZone === "current" ? moment.tz.guess() : cityTimeZone;

  updateCityTime(selectedCityTimeZone);
}

function updateCityTime(timeZone) {
  let cityName = timeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(timeZone);

  let mainEl = document.querySelector("#main");
  mainEl.innerHTML = `<div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  
  `;
}
updateDate();
setInterval(updateDate, 1000);

let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);
