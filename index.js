function updateDate() {
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
}

updateDate();
setInterval(updateDate, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);
