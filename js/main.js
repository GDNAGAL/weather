const forecast_container = document.querySelector(".forecast-container");
const dat = new Date();
const todaydate = dat.toISOString().slice(0, 10);
const formEl = document.querySelector("#find-location");

// Fetch data from api
const getdata = async function (cityLocation = "Bikaner") {
  try {
    const fetchApi = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=776313bc8d2245078a660229232403&q=${cityLocation}&days=7&aqi=yes&alerts=yes`
    );
    const data = await fetchApi.json();
    const response_forecast = data.forecast.forecastday;
    forecast_container.innerHTML = "";
    document.querySelector("#cityval").value = "";
    for (d = 0; d < 7; d++) {
      forecast_container.insertAdjacentHTML(
        "beforeend",
        forecastPrint(response_forecast[d], data)
      );
    }
    // Calling the active class function
    transRender();
  } catch (err) {
    alert("Please Check City Name ! ");
    defaultload();
  }
};

// Function to create active class
function transRender() {
  const foreCast = document.querySelectorAll(".forecast");
  foreCast.forEach((item, index) => {
    item.addEventListener("click", function () {
      for (i = 0; i < foreCast.length; i++) {
        foreCast[i].classList.remove("today");
      }
      foreCast[index].classList.toggle("today");
    });
  });
}

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
// print forecast
function forecastPrint(date, cityLocation) {
  let getday = new Date(date.date);
  let day = weekday[getday.getDay()];
  // console.log(day);
  return `<div class="forecast ${date.date == todaydate ? "today" : ""}">
  <div class="forecast-header">
    <div class="day">${day}</div>
    <div class="date">${date.date}</div>
  </div>
  <div class="forecast-content">
    <div class="location">${cityLocation.location.name}</div>
    <span class="moredetail">${cityLocation.location.region}, ${
    cityLocation.location.country
  }</span>
    <div class="degree">
      <div class="num">${date.day.avgtemp_c}<sup>o</sup>C</div>
      <div class="forecast-icon">
        <img src="${date.day.condition.icon}"  class="icon-f" />
      </div>
    </div>
    <span class="moredetail">
      <img src="images/icon-wind.png" alt="" />${date.day.maxwind_kph} km/h
    </span>
    <span class="moredetail">
      S-rise : ${date.astro.sunrise}
    </span>
    <span class="moredetail">
      S-set : ${date.astro.sunset}
    </span>
  </div>
</div>`;
}

//submit form and get data
formEl.addEventListener("submit", function () {
  const cityval = document.querySelector("#cityval").value;
  if (!cityval) return; // Guard clause
  // return inputval;
  getdata(cityval);
});

// default load data
defaultload();
function defaultload() {
  window.addEventListener("load", getdata());
}
