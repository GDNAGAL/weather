const findWether = document.querySelector("#findWether");
const forecast_container = document.querySelector(".forecast-container");

function forecastPrint(date) {
  return `<div class="forecast ${date == day ? "today" : ""}">
  <div class="forecast-header">
    <div class="day">Monday</div>
    <div class="date">${date}</div>
  </div>
  <div class="forecast-content">
    <div class="location">New York</div>
    <div class="degree">
      <div class="num">23<sup>o</sup>C</div>
      <div class="forecast-icon">
        <img src="images/icons/icon-1.svg" alt="" class="icon-f" />
      </div>
    </div>
    <span class="moredetail">
      <img src="images/icon-umberella.png" alt="" />20%
    </span>
    <span class="moredetail">
      <img src="images/icon-wind.png" alt="" />18km/h
    </span>
    <span class="moredetail">
      <img src="images/icon-compass.png" alt="" />East
    </span>
  </div>
</div>`;
}

const date = new Date();
let day = date.getDate();
for (d = 0; d < 7; d++) {
  forecast_container.insertAdjacentHTML("beforeend", forecastPrint(day + d));
}

console.log(forecastPrint);
const forecast = document.querySelectorAll(".forecast");

forecast.forEach((item, index) => {
  item.addEventListener("click", function () {
    for (i = 0; i < forecast.length; i++) {
      forecast[i].classList.remove("today");
    }
    forecast[index].classList.toggle("today");
  });
});
