function updateTime() {
  // berlin
  let berlinElement = document.querySelector("#berlin");
  let berlinDateElement = berlinElement.querySelector(".date");
  let berlinTimeElement = berlinElement.querySelector(".time");
  let berlinTime = moment().tz("Europe/Berlin");
  berlinDateElement.innerHTML = moment().format("MMMM Do YYYY");
  berlinTimeElement.innerHTML = berlinTime.format("HH:mm:ss");

  // tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");
  tokyoDateElement.innerHTML = moment().format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("HH:mm:ss");

  // tokyo
  let mexicoCityElement = document.querySelector("#mexico-city");
  let mexicoCityDateElement = mexicoCityElement.querySelector(".date");
  let mexicoCityTimeElement = mexicoCityElement.querySelector(".time");
  let mexicoCityTime = moment().tz("America/Mexico_City");
  mexicoCityDateElement.innerHTML = moment().format("MMMM Do YYYY");
  mexicoCityTimeElement.innerHTML = mexicoCityTime.format("HH:mm:ss");
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("HH:mm:ss")}</div>
        </div>
        <a href="index.html">Show previous cities</a>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
