const findWether = document.querySelector("#findWether");
const forecast = document.querySelectorAll(".forecast");

forecast.forEach((item, index) => {
  item.addEventListener("click", function () {
    for (i = 0; i < forecast.length; i++) {
      forecast[i].classList.remove("today");
    }
    forecast[index].classList.toggle("today");
  });
});
