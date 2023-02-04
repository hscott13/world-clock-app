function updateTime() {
  let honoluluElement = document.querySelector("#honolulu");
  if (honoluluElement) {
    let honoluluTime = honoluluElement.querySelector(".time");
    let honoluluDay = honoluluElement.querySelector(".day");
    let honoluluTz = moment().tz("Pacific/Honolulu");
    honoluluTime.innerHTML = honoluluTz.format("hh:mm:ss [<small>]A[</small>]");
    honoluluDay.innerHTML = honoluluTz.format("ddd Do MMMM YYYY");
  }
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonTime = londonElement.querySelector(".time");
    let londonDay = londonElement.querySelector(".day");
    let londonTz = moment().tz("Europe/London");
    londonTime.innerHTML = londonTz.format("hh:mm:ss [<small>]A[</small>]");
    londonDay.innerHTML = londonTz.format("ddd Do MMMM YYYY");
  }
  let aucklandElement = document.querySelector("#auckland");
  if (aucklandElement) {
    let aucklandTime = aucklandElement.querySelector(".time");
    let aucklandDay = aucklandElement.querySelector(".day");
    let aucklandTz = moment().tz("Pacific/Auckland");
    aucklandTime.innerHTML = aucklandTz.format("hh:mm:ss [<small>]A[</small>]");
    aucklandDay.innerHTML = aucklandTz.format("ddd Do MMMM YYYY");
  }
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);

  cityBlock.classList.replace(`row`, `column`);

  cityBlock.innerHTML = `
  <div class="city" >
  <div class="city-name">${cityName}</div>
          <div class="time">${cityTime.format(
            "hh:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
          <div class="day">${cityTime.format("ddd Do MMMM YYYY")}</div>
</div>
<div>
<a href="/"><i class="fa-solid fa-arrow-left"></i></a>
</div>`;
}
let cityBlock = document.querySelector("#cityBlock");
let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", updateCity);
