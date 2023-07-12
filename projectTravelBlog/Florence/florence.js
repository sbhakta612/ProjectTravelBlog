let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

const airPlane = document.getElementById("airPlane");
const linksNav = document.querySelectorAll(".topNav a");

linksNav.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    airPlane.classList.add("animate");
  });

  link.addEventListener("mouseleave", () => {
    airPlane.classList.remove("animate");
  });
});

const forecast = document.getElementById("forecast");

fetch(
  "https://api.openweathermap.org/data/3.0/onecall?lat=43.76&lon=11.25&units=metric&appid=36d197eb10a0afdeece4668f3a6a3c70"
).then(function (response) {
  response.json().then(function (result) {
    const temp = result.current.temp;
    const weather = result.current.weather[0].description;
    const icon = result.current.weather[0].icon;
    const icon1 = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    forecast.innerHTML = `The current weather is <br> ${temp}&deg;C with ${weather}  <img src="${icon1}">`;
    forecast.classList.add("currentWeather");
    forecast.querySelector("img").classList.add("iconImg");
  });
});
mapboxgl.accessToken =
  "pk.eyJ1Ijoic2JoYWt0YTEiLCJhIjoiY2xqeTcxMnZiMDI3ZzNocXI1amkycm9vcCJ9.wvQNiCSgwpkhNaRe9KAx4w";

const map = new mapboxgl.Map({
  container: "myMapBox",
  style: "mapbox://styles/mapbox/streets-v12",
  center: [11.2523792, 43.7679178],
  zoom: 10,
});

const marker1 = new mapboxgl.Marker();
marker1.setLngLat([11.2523792, 43.7679178]);

marker1.addTo(map);
