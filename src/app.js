function updateTime() {
  let londonBox = document.querySelector("#london");
  let londonTime = londonBox.querySelector(".time");
  let londonDay = londonBox.querySelector(".day");
  let londonTz = moment().tz("Europe/London");
  londonTime.innerHTML = londonTz.format("hh:mm:ss [<small>]A[</small>]");
  londonDay.innerHTML = londonTz.format("ddd Do MMMM YYYY");
}

updateTime();
setInterval(updateTime, 1000);
