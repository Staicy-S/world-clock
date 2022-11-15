function updateTime() {
  // berlin
  let berlinElement = document.querySelector("#berlin");
  let berlinDateElement = berlinElement.querySelector(".date");
  let berlinTimeElement = berlinElement.querySelector(".time");
  let berlinTime = moment().tz("Europe/berlin");
  berlinDateElement.innerHTML = moment().format("MMMM Do YYYY");
  berlinTimeElement.innerHTML = berlinTime.format("HH:mm:ss");

  // tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/tokyo");
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

updateTime();
setInterval(updateTime, 1000);
