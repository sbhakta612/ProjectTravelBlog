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

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2JoYWt0YTEiLCJhIjoiY2xqeTcxMnZiMDI3ZzNocXI1amkycm9vcCJ9.wvQNiCSgwpkhNaRe9KAx4w";

const map = new mapboxgl.Map({
  container: "myMapBox",
  style: "mapbox://styles/mapbox/streets-v12",
  center: [135, 90],
  zoom: 1,
});

const marker1 = new mapboxgl.Marker();
marker1.setLngLat([-90.0489801, 35.1495343]);

marker1.addTo(map);

const marker2 = new mapboxgl.Marker();
marker2.setLngLat([129.0688702, 35.2100142]);

marker2.addTo(map);

const marker3 = new mapboxgl.Marker();
marker3.setLngLat([139.6503106, 35.6761919]);

marker3.addTo(map);

const marker4 = new mapboxgl.Marker();
marker4.setLngLat([-9.0512662, 53.274001]);

marker4.addTo(map);

const marker5 = new mapboxgl.Marker();
marker5.setLngLat([11.2523792, 43.7679178]);

marker5.addTo(map);
