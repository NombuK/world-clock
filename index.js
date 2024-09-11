function updateDate() {
  let losAngelesEl = document.querySelector("#los-angeles");
  let losAngelesDateEl = losAngelesEl.querySelector(".date");
  let losAngelesTimeEl = losAngelesEl.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateEl.innerHTML = losAngelesTime.format("MMMM Do YYYY ");
  losAngelesTimeEl.innerHTML = `${losAngelesTime.format(
    "h:mm:ss:SSS [<small>]A[</small>]"
  )}`;

  let parisEl = document.querySelector("#paris");
  let parisDateEl = parisEl.querySelector(".date");
  let parisTimeEl = parisEl.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateEl.innerHTML = parisTime.format("MMMM Do YYYY ");
  parisTimeEl.innerHTML = `${parisTime.format(
    "h:mm:ss:SSS [<small>]A[</small>]"
  )}`;
}

updateDate();
setInterval(updateDate, 1);
