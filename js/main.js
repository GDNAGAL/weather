const findWether = document.querySelector("#findWether");
const forecast_container = document.querySelector(".forecast-container");

// factch data from api
const getdata = async function () {
  try {
    const factchapi = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=776313bc8d2245078a660229232403&q=Bikaner&days=7&aqi=yes&alerts=yes`
    );
    const data = await factchapi.json();
    // console.log(data);
    return data;
  } catch (err) {
    // console.log(err);
  }
};
async function temp1() {
  const getdata2 = await getdata();
  const temp2 = getdata2.forecast.forecastday;
  // console.log(temp2);)
  return temp2;
}
const temp4 = Promise.resolve(temp1()).then((value) => {
  for (d = 0; d < 7; d++) {
    forecast_container.insertAdjacentHTML("beforeend", forecastPrint(value[d]));
  }
});

function forecastPrint(date) {
  console.log(date);
  return `<div class="forecast ${date == 0 ? "today" : ""}">
  <div class="forecast-header">
    <div class="day">Monday</div>
    <div class="date">${date.date}</div>
  </div>
  <div class="forecast-content">
    <div class="location">Bikaner</div>
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

// for (d = 0; d < 7; d++) {
//   forecast_container.insertAdjacentHTML("beforeend", forecastPrint(temp4[d]));
// }

// console.log(forecastPrint);

const foreCast = document.querySelectorAll(".forecast");

foreCast.forEach((item, index) => {
  item.addEventListener("click", function () {
    for (i = 0; i < foreCast.length; i++) {
      foreCast[i].classList.remove("today");
    }
    foreCast[index].classList.toggle("today");
  });
});
