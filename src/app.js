//function updateTime() {
//let londonBox = document.querySelector("#london");
//let londonTime = londonBox.querySelector(".time");
// let londonDay = londonBox.querySelector(".day");
//let londonTz = moment().tz("Europe/London");
//londonTime.innerHTML = londonTz.format("hh:mm:ss [<small>]A[</small>]");
//londonDay.innerHTML = londonTz.format("ddd Do MMMM YYYY");
//}

//updateTime();
//setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let cityBlock = document.querySelector("#cityBlock");
  cityBlock.innerHTML = `
  <div class="city-name">${cityName}</div>
          <div class="time">${cityTime.format(
            "hh:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
          <div class="day">${cityTime.format("ddd Do MMMM YYYY")}</div>`;
}

let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", updateCity);
